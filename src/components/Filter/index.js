import { changeFilter } from '../../Slice/filterSlice'
import Style from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
const Filter=()=>{
  const dispatch=useDispatch()
  const handleSelect=(e)=>{
       dispatch(changeFilter(e.target.value))
  }
  
    return(
        <>
          <div className={Style.container}>
          <select name="pokemon" id="pokemon" className={Style.filter} onClick={handleSelect}>
            <option value='filter' onClick={handleSelect}>Filter by Type</option>
            <option value="normal" onClick={handleSelect}>Normal</option>
            <option value="fire" onClick={handleSelect}>Fire</option>
            <option value="water" onClick={handleSelect}>Water</option>
            <option value="electric" onClick={handleSelect}>Electric</option>
            <option value="grass" onClick={handleSelect}>Grass</option>
            <option value="ice" onClick={handleSelect}>Ice</option>
            <option value="fighting" onClick={handleSelect}>Fighting</option>
            <option value="poison" onClick={handleSelect}>Poison</option>
            <option value="ground" onClick={handleSelect}>Ground</option>
            <option value="flying" onClick={handleSelect}>Flying</option>
            <option value="psychic" onClick={handleSelect}>Psychic</option>
            <option value="bug" onClick={handleSelect}>Bug</option>
            <option value="rock" onClick={handleSelect}>Rock</option>
            <option value="ghost" onClick={handleSelect}>Ghost</option>
            <option value="dragon" onClick={handleSelect}>Dragon</option>
            <option value="dark" onClick={handleSelect}>Dark</option>
            <option value="steel" onClick={handleSelect}>Steel</option>
            <option value="fairy" onClick={handleSelect}>Fairy</option>
            
        </select>
          </div>
        </>
    )
}

export default Filter