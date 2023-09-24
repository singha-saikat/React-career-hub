import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength,setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="">
        <h1 className="text-3xl text-center font-bold mt-4 ">Featured Jobs</h1>
        <p className="text-center mb-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        {
            jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
      <div className={dataLength === jobs.length && 'hidden'}>
        
        <button onClick={() => setDataLength(jobs.length)} className="btn btn-secondary">Show All</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
