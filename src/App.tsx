import './App.css'
import Cascading_list from './Components/Cascading_list'
import Homepage from "./Components/Homepage"
import Password_generator from "./Components/Password_generator"
import { BrowserRouter,Route,Routes } from "react-router-dom"

const App = () => {
  return (
    <main>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
          </Routes>
          <Routes>
            <Route path="cascading_drop_down" element={<Cascading_list />}></Route>
          </Routes>
          <Routes>
            <Route path="password_generator" element={<Password_generator />}></Route>
          </Routes>
        </BrowserRouter>
    </main>
  )
}

export default App