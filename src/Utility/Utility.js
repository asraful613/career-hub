import { json } from "react-router-dom";

const getStoredJobApplication= ()=>{
    const storedJobApplication=localStorage.getItem('job-applications');
    if(storedJobApplication){
        return json.parse(storedJobApplication)
    }
    return [];
}
const saveJobApplication = id =>{
    const storedJobApplication=getStoredJobApplication();
    const exists=storedJobApplication.find(jobId => jobId===id)
    if(!exists){
        storedJobApplication.push(id);
        localStorage.setItem('job-applications',JSON.stringify(storedJobApplication));
    }
}

export { getStoredJobApplication,saveJobApplication}