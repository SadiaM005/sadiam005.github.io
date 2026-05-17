import './globals.css'
import { ThemeProvider } from './contexts/ThemeContext'

export const metadata = {
  title: 'Sadia Khalil — Software Engineer & AI/ML Developer',
  description: 'Portfolio of Sadia Khalil, a Software Engineering graduate from PUCIT specializing in full-stack development and AI/ML applications.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'AI/ML', 'React', 'FastAPI', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Sadia Khalil' }],
  openGraph: {
    title: 'Sadia Khalil — Software Engineer & AI/ML Developer',
    description: 'Portfolio showcasing full-stack development and AI/ML projects',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}