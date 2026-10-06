import Header from './components/Header.jsx'
import Dashboard from './components/Dashboard.jsx'
import JobForm from './components/JobForm.jsx'
import ApplicationList from './components/ApplicationList.jsx'
import {useState} from 'react'

function App() {
  const [jobs, setJobs] = useState([
      { id: 1, company: "Google", position: "Software Engineer", status: "Interview Scheduled" },
      { id: 2, company: "Facebook", position: "Data Scientist", status: "Applied" },
      { id: 3, company: "Amazon", position: "Product Manager", status: "Offer Received" }
  ]);

  return (
    <div className="App">
      <Header />
      <Dashboard />
      <JobForm />
      <ApplicationList jobs={jobs} />
    </div>
  )
}

export default App
