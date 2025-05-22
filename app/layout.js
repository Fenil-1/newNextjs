export const metadata = {
  title: 'Form App',
  description: 'Simple form app with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 