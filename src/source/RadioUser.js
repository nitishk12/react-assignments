import React from 'react'

function RadioUser(props) {
    const users = [
        { id: 1, name: "amit", email: "ami@gmail.com" },
        { id: 2, name: "shashi", email: "sha@gmail.com" },
        { id: 3, name: "rajesh", email: "raj@gmail.com" },
        { id: 4, name: "swathi", email: "swa@gmail.com" }
    ]
    return (
        <div>
            {users.map(user => {
                return (
                    <ul>
                        <input key={user.id}
                            onClick={() => {
                                alert(
                                    `you selected ${user.name} and his email id is ${user.email}`
                                );
                            }}
                            type="radio"
                            name="ok"
                        />
                        {user.name}
                    </ul>
                );
            })}
        </div>
    );
}
export default RadioUser