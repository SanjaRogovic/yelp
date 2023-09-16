import './App.css'
import {Routes, Route} from "react-router-dom"
import Homepage from '../components/Homepage'
import SearchResults from '../components/SearchResults'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/searchResults/:index" element={<SearchResults  />}/>
    </Routes>
      
    </>
  )
}


export default App
