import React from 'react'

class ShowListTable extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [
                { id: 1, name: 'suhana', email: 'suh@gmail.com' },
                { id: 2, name: 'preeti', email: 'pre@gmail.com' },
                { id: 3, name: 'julia', email: 'julia@gmail.com' },
                { id: 4, name: 'simpy', email: 'simpy@gmail.com' }
            ],
            isChecked: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        const isChecked = e.target.value
        this.setState({ isChecked })
    }

    render() {

        return (
            <div>
                <h1>Listing Users -{this.state.users.length}</h1>
                <label>
                    <input
                        type="radio"
                        value='list'
                        checked={this.state.isChecked === 'list'}
                        onChange={this.handleChange} />List
                    <input
                        type="radio"
                        value='table'
                        checked={this.state.isChecked === 'table'}
                        onChange={this.handleChange} />Table
                            </label>
                {
                    this.state.isChecked === 'list' ? <div> <ul>
                        {this.state.users.map((user) => {
                            return <li key={user.id}>{user.id} {user.name}  {user.email}</li>
                        })}
                    </ul> </div> : <div><table border='1'>
                        <thead>
                            <tr>
                                <th> id </th>
                                <th> name </th>
                                <th> email </th>
                            </tr>
                        </thead>
                        <tbody>{this.state.users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })}</tbody>
                    </table></div>
                }
            </div>
        )
    }
}

export default ShowListTable