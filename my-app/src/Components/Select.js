import React from 'react'
// В похожем стиле написать чекбоксами (выбрать какой то чекбокс и нажать сабмит)
const Select = ({opt=[],callback})=>{
    return(
        // <select name="cars" id="cars" onChange={(e)=>callback(e.target.value)}>
        //     {opt.map((item)=><option value={item}>{item}</option>)}
        // </select>
        <select onChange={(e)=>callback(e.target.value)} name="cars" id="cars">
            {opt.map((item)=><option key={item} value={item}>{item}</option>)}

        </select>
    )
}

export default Select