import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '../../../../lib/auth';

// Lazy load database to avoid edge runtime issues
function getDB() {
  return require('../../../../lib/database').default;
}

export async function GET() {
  try {
    const db = getDB();
    const services = db.prepare(`
      SELECT * FROM services 
      WHERE active = 1 
      ORDER BY order_index ASC, created_at DESC
    `).all();

    return NextResponse.json({ services });
  } catch (error) {
    console.error('Get services error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const authResult = await requireAdmin(request);
  if (authResult instanceof Response) {
    return authResult;
  }

  try {
    const {
      title,
      description,
      icon,
      gradient,
      services_list,
      use_case,
      category,
      order_index
    } = await request.json();

    if (!title || !description) {
      return NextResponse.json(
        { error: 'Title and description are required' },
        { status: 400 }
      );
    }

    const db = getDB();
    const result = db.prepare(`
      INSERT INTO services (
        title, description, icon, gradient, services_list, 
        use_case, category, order_index, updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    `).run(
      title,
      description,
      icon || 'Zap',
      gradient || 'from-blue-400 to-cyan-500',
      JSON.stringify(services_list || []),
      use_case || '',
      category || 'general',
      order_index || 0
    );

    const service = db.prepare('SELECT * FROM services WHERE id = ?').get(result.lastInsertRowid);

    return NextResponse.json({ service }, { status: 201 });
  } catch (error) {
    console.error('Create service error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  const authResult = await requireAdmin(request);
  if (authResult instanceof Response) {
    return authResult;
  }

  try {
    const {
      id,
      title,
      description,
      icon,
      gradient,
      services_list,
      use_case,
      category,
      order_index,
      active
    } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Service ID is required' },
        { status: 400 }
      );
    }

    const db = getDB();
    db.prepare(`
      UPDATE services 
      SET title = ?, description = ?, icon = ?, gradient = ?, 
          services_list = ?, use_case = ?, category = ?, 
          order_index = ?, active = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(
      title,
      description,
      icon,
      gradient,
      JSON.stringify(services_list || []),
      use_case,
      category,
      order_index,
      active,
      id
    );

    const service = db.prepare('SELECT * FROM services WHERE id = ?').get(id);

    return NextResponse.json({ service });
  } catch (error) {
    console.error('Update service error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const authResult = await requireAdmin(request);
  if (authResult instanceof Response) {
    return authResult;
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Service ID is required' },
        { status: 400 }
      );
    }

    const db = getDB();
    db.prepare('DELETE FROM services WHERE id = ?').run(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete service error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
