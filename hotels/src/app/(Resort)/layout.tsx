import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resort',
  keywords: 'RESORT',
  description: 'Resort page all'
}

export default function ResortLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>HEADER RESORT</header>
        {children}
        <footer>FOOTER RESORT</footer>
      </body>
    </html>
  )
}
