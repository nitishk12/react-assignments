import React from 'react'

class CountDownTimer extends React.Component {
    constructor() {
        super()
        this.state = {
            seconds: '10'
        }
    }
    componentDidMount() {
        const id = setInterval(() => {
            this.setState((prevState) => ({
                seconds: prevState.seconds - 1
            }))
            if (this.state.seconds === 0) {
                clearInterval(id)
            }
        }, 1000);
    }
    render() {
        return (
            <div>
                <h2>CountDown Timer</h2>
                <h3>Please Wait...{this.state.seconds}</h3>
            </div>
        )
    }
}
export default CountDownTimer