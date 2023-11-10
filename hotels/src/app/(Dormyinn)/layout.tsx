import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Dormyinn',
  keywords: 'Dormyinn',
  description: 'Dormyinn page all'
}

export default function DromyinnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
         <menu>
           <li className="flex">HOME</li>
              <li>SHOP</li>
              <li>PRODUCT</li>
              <li>PAGES</li>
              <li>BLOG</li>
         </menu>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  )
}
