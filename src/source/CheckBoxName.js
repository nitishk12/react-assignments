import React from 'react'

function CheckBoxName(props) {
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
                        <input
                            key={user.id}
                            onClick={() => {
                                alert(
                                    `you selected ${user.name}`
                                );
                            }}
                            type="checkbox"
                            value={user.id}
                        />
                        {user.name}
                    </ul>
                );
            })}
        </div>
    );
}
export default CheckBoxName