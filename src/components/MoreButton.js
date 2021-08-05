import '../assets/css/MoreButton.css';

export default function MoreButton({textOpened, textClosed, value, handler}){
    
    return (
        <button className="MoreButton" onClick={() => handler()}>
           {value ? textClosed : textOpened}
        </button>
    )
}
