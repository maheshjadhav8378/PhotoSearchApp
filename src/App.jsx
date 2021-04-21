import React, { useState } from 'react'
import Gallery from './Gallery'
import SearchBox from './SearchBox'

const App = () => {

    const [input, setInput] = useState('');

    return (
        <center>
            <h1>PhotoApp</h1>
            <SearchBox input={input} setInput={setInput}/>
            <Gallery inp={input} />
        </center>
    )
}

export default App
