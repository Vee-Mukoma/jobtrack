import Header from './components/Header.jsx'
import Dashboard from './components/Dashboard.jsx'
import JobForm from './components/JobForm.jsx'
import ApplicationList from './components/ApplicationList.jsx'
import ApplicationCard from './components/ApplicationCard.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <JobForm />
      <ApplicationList />
      <ApplicationCard />
    </div>
  )
}

export default App
