import Header from '../components/Header'
import AddToDo from '../components/AddToDo.js';
import ClearButton from '../components/ClearButton.js'
import '../styles/Todo.css';
import ToDoList from '../components/ToDoList.js';
import {useState} from 'react';

const Todo = () => {
    const [myListUI, setMyListUI] = useState([])
    const [myListServer, setMyListServer] = useState([])

    return (
        <>
            <div id='todo_container'>
                <Header/>
                <AddToDo myListUI={myListUI} updateListUI={setMyListUI}/>
                <ToDoList myListUI={myListUI} updateListUI={setMyListUI} myListServer={myListServer} setMyListServer={setMyListServer}/>
                <ClearButton updateListUI={setMyListUI} setMyListServer={setMyListServer}/>
            </div>
            
        </>
    )
}
export default Todo;