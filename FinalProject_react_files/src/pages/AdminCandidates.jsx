import axios from "axios"
import { useEffect, useState} from "react";
import { useNavigate} from "react-router-dom";
import '../App.css';
import Button from 'react-bootstrap/Button';

function Display(props)
{
    const navigate = useNavigate();
    const editLink = () =>{
        navigate('/admin/editJob',{state:props.data})
    }

    async function deleteJob(id){
        try{
            await axios.put("http://localhost:8080/jobseeker/deleteJob/"+id)
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
            <p className="list-items">Name of candidates: {props.data.personName}</p>
            <p className="list-items">Phone number: {props.data.personPhone}</p>
            <p className="list-items">Year of experience: {props.data.personExp}</p>
            <p className="list-items">Address: {props.data.personAddress}</p>
            <p className="list-items">Email: {props.data.personEmail}</p>
            <p><Button className="list-button" onClick={()=>{editLink()}}>edit</Button></p>
            <p><Button className="list-button" onClick={()=>{deleteJob(props.data.personId)}}>delete</Button></p>
            </div>
        </li>
    
    )
}

function AdminCandidates()
{
    var[allJobs,setjobs] = useState([]);
    
    useEffect(()=>{getall()},[])

    const list = allJobs.map((emp)=>
        <Display key={emp.personId.toString()} data={emp} />

        );
    async function getall()
        {
            try{
                 await axios.get("http://localhost:8080/admin/profile")
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


export default AdminCandidates