import { useEffect,useState } from "react";
import { useLocation , useNavigate} from "react-router-dom"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import Button from 'react-bootstrap/Button';

function Admineditjobs()
{
    const location = useLocation();
    const navigate = useNavigate();
    const [JobDescription,setJobDescription] = useState("");
    const [JobLocation,setJobLocation] = useState("");
    const [fromDate,setfromDate] = useState("");
    const [toDate,settoDate] = useState("");
    const [wagePerDay,setwagePerDay] = useState("");
    const [phoneNumber,setphnum] = useState("");
    const [id,setid] = useState("");

    useEffect(()=>{
        setJobDescription(location.state.jobDescription)
        setJobLocation(location.state.jobLocation)
        setfromDate(location.state.fromDate)
        setphnum(location.state.phoneNumber)
        settoDate(location.state.toDate)
        setwagePerDay(location.state.wagePerDay)
        setid(location.state.jobId)
    }
    ,[])

    async function handleSubmit(event)
    {
        event.preventDefault();
        if(JobDescription!="" && JobLocation!="" && fromDate!="" && toDate!="" && wagePerDay!="")
        {
            try{
                await axios.put("http://localhost:8080/admin/updateJob/"+id,
                {
                    jobDescription:JobDescription,
                    jobLocation:JobLocation,
                    fromDate:fromDate,
                    toDate:toDate,
                    wagePerDay:wagePerDay,
                    phoneNumber:phoneNumber

                })
                .then((Response)=>{
                    alert(Response.data);
                    navigate("/admin/profile")
                });
                setJobDescription("");
                setJobLocation("");
                settoDate("");
                setfromDate("");
                setwagePerDay("");
                setphnum("");
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
                    <Form.Control type="text" placeholder="Enter Job Description" value={JobDescription} onChange={(event)=>
                        {
                            setJobDescription(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formjoblocation">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="text" placeholder="Enter Job location" value={JobLocation} onChange={(event)=>
                        {
                            setJobLocation(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formfromDate">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="date" placeholder="Enter the From Date" value={fromDate} onChange={(event)=>
                        {
                            setfromDate(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3" controlId="formtoDate">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="date" placeholder="Enter the To Date" value={toDate} onChange={(event)=>
                        {
                            settoDate(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formwageperday">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="number" placeholder="Enter the wage per day" value={wagePerDay} onChange={(event)=>
                        {
                            setwagePerDay(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formphoneNumber">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="number" placeholder="Enter Phone Number" value={phoneNumber} onChange={(event)=>
                        {
                            setphnum(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>
                
                <Button className="list-button" variant="primary" type="submit">
                    Update Job
                </Button>

            </Form>

        </div>
    )
}

export default Admineditjobs;