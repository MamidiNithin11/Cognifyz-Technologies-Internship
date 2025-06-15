import {Routes,Route} from 'react-router'

import Home from './pages/Home'
import Note from './pages/Note'
import CreateDetail from './pages/CreateDetail'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<CreateDetail/>}/>
        <Route path="/note/:id" element={<Note/>}/>
      </Routes>
    </div>
  )
}

export default App