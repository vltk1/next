import type { Metadata } from 'next'
import "../styles/base.scss"
import Fbox from '../components/containers/Fbox'

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
          <Fbox>
            <>
            <h1><img src="https://alukas.presslayouts.com/wp-content/themes/alukas/assets/images/logo.svg" alt="" /></h1>
            <Fbox el='menu'>
              <li>HOME</li>
              <li>SHOP</li>
              <li>PRODUCT</li>
              <li>PAGES</li>
              <li>BLOG</li>
            </Fbox>
            </>
          </Fbox>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  )
}
