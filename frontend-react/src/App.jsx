import AllTasks from './components/AllTasks'
import CompletedTasks from './components/CompletedTasks'
import Header from './components/Header'
import {Routes,Route,BrowserRouter, Outlet} from "react-router-dom"
import PendingTasks from './components/PendingTasks'
import Login from './components/Login'
import Profile from './components/Profile'
import ChangePassword from './components/ChangePassword'
import ChangeEmail from './components/ChangeEmail'
import Signup from './components/Signup'

function App() {
 

  return (
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />}/>
      
      <Route element={
        <>
        <Header />
        <Outlet />
        </>
      }>
        <Route path='/profile' element={  
          <>
          <Profile />
          <Outlet />
          </>
          }>
            <Route path='change-password' element={<ChangePassword />} />
            <Route path='change-email' element={<ChangeEmail />} />
          </Route>
        <Route path='/all-tasks' element={<AllTasks />}/>
        <Route path='/completed-tasks' element={<CompletedTasks />}/>
        <Route path='/pending-tasks' element={<PendingTasks />}/>
      </Route>
      </Routes>

      </BrowserRouter>
  )
}

export default App
