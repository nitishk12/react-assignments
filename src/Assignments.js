import React from 'react'
import { Link } from 'react-router-dom'

function Assignments(props) {
    return (
        <div>
            <h1>Listing Assignments</h1>
            <li><Link to="assignments/check-box-name">check box name</Link></li>
            <li><Link to="assignments/radio-user">radio user</Link></li>
            <li><Link to="assignments/user-list-dropdown">user list dropdown</Link></li>
            <li><Link to="assignments/color-change-condition">color change condition</Link></li>
            <li><Link to="assignments/dropdown-color">drop down color</Link></li>
            <li><Link to="assignments/dark-mode">dark mode</Link></li>
            <li><Link to="assignments/show-list-table">show list table</Link></li>
            <li><Link to="assignments/email-remove-user">email remove user</Link></li>
            <li><Link to="assignments/remove-user-table">remove user table</Link></li>
            <li><Link to="assignments/count-down-timer">count down timer</Link></li>
            <li><Link to="assignments/no-vowel">no vowel</Link></li>
            <li><Link to="assignments/story-book">story book</Link></li>
            <li><Link to="assignments/pay-your-bill">pay your bill</Link></li>
            <li><Link to="assignments/all-caps">all caps</Link></li>
            <li><Link to="assignments/shuffle-array">shuffle array</Link></li>
            <li><Link to="assignments/random-disappear">random disappear</Link></li>
            <li><Link to="assignments/catch-even">catch evens</Link></li>
        </div>
    )
}
export default Assignments