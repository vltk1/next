import Card from '@/app/components/containers/Card'
import Axis2 from '../../components/containers/Axis2'
import Font from '../../components/containers/Font'
import '../../styles/globals.scss'
export default function Kitami() {
  // let t = ""
  // for(let i=0;i<100;i++){
  //   t +=  ".axis-f" + i+ "{font-size:" + i  + "px}"
  // }

    return (
     <main>
      {/* {t} */}
      <Font el="h2" xs={[18, 1, 5]}>1212</Font>
      <Axis2 xs={[[1000, 2], [250, 100], [3, 2]]}
             md={[[1000, 2], [250, 100], [3, 2]]}>
        <div>
          <h2>Hello</h2>
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
      </Axis2>
     </main>
    )
  }
  