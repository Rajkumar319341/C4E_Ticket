
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Customer } from './pages/Customer'
import { Dashboard } from './pages/Dashboard'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Organization } from './pages/Organization'
import { Reporting } from './pages/Reporting'
import { Settings } from './pages/Settings'
import { TicketRaiseForm } from './Queries/TicketRaiseForm'

function App() {

  return (
 <Router>
  <Sidebar>
  <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/customer" element={<Customer/>}/>
    <Route path="/organization" element={<Organization/>}/>
    <Route path="/reporting" element={<Reporting/>}/>
    <Route path="/settings" element={<Settings/>}/>


    <Route path='/ticket-raise-form' element={<TicketRaiseForm/>}/>

  </Routes>
  </Sidebar>
  
 </Router>
  )
}

export default App
