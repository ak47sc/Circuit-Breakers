import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Customeraddjob()
{
    const [JobDescription,setJobDescription] = useState("");
    const [JobLocation,setJobLocation] = useState("");
    const [fromDate,setfromDate] = useState("");
    const [toDate,settoDate] = useState("");
    const [wagePerDay,setwagePerDay] = useState("");

    let history = useHistory();

    const hstyle = {color:'white' , backgroundColor:'black'}

    async function handleSubmit(event)
    {
        event.preventDefault();
        if(JobDescription!="" && JobLocation!="" && fromDate!="" && toDate!="" && wagePerDay!="")
        {
            try{
                await axios.post("http://localhost:8080/customer/addjob",
                {
                    JobDescription:JobDescription,
                    JobLocation:JobLocation,
                    fromDate:fromDate,
                    toDate:toDate,
                    wagePerDay:wagePerDay

                })
                .then((Response)=>{
                    alert(Response.data);
                });
                setJobDescription("");
                setJobLocation("");
                settoDate("");
                setfromDate("");
                setwagePerDay("");
            }
            catch(err)
            {
                alert("Error sending requst.Try again later");
            }
        }
        else{
            alert("Credentials should not be empty")
        }
        window.location.reload()
    }
    return(
        <div>
            <br></br>
            <Form onSubmit={handleSubmit}>
                
                <Form.Group as={Row} className="mb-3" controlId="formJobDescription">
                <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                    <Form.Control type="text" placeholder="Enter Job Description" onChange={(event)=>
                        {
                            setJobDescription(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formjoblocation">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="text" placeholder="Enter Job location" onChange={(event)=>
                        {
                            setJobLocation(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formfromDate">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="date" placeholder="Enter the From Date" onChange={(event)=>
                        {
                            setfromDate(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3" controlId="formtoDate">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="date" placeholder="Enter the To Date" onChange={(event)=>
                        {
                            settoDate(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formwageperday">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="text" placeholder="Enter the wage per day" onChange={(event)=>
                        {
                            setwagePerDay(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Add Job
                </Button>

            </Form>

        </div>
    )
}

export default Customeraddjob