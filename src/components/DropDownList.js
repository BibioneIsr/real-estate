import { useState, useEffect } from "react";
import '../assets/css/DropDownList.css';
import searchItemFromList from "./utils/searchItemFromList";

export default function DropDownList({type, title, defaultValue, list, update, resetNumber}) {
    const resetCurrent = (value, isSet = true) => {
        const text = searchItemFromList(list, "value", value).text;
        return isSet ? setShowCurrent(text) : text;
    };
    
    const [countReset, setCountReset] = useState(resetNumber);
    const [current, setCurrent] = useState(defaultValue);
    const [showCurrent, setShowCurrent] = useState(resetCurrent(defaultValue, false));
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
        resetCurrent(current);
    };
    useEffect(() => {
        setTimeout(() => {
            setUlClassName("DropDownList__list DropDownList__list_hover");
        }, 1000);
    }, [changeSelected]);
    
    if (countReset !== resetNumber) {
        resetCurrent(defaultValue);
        setCountReset(resetNumber);
    }

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