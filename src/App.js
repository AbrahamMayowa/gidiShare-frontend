import React from 'react';
import Images from '../src/screen/ImageList'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  const auth = localStorage.getItem('auth')

  let loginAndLogout = (<div>
    <li className="login">Login</li>
    <li className="signup">Signup</li> 
  </div>)





  return (
    <Provider store={store}>
    <React.Fragment>
      <nav className='nav-wrapper'>
        <ul>
          <li>gidiShare</li>
          {auth ? <li className="logout">Logout</li> : loginAndLogout}
        </ul>
      </nav>
    </React.Fragment>
  
  </Provider>
  )
}

export default App;
