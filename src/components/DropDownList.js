import { useState, useEffect } from "react";
import '../assets/css/DropDownList.css';
import searchItemFromList from "./utils/searchItemFromList";

export default function DropDownList({type, title, defaultValue, list, update}) {
    const [current, setCurrent] = useState(defaultValue);
    const [showCurrent, setShowCurrent] = useState(defaultValue);
    const [isClosed, setIsClosed] = useState(true);
    const [changeSelected, setChangeSelected] = useState(true);
    const [ulClassName, setUlClassName] = useState("DropDownList__list DropDownList__list_hover");
    const handlerOpen = ()=> {
        setIsClosed(false);
        setUlClassName("DropDownList__list DropDownList__list_open");
        setShowCurrent(title);
    };
    const handlerSelected = (value, text)=> {
        setUlClassName("DropDownList__list");
        setIsClosed(true);
        setChangeSelected(!changeSelected);
        setCurrent(value);
        update(type, value);
        setShowCurrent(text);
    };
    const handlerMouseEnter = () => {
        setShowCurrent(title);
    };
    const handlerMouseLeave = () => {
        if (!isClosed) return;
        setShowCurrent(searchItemFromList(list, "value", current).text);
    };
    useEffect(() => {
        setTimeout(() => {
            setUlClassName("DropDownList__list DropDownList__list_hover");
        }, 1000);
    }, [changeSelected]);
    return (
        <div className="DropDownList" onMouseEnter={()=>handlerMouseEnter()} onMouseLeave={()=>handlerMouseLeave()}>
            <label className="DropDownList__current" onClick={()=>handlerOpen()}>{showCurrent}</label> 
            <ul className={ulClassName}>
                {
                    list.map((item)=>(
                        <li className="DropDownList__item" key={item.value} onClick={()=>handlerSelected(item.value, item.text)}>{item.text}</li>
                    ))
                }
            </ul>
        </div>
    )
}