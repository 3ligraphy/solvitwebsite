import { compare } from 'bcryptjs';
import { SignJWT, jwtVerify } from 'jose';
import { NextRequest } from 'next/server';
// Note: Import db only in server-side contexts, not in middleware
let db: any = null;

// Lazy load database to avoid edge runtime issues
function getDB() {
  if (!db) {
    db = require('./database').default;
  }
  return db;
}

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production'
);

export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

export interface JWTPayload {
  userId: number;
  username: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

// Authenticate user with username/email and password
export async function authenticateUser(identifier: string, password: string): Promise<User | null> {
  const database = getDB();
  const user = database.prepare(`
    SELECT id, username, email, password, role 
    FROM users 
    WHERE username = ? OR email = ?
  `).get(identifier, identifier) as any;

  if (!user) {
    return null;
  }

  const isValidPassword = await compare(password, user.password);
  if (!isValidPassword) {
    return null;
  }

  return {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role
  };
}

// Generate JWT token
export async function generateToken(user: User): Promise<string> {
  const payload: JWTPayload = {
    userId: user.id,
    username: user.username,
    email: user.email,
    role: user.role
  };

  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(JWT_SECRET);
}

// Verify JWT token
export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as JWTPayload;
  } catch (error) {
    return null;
  }
}

// Get user from request
export async function getUserFromRequest(request: NextRequest): Promise<User | null> {
  const token = request.cookies.get('auth-token')?.value || 
                request.headers.get('authorization')?.replace('Bearer ', '');

  if (!token) {
    return null;
  }

  const payload = await verifyToken(token);
  if (!payload) {
    return null;
  }

  return {
    id: payload.userId,
    username: payload.username,
    email: payload.email,
    role: payload.role
  };
}

// Check if user is admin
export function isAdmin(user: User | null): boolean {
  return user?.role === 'admin';
}

// Middleware helper for protected routes
export async function requireAuth(request: NextRequest): Promise<User | Response> {
  const user = await getUserFromRequest(request);
  
  if (!user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return user;
}

// Middleware helper for admin routes
export async function requireAdmin(request: NextRequest): Promise<User | Response> {
  const user = await getUserFromRequest(request);
  
  if (!user || !isAdmin(user)) {
    return new Response(JSON.stringify({ error: 'Forbidden' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return user;
}
