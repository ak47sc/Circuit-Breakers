import axios from "axios"
import { useEffect, useState} from "react";
import { useNavigate} from "react-router-dom";
import '../App.css';
import Button from 'react-bootstrap/Button';

function Display(props)
{
    const navigate = useNavigate();
    const editLink = () =>{
        navigate('/admin/editJob/',{state:props.data})
    }

    async function deleteJob(id){
        try{
            await axios.put("http://localhost:8080/admin/deleteJob/"+id)
           .then((Response)=>{
            alert(Response.data);
           });

           }
       catch(err){
           alert("Cannot connect to server")
           }
           
           window.location.reload();
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
            <p><Button onClick={()=>{editLink()}}>edit</Button></p>
            <p><Button onClick={()=>{deleteJob(props.data.jobId)}}>delete</Button></p>
            </div>
        </li>
    
    )
}

function Admindashboard()
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
                alert("Cannot connect to server")
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


export default Admindashboard