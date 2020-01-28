import React from 'react'

class CatchEvens extends React.Component {
    constructor() {
        super()
        this.state = {
            even: []
        }
    }

    componentDidMount() {
        setInterval(() => {
            const number = Math.round(Math.random() * 10)
            this.setState({ number })
            if (number % 2 === 0) {
                this.setState((prevState) => ({
                    even: [...prevState.even, number]
                }))
            }
        }, 1000);
    }
    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <ul>
                    Even - {this.state.even.length}
                    {this.state.even.map((ele, i) => {
                        return <li key={i}>{ele}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default CatchEvens