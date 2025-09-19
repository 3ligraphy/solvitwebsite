import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '../../../../lib/auth';

// Lazy load database to avoid edge runtime issues
function getDB() {
  return require('../../../../lib/database').default;
}

export async function GET() {
  try {
    const db = getDB();
    const companyInfo = db.prepare(`
      SELECT * FROM company_info 
      WHERE active = 1 
      ORDER BY section ASC
    `).all();

    return NextResponse.json({ companyInfo });
  } catch (error) {
    console.error('Get company info error:', error);
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
    const { section, title, subtitle, content, data } = await request.json();

    if (!section) {
      return NextResponse.json(
        { error: 'Section is required' },
        { status: 400 }
      );
    }

    const db = getDB();
    const result = db.prepare(`
      INSERT INTO company_info (section, title, subtitle, content, data, updated_at)
      VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    `).run(
      section,
      title || '',
      subtitle || '',
      content || '',
      JSON.stringify(data || {})
    );

    const info = db.prepare('SELECT * FROM company_info WHERE id = ?').get(result.lastInsertRowid);

    return NextResponse.json({ companyInfo: info }, { status: 201 });
  } catch (error) {
    console.error('Create company info error:', error);
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
    const { id, section, title, subtitle, content, data, active } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Company info ID is required' },
        { status: 400 }
      );
    }

    const db = getDB();
    db.prepare(`
      UPDATE company_info 
      SET section = ?, title = ?, subtitle = ?, content = ?, 
          data = ?, active = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(
      section,
      title,
      subtitle,
      content,
      JSON.stringify(data || {}),
      active,
      id
    );

    const info = db.prepare('SELECT * FROM company_info WHERE id = ?').get(id);

    return NextResponse.json({ companyInfo: info });
  } catch (error) {
    console.error('Update company info error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
