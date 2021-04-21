import React, {useState, useEffect} from 'react'
import {getImages, getSeachedImages} from './getImages'
import Image from './Image'
import Masonry from 'react-masonry-component';
import Modal from 'react-modal';

const Gallery = ({inp}) => {


    const [state, setstate] = useState([])

    const [clickedImage, setClickedImage] = useState("")

    
    useEffect(async() => {
        setstate(await getImages());
    }, [])
    
    useEffect(async () =>{
        if( inp.trim() === '' )
            return;
        setstate(await getSeachedImages(inp))
    },[inp] )
    

    const customStyles = {
        content : {
            height: '400px',
            width:'400px',
            border : 'none',
            padding : 'none',
            margin : 'none',
            top : '50%',
            left : '50%',
            right : 'auto',
            bottom : 'auto',
            marginRight : '-50%',
            transform : 'translate(-50%, -50%)',
            overflow : 'none'
        }
    }


    const masonryOptions = {
        transitionDuration: 0,
        isFitWidth : true
    };
     
    const imagesLoadedOptions = { background: '.my-bg-image-el' }

    Modal.setAppElement('#root') 

    return (
        <Masonry 
            className={'my-gallery-class'} // default ''
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
        >
            <Modal style={customStyles} isOpen={!!clickedImage} ariaHideApp={false} onRequestClose={()=>{ setClickedImage(null)}}>
                <img className='modal-img' src={clickedImage} ></img>
            </Modal>

            {state.length === 0 ? <p>No Photo Found</p> :
                state.map(image=>{
                    return <Image key={image.urls.small} urls={image['urls']} onClick={setClickedImage}/>
                })
            }     
        </Masonry>  
    )
}

export default Gallery
