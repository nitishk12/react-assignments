import React from 'react'

class EmailRemove extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [
                { id: 1, name: 'user1', email: 'user1@mail.com' },
                { id: 2, name: 'user2', email: 'user2@mail.com' },
                { id: 3, name: 'user3', email: 'user3@mail.com' },
                { id: 4, name: 'user4', email: 'user4@mail.com' }
            ],
            isRemoved: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const conf = window.confirm('Are you sure you wanna delete?')
        if (conf) {
            this.setState((prevState) => {
                return {
                    users: prevState.users.filter(user => user.email !== prevState.isRemoved)
                }
            })
        }

    }

    handleEmail(e) {
        const isRemoved = e.target.value
        this.setState({ isRemoved })
    }

    render() {
        return (
            <div>
                <h1>Email Auth Remove</h1>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(user => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <form onSubmit={this.handleSubmit}>
                    <h1>Form</h1>
                    <input
                        type="text"
                        onChange={this.handleEmail} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
export default EmailRemove