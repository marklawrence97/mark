let Posts = [];

export default Posts = [
    {
        "_id": "5e3c6fd776578828f9c6784f",
        "name": "cs50",
        "title": "First Blog Post",
        "upvotes": 89,
        "heading": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur sapien in tortor condimentum",
        "content": [
            {
                "id": 4098,
                "textContent": "The content of the Second blog post is just lorem ipsum Morbi malesuada, nunc ut egestas semper, neque nisl consequat tortor, vitae accumsan mi risus sit amet nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum diam lorem, scelerisque sed dignissim et, dictum sed velit. Vivamus pharetra accumsan nisl, vel suscipit lectus iaculis at. Sed efficitur vehicula quam, ultrices varius elit. Sed ultricies mattis tortor, eu sollicitudin nibh euismod vitae. In elit justo, consequat eu odio laoreet, mattis pellentesque est.",
                "codeSnippit": {
                    "content": "<html>\n    <p>Hello, World!</p>\n</html>",
                    "language": "html"
                },
                "heading": "",
                "imageInfo": {}
            },
            {
                "id": 4099,
                "textContent": "The content of the Second blog post is just lorem ipsum Morbi malesuada, nunc ut egestas semper, neque nisl consequat tortor, vitae accumsan mi risus sit amet nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum diam lorem, scelerisque sed dignissim et, dictum sed velit. Vivamus pharetra accumsan nisl, vel suscipit lectus iaculis at. Sed efficitur vehicula quam, ultrices varius elit. Sed ultricies mattis tortor, eu sollicitudin nibh euismod vitae. In elit justo, consequat eu odio laoreet, mattis pellentesque est.",
                "codeSnippit": {
                    "content": "const onUpvoteChange = (upvoteCount) => {\n    setArticleInfo({upvotes: upvoteCount})\n}",
                    "language": "js"
                },
                "heading": "",
                "imageInfo": {}
            },
            {
                "codeSnippit": {
                    "content": "  handleButtonClick = () => {\n    if (this.state.editting) {\n      this.setState({ editting: false });\n    } else {\n      this.setState({ editting: true });\n    }\n  };",
                    "language": "js"
                },
                "heading": "",
                "imageInfo": {},
                "textContent": "The content of the Second blog post is just lorem ipsum Morbi malesuada, nunc ut egestas semper, neque nisl consequat tortor, vitae accumsan mi risus sit amet nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum diam lorem, scelerisque sed dignissim et, dictum sed velit. Vivamus pharetra accumsan nisl, vel suscipit lectus iaculis at. Sed efficitur vehicula quam, ultrices varius elit. Sed ultricies mattis tortor, eu sollicitudin nibh euismod vitae. In elit justo, consequat eu odio laoreet, mattis pellentesque est."
            }
        ]
    },
    {
        "_id": "5e3c6fef76578828f9c67850",
        "id": 539827,
        "name": "gametheory",
        "title": "Second Blog Post",
        "upvotes": 64,
        "heading": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur sapien in tortor condimentum",
        "content": [
            {
                "id": 2,
                "textContent": "The content of the Second blog post is just lorem ipsum Morbi malesuada, nunc ut egestas semper, neque nisl consequat tortor, vitae accumsan mi risus sit amet nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum diam lorem, scelerisque sed dignissim et, dictum sed velit. Vivamus pharetra accumsan nisl, vel suscipit lectus iaculis at. Sed efficitur vehicula quam, ultrices varius elit. Sed ultricies mattis tortor, eu sollicitudin nibh euismod vitae. In elit justo, consequat eu odio laoreet, mattis pellentesque est.",
                "heading": "This is a test.",
                "codeSnippit": {
                    "content": "const onUpvoteChange = (upvoteCount) => {\n    setArticleInfo({upvotes: upvoteCount})\n}",
                    "language": "js"
                },
                "imageInfo": {}
            },
            {
                "id": 5,
                "heading": "Again, a test.",
                "textContent": "Vestibulum diam lorem, scelerisque sed dignissim et, dictum sed velit. Vivamus pharetra accumsan nisl, vel suscipit lectus iaculis at. Sed efficitur vehicula quam, ultrices varius elit. Sed ultricies mattis tortor, eu sollicitudin nibh euismod vitae. In elit justo, consequat eu odio laoreet, mattis pellentesque est. Testing editting.",
                "imageInfo": {
                    "imageUrl": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                    "imageAlt": "Python code"
                },
                "codeSnippit": {
                    "content": "",
                    "language": "js"
                }
            },
            {
                "id": 6,
                "textContent": "The content of the Second blog post is just lorem ipsum Morbi malesuada, nunc ut egestas semper, neque nisl consequat tortor, vitae accumsan mi risus sit amet nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum diam lorem, scelerisque sed dignissim et, dictum sed velit. Vivamus pharetra accumsan nisl, vel suscipit lectus iaculis at. Sed efficitur vehicula quam, ultrices varius elit. Sed ultricies mattis tortor, eu sollicitudin nibh euismod vitae. In elit justo, consequat eu odio laoreet, mattis pellentesque est. I can change the text in an edit section.",
                "codeSnippit": {
                    "content": "const onUpvoteChange = (upvoteCount) => {\n    setArticleInfo({upvotes: upvoteCount})\n    console.log(\"This is simply a test\")\n}",
                    "language": "js"
                },
                "heading": "",
                "imageInfo": {}
            }
        ]
    },
    {
        "_id": "5e551887d4756f3454049d35",
        "name": "prisoners-dilemma",
        "title": "The Prisoner's Dilemma",
        "heading": "The prisoner's dilemma is a standard example of a game analyzed in game theory that shows why two completely rational individuals might not cooperate, even if it appears that it is in their best interests to do so.",
        "upvotes": 25,
        "content": [
            {
                "codeSnippit": {
                    "content": "",
                    "language": ""
                },
                "heading": "",
                "imageInfo": {
                    "imageUrl": "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                    "imageAlt": ""
                },
                "textContent": "This is just example content."
            }
        ]
    }
]