import React from 'react'
function UserListDropdown(props) {
    const users = [
        { id: 1, name: "amit", email: "ami@gmail.com" },
        { id: 2, name: "shashi", email: "sha@gmail.com" },
        { id: 3, name: "rajesh", email: "raj@gmail.com" },
        { id: 4, name: "swathi", email: "swa@gmail.com" }
    ];
    function handleChange(e) {
        alert(`${e.target.value}`)
    }
    return (
        <div>
            <h2>Listing users - {users.length}</h2>
            <select onChange={handleChange}>
                <option value="">select</option>
                {users.map(function (user) {
                    return (
                        <option key={user.id} value={user.name}>
                            {user.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
export default UserListDropdown