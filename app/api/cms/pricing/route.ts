import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '../../../../lib/auth';

// Lazy load database to avoid edge runtime issues
function getDB() {
  return require('../../../../lib/database').default;
}

export async function GET() {
  try {
    const db = getDB();
    const pricingPlans = db.prepare(`
      SELECT * FROM pricing_plans 
      WHERE active = 1 
      ORDER BY order_index ASC, created_at DESC
    `).all();

    return NextResponse.json({ pricingPlans });
  } catch (error) {
    console.error('Get pricing plans error:', error);
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
      name,
      price,
      description,
      features,
      is_popular,
      order_index
    } = await request.json();

    if (!name || !price) {
      return NextResponse.json(
        { error: 'Name and price are required' },
        { status: 400 }
      );
    }

    const db = getDB();
    const result = db.prepare(`
      INSERT INTO pricing_plans (
        name, price, description, features, is_popular, 
        order_index, updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    `).run(
      name,
      price,
      description || '',
      JSON.stringify(features || []),
      is_popular || false,
      order_index || 0
    );

    const plan = db.prepare('SELECT * FROM pricing_plans WHERE id = ?').get(result.lastInsertRowid);

    return NextResponse.json({ pricingPlan: plan }, { status: 201 });
  } catch (error) {
    console.error('Create pricing plan error:', error);
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
      name,
      price,
      description,
      features,
      is_popular,
      order_index,
      active
    } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Pricing plan ID is required' },
        { status: 400 }
      );
    }

    const db = getDB();
    db.prepare(`
      UPDATE pricing_plans 
      SET name = ?, price = ?, description = ?, features = ?, 
          is_popular = ?, order_index = ?, active = ?, 
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(
      name,
      price,
      description,
      JSON.stringify(features || []),
      is_popular,
      order_index,
      active,
      id
    );

    const plan = db.prepare('SELECT * FROM pricing_plans WHERE id = ?').get(id);

    return NextResponse.json({ pricingPlan: plan });
  } catch (error) {
    console.error('Update pricing plan error:', error);
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
        { error: 'Pricing plan ID is required' },
        { status: 400 }
      );
    }

    const db = getDB();
    db.prepare('DELETE FROM pricing_plans WHERE id = ?').run(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete pricing plan error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
