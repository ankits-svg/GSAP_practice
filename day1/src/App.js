import React from 'react'
import Example from './Components/Example/Example'
import "./App.css"
import Cards from './Components/Cards/Cards'
// import Cards from './Components/Cards/Cards'


const App = () => {
  return (
    <div className='app'>
      
      <Example/>
      <Cards/>
    </div>
  )
}

export default App