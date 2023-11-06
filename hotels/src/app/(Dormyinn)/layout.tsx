import type { Metadata } from 'next'
import '../styles/globals.scss'
import Axis from '../components/containers/Axis'

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
          <Axis xs={[2, 2, 0, 1]}>
            <>
            <h1><img src="https://alukas.presslayouts.com/wp-content/themes/alukas/assets/images/logo.svg" alt="" /></h1>
            <Axis el='menu'>
              <li className="flex">HOME</li>
              <li>SHOP</li>
              <li>PRODUCT</li>
              <li>PAGES</li>
              <li>BLOG</li>
            </Axis>
            </>
          </Axis>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  )
}
