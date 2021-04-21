import React from 'react'

const Image = ({urls, onClick}) => {
    return (
         <img style={{margin : '2px'}} width="350px" src={urls.small} onClick={()=>{onClick(urls.regular)}}></img>
    )
}

export default Image
