import axios from "axios"
import { useEffect, useState } from "react";
import '../App.css';

function Display(props)
{
    return (
        <li>
            <div style={{backgroundColor:'gray' , borderRadius:"25px"}}>
            <p className="list-items">Job Description: {props.data.jobDescription}</p>
            <p className="list-items">Job Location: {props.data.jobLocation}</p>
            <p className="list-items">From Date: {props.data.fromDate}</p>
            <p className="list-items">To Date: {props.data.toDate}</p>
            <p className="list-items">WagePerDay: {props.data.wagePerDay}</p>
            <p className="list-items">Phone number: {props.data.phoneNumber}</p>
            </div>
        </li>
    
    )
}

function Jobseekerappliedjob()
{
    var[allJobs,setjobs] = useState()

    var list

    useEffect(() => {
      console.log(allJobs)
    }, [allJobs])
    
    useEffect(()=>{getall()},[])

    if(allJobs !== undefined){
        list = allJobs.jobmodel.map((job)=>
        <Display key={job.jobId.toString()} data={job} />)
    }
    else list=<p className="list-items">NO JOBS APPLIED</p>
    
    async function getall()
        {
            try{
                 await axios.put("http://localhost:8080/jobseeker/getbyid/5")
                .then((Response)=>{
                 setjobs(Response.data)
                });

                }
            catch(err){
                alert("Cannot connect")
                }
        }
    return(
        <>
        <br></br>
        <ul style={{listStyleType:"none"}}>
           {list}
            <br></br>
        </ul>
        </>
        
        
    )
}


export default Jobseekerappliedjob