import React, { useEffect, useState } from 'react'
import NavBar from './components/UserAdmin/NavBar'


const App = (props) => {
  const [ userLoggedIn, setUserLoggedIn ] = useState(false)

  const handleAuth = () => {
    setUserLoggedIn(!userLoggedIn)
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      handleAuth()
    }
  }, [])

  return (
    <div>
      <h1>Simple React</h1>
          <h4> Welcome to Simple React </h4>
      <NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth} />
    </div>
  )
}

export default App;
