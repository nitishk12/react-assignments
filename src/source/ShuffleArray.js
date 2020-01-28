import React from 'react'

class ShuffleArray extends React.Component {
    constructor() {
        super()
        this.state = {
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        this.setState((prevState) => {
            return {
                numbers: prevState.numbers.sort(() => Math.random() - 0.5)
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Shuffler</h1>
                <ul>
                    {this.state.numbers.map((ele, i) => {
                        return <li key={i}>{ele}</li>
                    })}
                </ul>
                <button onClick={this.handleSubmit}>shuffle</button>
            </div>
        )
    }
}

export default ShuffleArray