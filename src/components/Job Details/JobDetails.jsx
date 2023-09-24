import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find ( job => job.id == id)
    console.log(job);
    return (
        <div>
            <h1>Job Details</h1>
        </div>
    );
};

export default JobDetails;