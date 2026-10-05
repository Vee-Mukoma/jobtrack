function ApplicationCard({ position, company, status }) {
    return (
        <div className="application-card">
            <h3>{position}</h3>
            <p>{company}</p>
            <p>{status}</p>
        </div>
    );
}

export default ApplicationCard;