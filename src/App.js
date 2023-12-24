
import style from './App.css';
import Search from './components/SerachBar';
import Filter from './components/Filter';
import Card from './components/Cards';
import ShowCard from './components/ShowCard';
import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';



 async function  take(api){
    
  const data=await fetch( api);
   const pokeDetail= await data.json();
   const arr=pokeDetail.results;
   
   return arr;

   
}

async function  take2(api){
    
  const data=await fetch( api);
   const pokeDetail= await data.json();
   
   
   return pokeDetail;

   
}

function App() {
  
  const[poke,setPoke]=useState([])
  const [loading, setLoading] = useState(true);
  
  
  
  useEffect(()=>{
        async function call(){
          try {
          const daat=await take('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302');
          const pokeDetails = await Promise.all(daat.map(obj => take2(obj.url)));

            setPoke(pokeDetails);
          }finally {
            setLoading(false); 
          }
            
           
            
           
        };
        call();



  },[])
  
   

   


   
  return (
    <div className={style.body} style={{ position: 'relative' }}>
        <Search/>
        <Filter/>
        
        {loading && <div style={{color:'white',margin:"20rem",fontWeight:"bold"}}>Loading...</div>}
         <div style={{width:"95vw",height:"100vh",display:'flex',flexWrap:'wrap',margin:'auto'}}>
         {
            
            poke[0]&& poke.map((obj)=>{
                    const name=obj.name;
                    const id=obj.id;
                    const type=obj.types;
                    const stat=obj.stats;
                    const img=`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;
                    
                    {return <Card id={id} name={name} type={type} img={img} stat={stat}/>;}
            })
      }
      
         </div>
         
        
        
    </div>
  );
}

export default App;
