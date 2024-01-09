
import style from './App.css';
import Search from './components/SerachBar';
import Filter from './components/Filter';
import Card from './components/Cards';
import ShowCard from './components/ShowCard';
import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import MobileWarning from './components/mobilewarning/MobileWarning';


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
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
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
      <div>
         {isMobile ?
        (
          <MobileWarning />
        ) : (
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
        )}
        
        
      </div>
    
  );
}

export default App;
