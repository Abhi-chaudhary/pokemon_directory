import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    naam:'',
    
    stat:{
        hp:0,
        attack:0,
        defense:0,
        special_attack:0,
        special_defense:0,
        speed:0
    }
 }

 export const cardSlice= createSlice({
    name: 'card',
    initialState,
    reducers: {
        
        changeStat: (state,action)=>{
             state.stat.hp=action.payload[0].base_stat;
             state.stat.attack=action.payload[1].base_stat;
             state.stat.defense=action.payload[2].base_stat;
             state.stat.special_attack=action.payload[3].base_stat;
             state.stat.special_defense=action.payload[4].base_stat;
             state.stat.speed=action.payload[5].base_stat;

        },
        changeNaam:(state,action)=>{
              state.naam=action.payload
        }
    }
})

export const {changeStat,changeNaam} = cardSlice.actions

export default cardSlice.reducer
