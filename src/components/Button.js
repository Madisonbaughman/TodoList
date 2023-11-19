import ButtonIcon from '../assets/icons/input-plus2.png';

const Button = ({newItem, updateListUI, submitFunc}) => {
    //attach event handler
    return (
        <>
            <button className='myButton' onClick={()=> {
                updateListUI((prev)=> [newItem, ...prev]);
                submitFunc();
                }}>
               <img className='myButton' src={ButtonIcon} alt='Button Icon'/> 
            </button>
        </>
    )
}

export default Button;