import '@styles/globals.scss'
import "@styles/axis.scss"
import '@styles/theme/hero.scss'
import Hero from './sections/Hero'
import Category from './sections/Category'

export default function travel() {
    return (
     <main className='hero-t1'>
      <Hero />
      <Category />
     </main>
    )
}
  