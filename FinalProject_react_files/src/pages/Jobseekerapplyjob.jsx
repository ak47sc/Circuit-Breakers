import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useLocation } from "react-router-dom";

function Jobseekerapplyjob(props)
{
    const location = useLocation()
    const [personName, setpersonName] = useState("")
    const [personAddress, setpersonAddress] = useState("")
    const [personExp, setpersonExp] = useState("")
    const [personPhone, setpersonPhone] = useState("")
    const [personEmail, setpersonEmail] = useState("")
    const [jobdata, setjobdata] = useState(location.state)
    async function handleSubmit(event)
    {
        event.preventDefault();
        if(personAddress!==""&& personEmail!=="" && personExp!=="" && personName!=="" && personPhone!=="")
        {
            try{
                await axios.post("http://localhost:8080/jobseeker/applyjob",
                {
                    personId:5,
                    personAddress:personAddress,
                    personEmail:personEmail,
                    personExp:personExp,
                    personName:personName,
                    personPhone:personPhone,
                    jobmodel:[jobdata]
                })
                .then((Response)=>{
                    alert(Response.data);
                });
                setpersonAddress("")
                setpersonEmail("")
                setpersonExp("")
                setpersonName("")
                setpersonPhone("")
                setjobdata("")
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
                    <Form.Control type="text" placeholder="Enter your name" onChange={(event)=>
                        {
                            setpersonName(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formjoblocation">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="number" placeholder="Enter your phone number" onChange={(event)=>
                        {
                            setpersonPhone(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formfromDate">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="number" placeholder="Enter year of experience" onChange={(event)=>
                        {
                            setpersonExp(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3" controlId="formtoDate">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="textarea" placeholder="Enter your address" onChange={(event)=>
                        {
                            setpersonAddress(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formwageperday">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="email" placeholder="Enter email" onChange={(event)=>
                        {
                            setpersonEmail(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formphoneNumber">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="number" placeholder="Enter Phone Number" onChange={(event)=>
                        {
                            setpersonPhone(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>
                
                <Button className="list-button" variant="primary" type="submit">
                    Apply Job
                </Button>

            </Form>

        </div>
    )
}

export default Jobseekerapplyjob