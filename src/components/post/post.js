import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ image, header, description, date, url}) => {
    return (
        <Link to={`/post/${url}`}>
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
        </Link>
    )
}

export default Post;