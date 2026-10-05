import ApplicationCard from './ApplicationCard.jsx'
import {useState} from 'react'

function ApplicationList() {
    const [jobs, setJobs] = useState([
        { id: 1, company: "Google", position: "Software Engineer", status: "Interview Scheduled" },
        { id: 2, company: "Facebook", position: "Data Scientist", status: "Applied" },
        { id: 3, company: "Amazon", position: "Product Manager", status: "Offer Received" }
    ]);

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