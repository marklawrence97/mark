import React from "react";
import Posts from '../../posts/posts';
import BlogSection from "../../components/BlogPost/BlogSection";
import "./prism.css";

class PostPage extends React.Component {
  state = {
    articleInfo: Posts.filter(post => post.name == this.props.match.params.id)[0],
    articles: Posts,
    upvotes: 0,
  };

  render() {
    const { articleInfo } = this.state;

    return (
      <div style={{margin: "3% 20%"}}>
        <a id="top"></a>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: "10px",
            justifyContent: "space-between",
            alignContent: "center"
          }}
        >
          <h2>{articleInfo.title}</h2>
        </div>
        <h5 style={{ marginTop: "0px" }}>{articleInfo.heading}</h5>
        {articleInfo.content.map((paragraph, key) => (
          <BlogSection article={paragraph} key={key} />
        ))}
      </div>
    );
  }
}

export default PostPage;
