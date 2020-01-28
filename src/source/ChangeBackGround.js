import React from 'react'

class ChangeBackGround extends React.Component {
    constructor() {
        super()
        this.state = {
            isWhite: true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({ isWhite: !this.state.isWhite })
        document.body.style.background = this.state.isWhite ? 'black' : 'white'
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.isWhite ? 'Black' : 'White'} </button>
            </div>
        )
    }
}
export default ChangeBackGround