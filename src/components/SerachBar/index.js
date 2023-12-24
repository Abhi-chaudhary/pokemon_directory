import { changeName } from '../../Slice/searchSlice';
import Style from './index.module.css'
import { useDispatch,useSelector } from 'react-redux';
const Search=()=>{
   const dispatch=useDispatch()
  const handleChange=(e)=>{
       dispatch(changeName(e.target.value));
  }

  

    return(
        <>
            <div className={Style.container} >
                <input type="text" placeholder="Search Pokemon By name or id" className={Style.search} onChange={handleChange}></input>
            </div>
        </>
    )
}

export default Search;