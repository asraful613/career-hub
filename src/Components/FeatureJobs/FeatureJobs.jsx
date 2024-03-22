import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {
    const [jobs,setJobs]=useState([]);
    // this is not the best way show all data
    const[datalength,setDatalength]=useState(4)
    useEffect(()=>{
        fetch("jobs.json")
     .then(res=>res.json())
     .then(data =>setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl font-bold">Feature Jobs :   {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0,datalength).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={datalength===jobs.length ? 'hidden':''}>
                <button onClick={()=>setDatalength(jobs.length)} className="btn btn-primary">
                    Show all jobs
                </button>
            </div>
        </div>
    );
};

export default FeatureJobs;