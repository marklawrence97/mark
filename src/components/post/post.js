import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Post = ({ image, header, description, date, url}) => {
    return (
        <Link smooth to={`/mark/post/${url}#top`}>
            <div className="ui fluid link card" style={{minHeight: "100%"}}>
                <div className="image">
                <img src={image} />
                </div>
                <div className="content">
                    <div className="header">{header}</div>
                    <div className="meta">
                        <p>{date}</p>
                    </div>
                    <div className="description">
                        {description}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Post;