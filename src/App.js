import React, { useState, useEffect } from 'react'
import {Provider} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './redux/store'
import Loading from './components/Loading'
import ScreenWrapper from './screen/ScreenWrapper'


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <ScreenWrapper />
      </PersistGate >
  </Provider>
  )
}

export default App;
