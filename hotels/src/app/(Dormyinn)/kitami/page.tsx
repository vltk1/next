import Axis from '../../components/containers/Axis'
import Font from '../../components/containers/Font'
import Button from '../../components/presentationals/Button'
import Image from 'next/image'
import '../../styles/globals.scss'
import "../../styles/axis.scss"

export default function Kitami() {
  // let t = ""
  // for(let i=0;i<100;i++){
  //   t +=  ".axis-f" + i+ "{font-size:" + i  + "px}"
  // }

    return (
     <main>
      {/* {t} */}
      <Font el="h2" xs={[28, 5, 3]}>
        dormy inn's basic brand offers the world "new standards in hotel values," by means of home-from-home relaxation and comfort resulting from knowhow gained in the dormitory business.
      </Font>

      

      <Axis xs={[[1000], [100, 100], [3, 2]]} variant = "vertical"
             md={[[1000, 2], [200, 100], [3, 2]]}>
        <div>
          <Font el="h2" xs={[14, 5, 7]} variant="mb-[20px]">
            青森〜秋田を巡る３泊4日の周遊プラン<br/>
            東北アートと自然を満喫する旅行
          </Font>
          <Image width={500} height={500} src="/vercel.svg" alt="Picture of the author"/>
          <Button variant='open'>Open</Button>
        </div>
        <div>
          <h3>Hello</h3>
        </div>
        <div>
          <h3>Hello</h3>
        </div>
        <div>
          <h3>Hello</h3>
        </div>
        <div>
          <h3>Hello</h3>
        </div>
        <div>
          <h3>Hello</h3>
        </div>
        <div>
          <h3>Hello</h3>
        </div>
        <div>
          <h3>Hello</h3>
        </div>
        <div>
          <h3>Hello</h3>
        </div>
      </Axis>
     </main>
    )
  }
  