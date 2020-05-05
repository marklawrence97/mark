import React from 'react';

const Post = ({ image, header, description, date}) => {
    return (
        <div className="ui fluid link card" style={{minHeight: "100%"}}>
            <div className="image">
            <img src={image} />
            </div>
            <div className="content">
                <div className="header">{header}</div>
                <div className="meta">
                    <a>{date}</a>
                </div>
                <div className="description">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default Post;