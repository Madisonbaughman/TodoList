import { useEffect } from 'react';

const ToDoList = ({myListUI, updateListUI, myListServer, setMyListServer}) => {
    // need to make dynamic to read state
    useEffect(() => {
    
        const getData = async () => {
            try{
                let data = await fetch('https://tough-goat-visor.cyclic.app/task')
                setMyListServer(data)
            } catch (err){
                console.log('Didnt work')
            }
        }
        getData()
    })

    console.log(myListServer)
    console.log(myListUI)

    return (
        <>
            <ul id="unordered"> 
                {myListServer.length > 0 ? myListServer.map(i => 
                    <li className='lineItem' key={i}>
                        <input type='checkbox'></input>
                        {i}
                    </li>
        ) : myListUI.map(i => 
            <li className='lineItem' key={i}>
                <input type='checkbox'></input>
                {i}
            </li>
)}
            </ul>
            
        </>
    )
}

export default ToDoList;