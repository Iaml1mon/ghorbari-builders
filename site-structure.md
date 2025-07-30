# Contractor Portfolio Website Structure

## Site Map

### 1. Homepage (/)
- Hero Section
  - Uncle's name and photo
  - Short bio/tagline
  - Primary CTA: "Get a Quote"
- Services Section
  - House Building (1-2 story)
  - Building Design
  - Foundation Work
- Trust Elements
  - Experience badge (10+ years)
  - Projects completed badge (20+)
  - Client testimonials
- Quick Contact
  - WhatsApp button
  - Phone call button

### 2. Projects Page (/projects)
- Grid layout of completed projects
- Filter by project type (optional)
- Each project card shows:
  - Main project photo
  - Project title
  - Brief description
  - "View Details" button

### 3. Project Details (/project/:id)
- Project gallery (multiple photos)
- Project information:
  - What was done (foundation, design, building)
  - Cost (optional)
  - Client/Owner name (if allowed)
  - Timeline
  - Location (general area)

### 4. Get Quote (/quote)
- Simple contact form:
  - Name (required)
  - Phone number (required)
  - Service needed (dropdown)
  - Project description (textarea)
  - Submit button
- Alternative contact methods
  - WhatsApp direct link
  - Phone number
  - Email (if available)

### 5. About (/about)
- Detailed bio of the uncle
- His experience and expertise
- Work philosophy
- Team information (if applicable)
- Service area coverage

## Components Structure

### Layout Components
- Header (with navigation and language toggle)
- Footer (with contact info and social links)
- MobileNav (hamburger menu for mobile)

### UI Components
- Hero section
- ServiceCard
- ProjectCard
- TestimonialCard
- ContactForm
- LanguageToggle
- TrustBadge
- WhatsAppButton
- CallButton

### Pages
- HomePage
- ProjectsPage
- ProjectDetailPage
- QuotePage
- AboutPage

## Language Support
- English (default)
- Bangla (বাংলা)
- Toggle button in header
- All content stored in language files
- URL structure remains the same for both languages

## Mobile Features
- Sticky WhatsApp button (bottom right)
- Click-to-call phone numbers
- Touch-friendly navigation
- Optimized image loading
- Fast loading times

## Trust Building Elements
- Client testimonials with photos
- Before/after project photos
- Experience badges
- Certifications (if available)
- Clear contact information
- Professional photography

