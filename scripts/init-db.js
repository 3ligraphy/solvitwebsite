const Database = require('better-sqlite3');
const { hash } = require('bcryptjs');
const path = require('path');

const dbPath = path.join(process.cwd(), 'cms.db');
const db = new Database(dbPath);

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Initialize database tables
function initializeDatabase() {
  // Users table for admin authentication
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'admin',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Services table
  db.exec(`
    CREATE TABLE IF NOT EXISTS services (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      icon TEXT,
      gradient TEXT,
      services_list TEXT, -- JSON array of services
      use_case TEXT,
      category TEXT,
      active BOOLEAN DEFAULT 1,
      order_index INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Solutions table
  db.exec(`
    CREATE TABLE IF NOT EXISTS solutions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      subtitle TEXT,
      description TEXT,
      features TEXT, -- JSON array
      benefits TEXT, -- JSON array
      tech_stack TEXT, -- JSON array
      use_cases TEXT, -- JSON array
      active BOOLEAN DEFAULT 1,
      order_index INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Pricing plans table
  db.exec(`
    CREATE TABLE IF NOT EXISTS pricing_plans (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price TEXT,
      description TEXT,
      features TEXT, -- JSON array
      is_popular BOOLEAN DEFAULT 0,
      active BOOLEAN DEFAULT 1,
      order_index INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Company info table
  db.exec(`
    CREATE TABLE IF NOT EXISTS company_info (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      section TEXT UNIQUE NOT NULL, -- hero, about, mission, vision, etc.
      title TEXT,
      subtitle TEXT,
      content TEXT,
      data TEXT, -- JSON for additional structured data
      active BOOLEAN DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Testimonials table
  db.exec(`
    CREATE TABLE IF NOT EXISTS testimonials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      company TEXT,
      position TEXT,
      content TEXT NOT NULL,
      rating INTEGER DEFAULT 5,
      image_url TEXT,
      active BOOLEAN DEFAULT 1,
      order_index INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Contact submissions table
  db.exec(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      message TEXT NOT NULL,
      status TEXT DEFAULT 'new', -- new, read, replied, archived
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Settings table for site-wide configurations
  db.exec(`
    CREATE TABLE IF NOT EXISTS settings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key TEXT UNIQUE NOT NULL,
      value TEXT,
      type TEXT DEFAULT 'string', -- string, number, boolean, json
      description TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  console.log('Database initialized successfully');
}

// Create default admin user
async function createDefaultAdmin() {
  const existingUser = db.prepare('SELECT id FROM users WHERE username = ?').get('admin');
  
  if (!existingUser) {
    const hashedPassword = await hash('admin123', 12);
    
    db.prepare(`
      INSERT INTO users (username, email, password, role)
      VALUES (?, ?, ?, ?)
    `).run('admin', 'admin@solvitai.com', hashedPassword, 'admin');
    
    console.log('Default admin user created: admin/admin123');
  }
}

// Seed initial data
function seedInitialData() {
  // Check if data already exists
  const existingServices = db.prepare('SELECT COUNT(*) as count FROM services').get();
  
  if (existingServices.count === 0) {
    // Insert initial services data
    const services = [
      {
        title: "Customer Support & Call Center",
        description: "24/7 AI-powered customer service automation",
        icon: "Phone",
        gradient: "from-blue-400 to-cyan-500",
        services_list: JSON.stringify([
          "AI Voicebot & Chatbot Automation",
          "Ticket Classification & Routing",
          "AI Call Summarization & Transcription",
          "Agent Assist Automation",
          "Voice Authentication & Fraud Detection"
        ]),
        use_case: "Retail • Handles 80% of returns & tracking queries autonomously",
        category: "customer_support",
        order_index: 1
      },
      {
        title: "Business Process & Backoffice",
        description: "Streamline your operations with intelligent automation",
        icon: "FileText",
        gradient: "from-green-400 to-emerald-500",
        services_list: JSON.stringify([
          "Document Understanding & Processing",
          "Email Automation (NLP-driven)",
          "AI Meeting Summaries & Action Items"
        ]),
        use_case: "Legal Firms • Auto-extract clauses from 1,000+ contracts monthly",
        category: "business_process",
        order_index: 2
      },
      {
        title: "Sales & Marketing Automation",
        description: "Boost your sales performance with AI-driven insights",
        icon: "TrendingUp",
        gradient: "from-purple-400 to-pink-500",
        services_list: JSON.stringify([
          "Lead Scoring & Enrichment",
          "AI Email Personalization & Campaigns",
          "AI CRM Data Entry",
          "Call Analytics for Sales Teams"
        ]),
        use_case: "SaaS • Increases qualified leads by 40% through AI enrichment",
        category: "sales_marketing",
        order_index: 3
      }
    ];

    const insertService = db.prepare(`
      INSERT INTO services (title, description, icon, gradient, services_list, use_case, category, order_index)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    services.forEach(service => {
      insertService.run(
        service.title,
        service.description,
        service.icon,
        service.gradient,
        service.services_list,
        service.use_case,
        service.category,
        service.order_index
      );
    });

    // Insert initial company info
    const companyInfo = [
      {
        section: 'hero',
        title: 'Transform Operations. Automate Growth. Powered by AI.',
        subtitle: 'SolvIt AI delivers end-to-end intelligent automation solutions tailored for modern enterprises.',
        content: '',
        data: JSON.stringify({
          cta_text: 'Explore Our AI Solutions',
          background_gradient: 'from-blue-600 to-purple-700'
        })
      },
      {
        section: 'about',
        title: 'About SolvIt AI',
        subtitle: 'Leading AI automation partner in the MENA region',
        content: 'Enable enterprises to transform operations through secure, scalable, and human-centric AI automations that deliver measurable efficiency, growth, and innovation.',
        data: JSON.stringify({
          vision: 'To become the leading AI automation partner in the MENA region, powering a future where every business process is intelligent, seamless, and sustainable aligned with the transformative goals of 2030.',
          stats: [
            { label: 'Faster Time-to-Value', value: '2-4 week deployments for initial modules' },
            { label: 'Human-Like Interfaces', value: 'Multi-channel conversational AI that feels natural' },
            { label: 'Continuous Learning', value: 'Using retrieval-augmented generation (RAG) and feedback loops' },
            { label: 'Secure & Compliant', value: 'Privacy-aware architecture built for enterprise trust' }
          ]
        })
      }
    ];

    const insertCompanyInfo = db.prepare(`
      INSERT INTO company_info (section, title, subtitle, content, data)
      VALUES (?, ?, ?, ?, ?)
    `);

    companyInfo.forEach(info => {
      insertCompanyInfo.run(info.section, info.title, info.subtitle, info.content, info.data);
    });

    console.log('Initial data seeded successfully');
  }
}

async function initDB() {
  try {
    console.log('Initializing database...');
    initializeDatabase();
    
    console.log('Creating default admin user...');
    await createDefaultAdmin();
    
    console.log('Seeding initial data...');
    seedInitialData();
    
    console.log('Database initialization completed successfully!');
    console.log('Default admin credentials: admin/admin123');
  } catch (error) {
    console.error('Database initialization failed:', error);
    process.exit(1);
  }
}

initDB();
