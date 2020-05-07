import React from 'react';
import './image.css'

const ImageInfo = ({ article }) => {

    return (
        <img className="ui centered imageWidth image" 
             src={article.imageInfo.imageUrl} 
             style={{paddingBottom: "1em"}} 
             alt={article.imageInfo.imageAlt} />
    )
}

export default ImageInfo