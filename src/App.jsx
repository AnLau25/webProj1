import NavBar from './comps/NavBar'
import ServCards from './comps/ServCards'
import TecCard from './comps/TecCard'
import LocCard from './comps/LocCard'
import Wtebtn from './comps/Wtebtn'
import Redbtn from './comps/Redbtn'
import Home from './comps/Home'
import Servspage from './comps/Servspage'
import Experts from './comps/Experts'
import Rndvs from './comps/Rndvs'
import Progbar from './comps/Progbar'


function app() {
  return (
    <div>
      <NavBar />
      <Progbar/>
      
    </div>
  )
}

export default app
//<Home/>
//<Servspage/>
//<Experts/>
//<ServCards imgprop='./src/assets/impact-cars 1.png' servprop='Entretien' />
//<TecCard name='Jenson Button'/>
//<LocCard imgprop='./src/assets/LocNepImg.png' loc='Nepean' t1='LunVen    8h00 - 20h00' t2='SamDim 9h00 - 17h00' adr='33 Rue Lamagie, K1K 3F3' />