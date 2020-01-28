import React from 'react'
// npm install react-router-dom
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Assignments from './Assignments'
import ShowListTable from './source/ShowListTable'
import PayYourBill from './source/PayYourBill'
import CatchEvens from './source/CatchEvens'
import AllCaps from './source/AllCaps'
import ShuffleArray from './source/ShuffleArray'
import ChangeBackGround from './source/ChangeBackGround'
import ColorChangeCondition from './source/ColorChangeCondition'
import NoVowel from './source/NoVowel'
import RemoveUserTable from './source/RemoveUserTable'
import EmailRemove from './source/EmailRemove'
import CheckBoxName from './source/CheckBoxName'
import RadioUser from './source/RadioUser'
import DropdownColor from './source/DropdownColor'
import StoryBook from './source/StoryBook'
import UserListDropdown from './source/UserListDropdown'
import RandomDisappear from './source/RandomDisappear'
import CountDownTimer from './source/CountDownTimer'
import UsersLists from './components/UserList'
import UserShow from './components/UserShow'


function App(props) {
    return (
        <BrowserRouter>
            <div>
                <h1>Hello React</h1>
                <Link to="/" style={{ paddingLeft: 10, backgroundColor: 'orange', color: 'white' }}>Home</Link>
                <Link to="/about" style={{ paddingLeft: 10, backgroundColor: 'magenta', color: 'white' }}>About</Link>
                <Link to="/assignments" style={{ paddingLeft: 10, backgroundColor: 'brown', color: 'white' }}>Assignments</Link>
                <Link to="/contact" style={{ paddingLeft: 10, backgroundColor: 'indigo', color: 'white' }}>Contact</Link>
                <Link to="/users" style={{ paddingLeft: 10, backgroundColor: 'black', color: 'white' }}>Users Lists</Link>


                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/assignments" component={Assignments} exact={true} />
                <Route path="/assignments/check-box-name" component={CheckBoxName} />
                <Route path="/assignments/radio-user" component={RadioUser} />
                <Route path="/assignments/user-list-dropdown" component={UserListDropdown} />
                <Route path="/assignments/dropdown-color" component={DropdownColor} />
                <Route path="/assignments/color-change-condition" component={ColorChangeCondition} />
                <Route path="/assignments/dark-mode" component={ChangeBackGround} />
                <Route path="/assignments/show-list-table" component={ShowListTable} />
                <Route path="/assignments/count-down-timer" component={CountDownTimer} />
                <Route path="/assignments/email-remove-user" component={EmailRemove} />
                <Route path="/assignments/remove-user-table" component={RemoveUserTable} />
                <Route path="/assignments/no-vowel" component={NoVowel} />
                <Route path="/assignments/story-book" component={StoryBook} />
                <Route path="/assignments/pay-your-bill" component={PayYourBill} />
                <Route path="/assignments/all-caps" component={AllCaps} />
                <Route path="/assignments/shuffle-array" component={ShuffleArray} />
                <Route path="/assignments/random-disappear" component={RandomDisappear} />
                <Route path="/assignments/catch-even" component={CatchEvens} />
                <Route path="/users" component={UsersLists} exact={true} />
                <Route path="/users/:id" component={UserShow} />


            </div>
        </BrowserRouter>

    )
}
export default App