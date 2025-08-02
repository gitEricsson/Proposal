# 💕 May I Be Yours? - A Romantic Proposal Website

A beautifully crafted, interactive romantic proposal website built with Next.js, featuring animated elements, music, and a complete date planning experience.

## 🌟 Features

### ✨ Interactive Proposal Experience

- **Animated Confession Page**: Beautiful gradient background with floating sparkles and heart animations
- **Background Music**: Custom audio player with romantic music ("I Wanna Be Yours")
- **Scattered Photos**: Dynamic photo display component showing shared memories
- **Interactive Elements**: Bouncing hearts, sparkles, and smooth animations using Framer Motion

### 📅 Date Planning System

- **Interactive Calendar**: Choose from available dates with unavailable dates clearly marked
- **Date Choice Selection**: Multiple romantic date options including:
  - 🍰 Pastry Café (Chocolat Royal)
  - 🍽️ Fine Dining (Cactus Restaurant)
  - 🥘 Local Dish & Art (Nok by Alara)
  - 🍜 Korean Cuisine (Huahan Korean Restaurant)
  - 🎬 Cinema (EbonyLife Cinema)
  - 📚 Library Café (Jazzhole)

### 📧 Email Notifications

- **Automatic Email System**: Sends confirmation emails to both parties when a date is selected
- **Beautiful Email Templates**: Styled HTML emails with romantic themes
- **SMTP Integration**: Uses Brevo (formerly Sendinblue) for reliable email delivery

### 🎨 Design & UX

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Custom Fonts**: Lavishly Yours, Bilbo, and Bilbo Swash Caps for romantic typography
- **Gradient Backgrounds**: Beautiful purple and pink gradients throughout
- **Glass Morphism**: Modern backdrop blur effects and transparency
- **Custom Favicon**: Heart-shaped favicon replacing default React icon

### 🎵 Audio Experience

- **Background Music**: Romantic soundtrack playing throughout the experience
- **Sound Effects**: Pop sounds for interactions and selections
- **Audio Controls**: User-friendly audio player with fallback options

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- SMTP email service (Brevo recommended)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd may-i-be-yours
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-smtp-password
   YOUR_EMAIL=your-email@example.com
   HER_EMAIL=her-email@example.com
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
may-i-be-yours/
├── app/                    # Next.js 13+ App Router
│   ├── api/               # API routes
│   │   └── send-email/    # Email notification endpoint
│   ├── calendar/          # Interactive calendar page
│   ├── date-choice/       # Date selection page
│   ├── appreciation/      # Thank you page
│   ├── thinking/          # "Still thinking" page
│   ├── layout.tsx         # Root layout with favicon
│   ├── page.tsx           # Main proposal page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # Shadcn/ui components
│   ├── audio-player.tsx  # Custom audio player
│   ├── confetti.tsx      # Confetti animation
│   ├── scattered-photos.tsx # Photo display component
│   └── theme-provider.tsx # Theme context
├── public/               # Static assets
│   ├── audio/           # Music and sound effects
│   └── *.jpg/png        # Images and photos
└── lib/                 # Utility functions
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Email**: Nodemailer with Brevo SMTP
- **Audio**: HTML5 Audio API
- **Fonts**: Google Fonts (Lavishly Yours, Bilbo)

## 🎯 Key Components

### Main Proposal Page (`app/page.tsx`)

- Animated confession text with romantic messaging
- Interactive checkbox for agreement
- Smooth page transitions
- Background animations and effects

### Calendar Component (`app/calendar/page.tsx`)

- Interactive calendar with unavailable dates
- Month navigation
- Date selection with visual feedback
- Exam schedule integration

### Date Choice Component (`app/date-choice/page.tsx`)

- Multiple date option cards with images
- Detailed descriptions and locations
- Gradient backgrounds for each option
- Email integration for final selection

### Email API (`app/api/send-email/route.ts`)

- SMTP email sending
- Beautiful HTML email templates
- Dual recipient notifications
- Error handling and logging

## 🎨 Customization

### Changing the Proposal Text

Edit the confession text in `app/page.tsx` around lines 100-150.

### Adding New Date Options

Modify the `dateOptions` array in `app/date-choice/page.tsx` to add new date choices.

### Updating Unavailable Dates

Edit the `unavailableDates` array in `app/calendar/page.tsx` to mark new unavailable dates.

### Customizing Colors

Update the gradient classes in the CSS files or modify the Tailwind configuration.

## 📧 Email Setup

1. **Create a Brevo account** at [brevo.com](https://brevo.com)
2. **Generate an SMTP key** in your Brevo dashboard
3. **Update environment variables** with your credentials
4. **Test the email functionality** by selecting a date

## 🎵 Audio Files

Place your audio files in the `public/audio/` directory:

- `i-wanna-be-yours.mp3` - Background music
- `pop.mp3` - Selection sound effects

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

This is a personal project, but feel free to fork and customize for your own romantic proposal!

## 📄 License

This project is for personal use. Please respect the romantic nature of this application.

## 💝 Special Thanks

Built with love for a special someone. May your proposal be as magical as this website! ✨

---

**Note**: This website is designed for a romantic proposal experience. Please customize the content, dates, and personal details to match your specific situation.
