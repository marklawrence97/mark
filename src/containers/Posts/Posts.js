import React from 'react';
import Post from '../../components/post/post';
import './Posts.css';


class Posts extends React.Component {
    state = {
        topClass: "active item",
        allPostsClass: "item"
    }

    handleTopClick = () => {
        if (this.state.topClass !== "active item") {
            this.setState({
                topClass: "active item",
                allPostsClass: "item"
            })
        }
    }

    handleAllClick = () => {
        if (this.state.allPostsClass !== "active item") {
            this.setState({
                topClass: "item",
                allPostsClass: "active item"
            })
        }
    }

    render() {

        return (
            <div className="posts">
                <h2>
                    {this.props.title}
                </h2>
                <div className="ui top attached tabular menu">
                    <a 
                        className={this.state.topClass} 
                        onClick={this.handleTopClick}>
                        Top
                    </a>
                    <a 
                        className={this.state.allPostsClass}
                        onClick={this.handleAllClick}>
                        All {this.props.title.charAt(0).toUpperCase() + this.props.title.substring(1)}
                    </a>
                </div>
                <div className="ui bottom attached segment">
                    <div className="ui stackable three column grid cards">
                            {this.props.posts.map(x => 
                            <div className="column" key={x.id}>
                                <Post 
                                    header={x.header} 
                                    image={x.image}
                                    description={x.description}
                                    date={x.date}/>
                            </div>
                            )}
                    </div>
                </div>
                <div className="ui divider bio-end"></div>
            </div>
        )
    }
}

export default Posts;