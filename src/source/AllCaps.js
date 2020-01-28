import React from 'react'

class AllCaps extends React.Component {
    constructor() {
        super()
        this.state = {
            text: ""
        }
        this.handleText = this.handleText.bind(this)
    }
    handleText(e) {
        const text = e.target.value
        this.setState({ text: text.toUpperCase() })
    }
    handleSubmit(e) {
        e.preventDefault()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Text with All Caps</h2>
                    <textarea type='text' value={this.state.text} onChange={this.handleText} />
                </form>
            </div>
        )
    }
}
export default AllCaps