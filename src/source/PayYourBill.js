import React from 'react'

class PayYourBill extends React.Component {
    constructor() {
        super()
        this.state = {
            operator: ""
        }
        this.handleOperator = this.handleOperator.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
    }
    handleOperator(e) {
        const operator = e.target.value
        this.setState({ operator })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Pay bill for {this.state.operator}</h2>
                    <label>
                        Vodafone
                                    <input
                            value="vodafone"
                            checked={this.state.operator === 'vodafone'}
                            onChange={this.handleOperator}
                            type="radio" />
                    </label>
                    <label>
                        Airtel
                                    <input
                            value="airtel"
                            checked={this.state.operator === 'airtel'}
                            onChange={this.handleOperator}
                            type="radio" />
                    </label>
                    <label>
                        Jio
                                    <input
                            value="jio"
                            checked={this.state.operator === 'jio'}
                            onChange={this.handleOperator}
                            type="radio" />
                    </label><br />
                    <input type='text' placeholder={`enter ${this.state.operator} number `} />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default PayYourBill