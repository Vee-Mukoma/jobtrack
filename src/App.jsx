
function App() {
  let applications = 0;
  let interviews = 0;
  let offers = 0;

  return (
    <section>
      <header>
        <h1>JobTrack</h1>
        <p>Manage your job applications in one place.</p>
      </header>

      <section className="dashboard">
        <h2>Dashboard</h2>
        <div className="stats">
          <ul>
            <li>Total Applications: {applications}</li>
            <li>Total Interviews: {interviews}</li>
            <li>Total Offers: {offers}</li>
          </ul>
        </div>
      </section>
    </section>
    
    
    
  )
}

export default App
