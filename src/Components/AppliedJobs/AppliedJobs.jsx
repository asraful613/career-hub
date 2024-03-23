import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/Utility";

const AppliedJobs = () => {
    const jobs=useLoaderData();
    const[appliedjobs,setAppliedjobs]=useState([])
    const [displayJobs,setDisplayJobs]=useState([])
    const handlejobsFilter = filter =>{
        if(filter==='all'){
            setDisplayJobs(appliedjobs)
        }
        else if(filter==='remote'){
            const remoteJobs=appliedjobs.filter(job =>job.remote_or_onsite==='Remote')
            setDisplayJobs(remoteJobs);
        }
        else if(filter==='onsite'){
            const onsiteJobs=appliedjobs.filter(job =>job.remote_or_onsite==='Onsite')
            setDisplayJobs(onsiteJobs);
        }
    }
    useEffect(()=>{
        const storeJobIds=getStoredJobApplication();
        if(jobs.length>0){
            // const jobApplied=jobs.filter(job=>storeJobIds.includes(job.id))
            const jobApplied=[];
            for(const id of storeJobIds){
                const job=jobs.find(job=>job.id===id);
                if(job){
                    jobApplied.push(job);
                }
            }
            setAppliedjobs(jobApplied);
            setDisplayJobs(jobApplied);
            // console.log(jobs,storeJobIds,jobApplied);
        }
    },[jobs])
    return (
        <div>
            <h3 className="text-2xl">Jobs I applied : {appliedjobs.length}</h3>
            <details className="dropdown">
            <summary className="m-1 btn">open or close</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li onClick={()=> handlejobsFilter('all')}><a>All</a></li>
                <li onClick={()=>handlejobsFilter('remote')}><a>Remote</a></li>
                <li onClick={()=>handlejobsFilter('onsite')}><a>onsite</a></li>
            </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job=><li key={job.id}>{job.job_title} {job.company_name} : {job.remote_or_onsite}</li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;