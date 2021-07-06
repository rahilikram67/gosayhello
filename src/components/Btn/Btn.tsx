import React from 'react'
import "./Btn.scss"
const Btn = (element: { type: any; classname: string; bgcolor: string; imgsrc?: string; label: string;click?:any}) => {
    return (
        <button type={element.type} className={"log-btn " + element.classname} style={{backgroundColor:element.bgcolor}} onClick={element.click}>
            {(element.imgsrc) ? <img src={element.imgsrc} alt="" className="mb-2" /> : <></>}
            {element.label}
        </button>
    )
}

export default Btn
