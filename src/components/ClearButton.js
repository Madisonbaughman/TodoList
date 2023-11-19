const ClearButton = ({updateListUI, setMyListServer}) => {
    return (
        <button className='myButton clear' onClick={() => {
            updateListUI([]);
            setMyListServer([]);
        }}>
            Clear

        </button>
    )

}

export default ClearButton