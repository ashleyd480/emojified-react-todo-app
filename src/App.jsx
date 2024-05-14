import Main from './Components/Main/Main'
import ToDo from './Components/ToDo/ToDo'
import './App.css'

// this is our root component that is then referred to in main (our entry point of application)
// the app has 2 sections- the main blurb section and the todo (imported

const  App = () => {

  return (
    <>
      <Main />
      <ToDo />


    </>
  )
}

export default App
