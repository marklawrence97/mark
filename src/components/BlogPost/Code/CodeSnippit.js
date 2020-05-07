import React from "react"
import Prism from "prismjs"
import './CodeSnippit.css'


class PrismCode extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }
  componentDidMount() {
    this.highlight()
  }
  componentDidUpdate() {
    this.highlight()
  }
  highlight = () => {
    if (this.ref && this.ref.current) {
      Prism.highlightElement(this.ref.current)
    }
  }
  render() {
    const { code, language } = this.props
    return (
      <div className="CodeSnippit" >
        <pre>
          <code ref={this.ref} className={`language-${language}`}>
            {code.trim()}
          </code>
        </pre>
      </div>
    )
  }
}

export default PrismCode