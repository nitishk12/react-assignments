import React from 'react'
class RemoveUserTable extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [
                { id: 1, name: 'ravi', email: 'ravi@gmail.com' },
                { id: 2, name: 'avinash', email: 'avinash@gmail.com' },
                { id: 3, name: 'raichand', email: 'raichand@gmail.com' },
                { id: 4, name: 'vivek', email: 'vivek@gmail.com' }
            ]
        }
        this.handleRemove = this.handleRemove.bind(this)
    }
    handleRemove(id) {
        const confirmRemove = window.confirm(`are you sure you want to remove`)
        if (confirmRemove) {
            this.setState((prevState) => {
                return {
                    users: prevState.users.filter(user => user.id !== id)
                }
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Listing Users - {this.state.users.length}</h2>
                <table border='1' onChange={this.handleRemove}>
                    <thead>
                        <tr>
                            <th> id </th>
                            <th> name </th>
                            <th> email </th>
                            <th> action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td><button onClick={() => {
                                            this.handleRemove(user.id)
                                        }}>remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default RemoveUserTable