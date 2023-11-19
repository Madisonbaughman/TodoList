import {useState} from 'react';
import Button from './Button.js'
import '../styles/Todo.css';

const AddToDo = ({myListUI, updateListUI}) => {
    // props to button so it can call handler to update state
    // would also need to pass setState
    // could also pass an event handler to button to call an API

    const [newItem, setItem] = useState('');

    const handleInput = (e) => {
        setItem(e.target.value)
    }

    const handleSubmit = async () => {
        setItem('')
        try{
            let response = await fetch('https://tough-goat-visor.cyclic.app/task', {
                    Method: 'POST',
                    Headers: {
                        Accept: 'application.json',
                        'Content-Type': 'application/json'
                    },
                    Body: JSON.stringify({
                        name: newItem,
                        date: 'Oct 16 2023',
                        isCompleted: false,
            }) 
                    
                    })
                    console.log(response)
            }
        catch (err){
            console.log('Didnt go through')
        }
    } 
    return (
        <div id='addItem'>
            <input type='text' placeholder='something' value={newItem} onChange={handleInput}></input>
            <Button newItem={newItem} updateListUI={updateListUI} submitFunc={handleSubmit}/>
            
        </div>
    )

}

export default AddToDo;

 
 

