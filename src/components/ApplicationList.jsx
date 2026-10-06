import ApplicationCard from './ApplicationCard.jsx'

function ApplicationList() {

    return (
        <section>
            <h2>My Applications</h2>
            {jobs.map((job) => (
                <ApplicationCard
                    key={job.id}
                    company={job.company}
                    position={job.position}
                    status={job.status}
                />
            ))}
        </section>
    );
}

export default ApplicationList