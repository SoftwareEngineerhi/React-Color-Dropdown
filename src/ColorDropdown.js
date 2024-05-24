import React from "react";
import { useState } from "react";
export default function ColorDropDown(){
    const colors = [
        { name: 'Red', value: '#FF0000' },
        { name: 'Green', value: '#00FF00' },
        { name: 'Blue', value: '#0000FF' },
        { name: 'Yellow', value: '#FFFF00' },
        { name: 'Purple', value: '#800080' },
      ];
    const[selectedcolor,setcolor]=useState(colors[0].value);
    function handleColor(e){
        setcolor(e.target.value);
    }
    return(
        <>
        <h1>Color set</h1>
        <label htmlfor="colorid">colors select: </label>
        <select id="colorid" value={selectedcolor} onChange={handleColor}>
            {colors.map((color)=>(
            <option value={color.value}>
                {color.name}
            </option>
            ))}
        </select>
        <h3>selected color:{selectedcolor}</h3>
        </>

    )
}