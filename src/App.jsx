import NavBar from './comps/NavBar'
import ServCards from './comps/ServCards'
import TecCard from './comps/TecCard'
import LocCard from './comps/LocCard'
import Wtebtn from './comps/Wtebtn'
import Redbtn from './comps/Redbtn'


function app() {
  return (
    <div>
      <NavBar />
      <LocCard/>
    </div>
  )
}

export default app

// <ServCards imgprop='./src/assets/impact-cars 1.png' servprop='Entretien' />
//<TecCard name='Jenson Button'/>