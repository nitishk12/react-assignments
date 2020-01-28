import React from 'react'
class RandomDisappear extends React.Component {
    constructor() {
        super()
        this.state = {
            random: "hi",
            boolean: true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        const random = Math.round(Math.random() * 10)
        let boolean = false
        this.setState({ random, boolean })
        boolean = true
        setTimeout(() => {
            this.setState({ random, boolean })
        }, 2000);
    }
    render() {
        return (
            <div>
                <h1>Random Number</h1>
                {
                    this.state.boolean ? <button onClick={this.handleClick}>Generate</button> : <h2>{this.state.random}</h2>
                }
            </div>
        )
    }
}
export default RandomDisappear