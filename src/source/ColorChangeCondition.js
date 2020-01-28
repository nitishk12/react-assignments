import React from 'react'

function Tasks(props) {
    return (
        <div>
            <p>
                {props.completed ? <span style={{ color: "green" }}>{props.title}</span> : <span style={{ color: "red" }}>{props.title}</span>}
            </p>
        </div>
    );
}

function ColorChangeCondition(props) {
    const tasks = [
        { id: 1, title: "deploy app", completed: true },
        { id: 2, title: "make app", completed: false },
        { id: 3, title: "database backup", completed: true },
        { id: 3, title: "external backup", completed: false }
    ]

    return (
        <div>
            <h2>Listing Tasks- {tasks.length}</h2>
            {tasks.map(function (task) {
                return (
                    <Tasks
                        key={task.id}
                        title={task.title}
                        completed={task.completed}
                    />
                );
            })}
        </div>
    )
}
export default ColorChangeCondition