import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/AppHeader'
import SearchPanel from './components/SearchPanel'
import TodoList from './components/TodoList'

const App = () => {

    // const isLoggedIn = true
    // const loginBox = <span>Log in please</span>
    // const welcomeBox = <span>Welcome back</span>
    
    return (
        <div>
            {/* {!isLoggedIn? loginBox : welcomeBox} */}
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div> 
    )
}




ReactDOM.render(<App/>, document.getElementById('root'))