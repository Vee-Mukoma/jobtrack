function Dashboard() {
    let applications = 0;
    let interviews = 0;
    let offers = 0;

    return (
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
    )
}

export default Dashboard