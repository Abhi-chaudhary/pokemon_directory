import { useSelector } from "react-redux"
import Style from './index.module.css'
const ShowCard=()=>{
    const show=useSelector((state)=>state.card.show)
    const stat=useSelector((state)=>state.card.stat)
    console.log(show)
    return(<>
    
    {show && <div className={Style.container}>
         <div>
            hp:{stat.hp}
         </div>
         <div>
         attack:{stat.attack}
         </div>
         <div>
         defense:{stat.defense}
         </div>
         <div>
         special_attack:{stat.special_attack}
         </div>
         <div>
         special_defense:{stat.special_defense}
         </div>
         <div>
         speed:{stat.speed}
         </div>

          


    </div>}
    
    </>
    
    )
}

export default ShowCard