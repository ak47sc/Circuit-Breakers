import axios from "axios"
import { useEffect, useState } from "react";
import '../App.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


function Display(props)
{ 
    const navigate = useNavigate();
    const editLink = () =>{
        navigate('/user/applyjob',{state:props.data})
    }

    return (
        <li>
            <div style={{backgroundColor:'gray' , borderRadius:"25px"}}>
            <p className="list-items">Job Description: {props.data.jobDescription}</p>
            <p className="list-items">Job Location: {props.data.jobLocation}</p>
            <p className="list-items">From Date: {props.data.fromDate}</p>
            <p className="list-items">To Date: {props.data.toDate}</p>
            <p className="list-items">WagePerDay: {props.data.wagePerDay}</p>
            <p className="list-items">Phone number: {props.data.phoneNumber}</p>
            <p><Button className="list-button" onClick={()=>{editLink()}}>Apply job</Button></p>
            </div>
        </li>
    
    )
}

function Jobseekerdasboard()
{
    var[allJobs,setjobs] = useState([]);
    
    useEffect(()=>{getall()},[])

    const list = allJobs.map((emp)=>
        <Display key={emp.jobId.toString()} data={emp} />

        );
    async function getall()
        {
            try{
                 await axios.get("http://localhost:8080/admin/getAlljobs")
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


export default Jobseekerdasboard