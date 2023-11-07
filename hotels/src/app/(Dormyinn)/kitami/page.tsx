import Card from '@/app/components/containers/Card'
import Axis2 from '../../components/containers/Axis2'
import Font from '../../components/containers/Font'
import '../../styles/globals.scss'
export default function Kitami() {
  // let t = ""
  // for(let i=0;i<100;i++){
  //   t +=  ".axis-w" + i + "{max-width:" + i + "%}"
  //       for(let s=0;s<i;s++){
  //         if(s == 5){
  //           t +=  ".axis-w" + i + "__." + s + "{max-width:" + i + "." + s + "%}"
  //         }
  //   }
  // }
    return (
     <main>
      <Axis2 xs={[[600, 3], [250, 200], [0, 0]]}>
        <div>
          <h2>Hello</h2>
        </div>
        <div>
          <h3>Hello</h3>
        </div>
      </Axis2>
     </main>
    )
  }
  