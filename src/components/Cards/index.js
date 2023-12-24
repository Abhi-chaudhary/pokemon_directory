import { changeNaam,changeStat } from '../../Slice/cardSlice'
import Style from './index.module.css'
import { useDispatch,useSelector } from 'react-redux'
import { memo } from 'react'
const Card=(props)=>{

    const name=useSelector((state)=>state.search.search_name)
    const filter=useSelector((state)=>state.filter.filter_value)
    const dispatch=useDispatch()
    
    const handleMouse=(e)=>{
         dispatch(changeNaam(e)) 
         dispatch(changeStat(props.stat)) 
    }
    
    const naam=useSelector((state)=>state.card.naam)
   console.log(naam);

    
    return(<>
    {(name==="" || name===props.name) &&(filter==="filter" || props.type[0].type.name===filter) &&<div className={Style.container} onMouseEnter={()=>handleMouse(props.name)} onMouseLeave={()=>handleMouse("")}>
          
          {naam!==props.name && <div className={Style.left}>
               <h1 className={Style.name}>{props.name}</h1>
               {
                props.type.map((obj)=>{
                    return  <p className={Style.type}>{obj.type.name}</p>
                })
               }
               
          </div>}
          {naam!==props.name && <div className={Style.right}>
                 <img src={props.img} className={Style.img}></img>
                 <p className={Style.id}>#{props.id}</p>
                 
          </div>}
          {
            naam===props.name && <div className={Style.stat}>
                <div>
            hp:{props.stat[0].base_stat}
         </div>
         <div>
         attack:{props.stat[1].base_stat}
         </div>
         <div>
         defense:{props.stat[2].base_stat}
         </div>
         <div>
         special_attack:{props.stat[3].base_stat}
         </div>
         <div>
         special_defense:{props.stat[4].base_stat}
         </div>
         <div>
         speed:{props.stat[5].base_stat}
         </div>

            </div>
          }
          <div className={Style.logo}>POKEMON</div>
          
       </div>}
       
    </>)
}

export default Card;