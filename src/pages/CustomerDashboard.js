import axios from "axios"
import { useEffect, useState } from "react";

function Display(props)
{
    return (
        <li>
            <div>
            <p>ToDate:{props.data.toDate}</p>
            <p>WagePerDay:{props.data.wagePerDay}</p>
            </div>
        </li>
    
    )
}

function CustomerDashboard()
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
        <ul>
            {list}
        </ul>
        
    )
}


export default CustomerDashboard