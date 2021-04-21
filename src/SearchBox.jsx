import React from 'react'
import {DebounceInput} from 'react-debounce-input';

const SearchBox = ({input, setInput}) => {


    const changeHandler = event =>{
         setInput(event.target.value)
    }

    return (
        <div>
            <DebounceInput   
                minLength={1}
                debounceTimeout={200} 
                value={input} 
                onChange={changeHandler} 
                className="searchBox" 
                type="text" name="search" 
                placeholder="Search Photo Here"
                ></DebounceInput>
        </div>
    )
}

export default SearchBox;
