import React from "react";
import CodeSnippit from "./Code/CodeSnippit";
import ImageInfo from "./Image/ImageInfo";
import Content from "./Text/Content";
import Heading from "./Header/Heading";

class BlogSection extends React.Component {
  render() {
    const { article } = this.props;

    return (
      <>
        {article.heading ? <Heading heading={article.heading} /> : null}
        {article.textContent ? (
          <Content textContent={article.textContent} />
        ) : null}
        {article.imageInfo.imageUrl ? <ImageInfo article={article} /> : null}
        {article.codeSnippit.content !== "" ? (
          <CodeSnippit
            language={article.codeSnippit.language}
            code={article.codeSnippit.content}
          />
        ) : null}
      </>
    );
  }
}

export default BlogSection;
