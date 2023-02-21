import React, { useState } from 'react'
import {Multiselect} from 'multiselect-react-dropdown'
// import Checkbox from '@mui/material/Checkbox';
function AddTextField() { 

    const data = [
    
        {Course:'ECE',id:1},
        {Course:'EEE',id:1},
        {Course:'Viscom',id:1},
        {Course:'B.Tech',id:1},
        {Course:'Music',id:1},
        {Course:'Law',id:1},
        {Course:'BBA',id:1},
        {Course:'B.Com',id:1},
        {Course:'M.Sc',id:1},
        {Course:'MBA',id:1},
        {Course:'Mech',id:1},
        {Course:'B.Sc',id:1},

    ]

    const[options] = useState(data);
  return (
    <div sx={{width:'300px',justifyContent:'center',display: { xs: "flex", md: 'none'} }} >
     <div>
        <h3 style={{color:'blue'}}> Select Course 
        </h3>

        <Multiselect options={options} displayValue='Course' /> 
    {/* <Checkbox aria-label={options} /> */}
    </div>
    </div>
    
  )
}

export default AddTextField