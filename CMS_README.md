# SolvIt AI CMS System

A comprehensive Content Management System (CMS) built with Next.js internal backend for managing all website content.

## Features

### 🔐 Authentication System
- JWT-based authentication
- Secure admin login/logout
- Protected admin routes with middleware
- Default admin user: `admin` / `admin123`

### 📊 Admin Dashboard
- Modern, responsive admin interface
- Real-time content management
- Overview dashboard with statistics
- Tabbed navigation for different content types

### 🗄️ Database Management
- SQLite database with Better SQLite3
- Comprehensive schema for all content types
- Automatic database initialization
- Seed data for quick setup

### 📝 Content Types Managed

#### Services
- Title, description, and icon
- Service lists (JSON array)
- Use cases and categories
- Gradient colors for styling
- Active/inactive status
- Custom ordering

#### Company Information
- Hero section content
- About section details
- Mission and vision statements
- Structured data in JSON format

#### Pricing Plans
- Plan names and pricing
- Feature lists
- Popular plan highlighting
- Custom ordering

#### Contact Submissions
- Form submissions tracking
- Status management (new, read, replied, archived)
- Admin notifications

#### Settings
- Site-wide configuration options
- Key-value pairs with type validation
- JSON data support

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Initialize Database
```bash
node scripts/init-db.js
```

### 3. Environment Variables
Create `.env.local` file:
```env
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

### 4. Run Development Server
```bash
npm run dev
```

## Admin Access

### Login Page
Navigate to: `http://localhost:3000/admin/login`

**Default Credentials:**
- Username: `admin`
- Password: `admin123`

### Dashboard
After login: `http://localhost:3000/admin/dashboard`

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout  
- `GET /api/auth/me` - Get current user

### CMS Content Management
- `GET|POST|PUT|DELETE /api/cms/services` - Manage services
- `GET|POST|PUT /api/cms/company-info` - Manage company information
- `GET|POST|PUT|DELETE /api/cms/pricing` - Manage pricing plans

## Database Schema

### Tables
- `users` - Admin users and authentication
- `services` - Service offerings and details
- `company_info` - Company sections (hero, about, etc.)
- `pricing_plans` - Pricing tiers and features
- `testimonials` - Customer testimonials
- `contact_submissions` - Contact form submissions
- `settings` - Site-wide configuration

## Security Features

- JWT token authentication with 24-hour expiration
- Password hashing with bcrypt (12 rounds)
- Protected admin routes via middleware
- SQL injection prevention with prepared statements
- CORS and security headers

## Frontend Integration

### Using CMS Data
Components automatically fetch data from CMS APIs:

```tsx
// Example: Services component fetches from CMS
const [services, setServices] = useState([])

useEffect(() => {
  fetch('/api/cms/services')
    .then(res => res.json())
    .then(data => setServices(data.services))
}, [])
```

### Dynamic Content Rendering
- Services are rendered from database content
- Icons mapped from string names to Lucide components
- Gradients and styling applied dynamically
- Content can be toggled active/inactive

## Customization

### Adding New Content Types
1. Add table schema to `lib/database.ts`
2. Create API routes in `app/api/cms/[type]/route.ts`
3. Add admin interface in dashboard
4. Update frontend components to fetch from API

### Styling
- Tailwind CSS for responsive design
- Framer Motion for animations
- Lucide React for icons
- Custom gradients and color schemes

## Production Deployment

### Environment Variables
```env
JWT_SECRET=your-production-secret-key-minimum-32-characters
NODE_ENV=production
```

### Database
- SQLite file will be created in project root
- Consider backing up `cms.db` file regularly
- For production, consider migrating to PostgreSQL/MySQL

### Security Checklist
- [ ] Change default admin credentials
- [ ] Use strong JWT secret (32+ characters)
- [ ] Enable HTTPS in production
- [ ] Configure proper CORS settings
- [ ] Set up regular database backups

## Troubleshooting

### Database Issues
```bash
# Reinitialize database
rm cms.db
node scripts/init-db.js
```

### Authentication Issues
- Clear browser cookies
- Check JWT_SECRET in environment variables
- Verify admin user exists in database

### API Issues
- Check Next.js server logs
- Verify API routes are accessible
- Test authentication headers

## Support

For issues and questions:
1. Check the console for error messages
2. Verify database connectivity
3. Ensure all dependencies are installed
4. Check environment variables are set correctly

---

**Built with ❤️ for SolvIt AI**
