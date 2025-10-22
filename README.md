# Business Card React App

A clean, mobile-first React business card application designed for NFC card scanning.

## Features

- **Clean, Modern Design**: Fresh UI with gradient backgrounds and glassmorphism effects
- **Mobile-First**: Optimized for mobile devices with responsive design
- **Contact Actions**: Three main action buttons:
  - **Contact Card**: Downloads a vCard (.vcf) file for easy contact saving
  - **Email**: Opens default email client with pre-filled recipient
  - **Call**: Initiates phone call on mobile devices
- **Dark Mode Support**: Automatically adapts to user's system preference
- **Accessibility**: Proper contrast ratios and touch-friendly button sizes

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Customization

To personalize the business card, edit the following in `src/App.js`:

- **Name**: Update the `name` variable
- **Title**: Update the `title` variable  
- **Company**: Update the `company` variable
- **Contact Info**: Update email, phone, and website in the contact info section
- **vCard Data**: Update the vCard template in the `handleContactCard` function
- **Avatar**: Replace the placeholder initials with an actual photo

## Technical Details

- Built with React 18
- Uses CSS Grid and Flexbox for layout
- Implements modern CSS features like backdrop-filter and CSS gradients
- Includes proper meta tags for mobile optimization
- Uses Inter font for clean typography

## Browser Support

- Modern browsers with ES6+ support
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)
- Responsive design works on all screen sizes
