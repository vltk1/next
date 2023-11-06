import Axis from '../../components/containers/Axis'
import Font from '../../components/containers/Font'

export default function Kitami() {
    return (
     <main>
      <Font el="h2" xs="*36 *1.8 *5 *<>">Dormyinn static</Font>
      <Axis xs={[4, 5, 0, 4]}>
        <Axis>
          <img src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/Rings-360x360.jpg" alt="" />
          <Font el="h2" xs="*24 *1.6 *7 *<>">RINGS</Font>
        </Axis>
        <Axis>
          <img src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/Rose-Gold-Bracelet-1-360x360.jpg" alt="" />
          <Font el="h2" xs="*24 *1.6 *7 *<>">BRACELETS</Font>
        </Axis>
        <Axis>
          <img src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/Sterling-Silver-Dangles-Earrings-1-360x360.jpg" alt="" />
          <Font el="h2" xs="*24 *1.6 *7 *<>">EARNINGS</Font>
        </Axis>
        <Axis>
          <img src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/Charm-Dangles-360x360.jpg" alt="" />
          <Font el="h2" xs="*24 *1.6 *7 *<>">CHARM</Font>
        </Axis>
      </Axis>
     </main>
    )
  }
  