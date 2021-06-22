import { useState, useEffect } from "react";
import '../assets/css/DropDownList.css';

export default function DropDownList({type, title, defaultValue, list, update}) {
    const [current, setCurrent] = useState(defaultValue);
    const [isClosed, setIsClosed] = useState(true);
    const [ulClassName, setUlClassName] = useState("DropDownList__list DropDownList__list_hover");
    const handlerOpen = ()=> {
        setUlClassName("DropDownList__list DropDownList__list_open");
    };
    const handlerSelected = (value)=> {
        setUlClassName("DropDownList__list");
        setIsClosed(!isClosed);
        setCurrent(value);
        update(type, value);
    };
    useEffect(() => {
        setTimeout(() => {
            setUlClassName("DropDownList__list DropDownList__list_hover");
        }, 1000);
    }, [isClosed]);
    return (
        <div className="DropDownList">
            <label className="DropDownList__current" onClick={()=>handlerOpen()}>{title + " " + current}</label> 
            <ul className={ulClassName}>
                {
                    list.map((item)=>(
                        <li className="DropDownList__item" key={item.value} onClick={()=>handlerSelected(item.value)}>{item.text}</li>
                    ))
                }
            </ul>
        </div>
    )
}