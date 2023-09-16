import './App.css'
import {Routes, Route} from "react-router-dom"
import Homepage from '../components/Homepage'
import SearchResults from '../components/SearchResults'
// import Map from '../components/Map'
// import Restaurant from '../components/Restaurant'

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
