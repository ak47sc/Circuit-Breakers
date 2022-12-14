import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Register()
{
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [mobileNumber,setmobileNumber] = useState("");
    const [userRole,setuserrole] = useState("");
    const [username,setusername] = useState("");
    let navigate = useNavigate();

    async function handleSubmit(event)
    {
        event.preventDefault();
        if(email!="" && password!="" && username!="" && mobileNumber!="" && userRole!="")
        {
            try{
                await axios.post("http://localhost:8080/user/signup",
                {
                    email:email ,
                    password: password,
                    username: username,
                    mobileNumber: mobileNumber,
                    userRole:userRole 
                })
                .then((Response)=>{
                    if(Response.data == "User Created successfully")
                    {
                        navigate('/user/login')
                    }
                    else{
                        alert(Response.data);
                    }
                });
                setemail("");
                setmobileNumber("");
                setpassword("");
                setuserrole("");
                setusername("");
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
            <form onSubmit={handleSubmit}>
                <h1 className="header">
                    REGISTER
                </h1>

                <Form.Group as={Row} className="mb-3" controlId="formuserrole">
                <Form.Label column sm={3}>
                    </Form.Label>
                <Col sm={6}>
                <Form.Select onChange={(event)=>
                {
                    setuserrole(event.target.value);
                }
                }>
                    <option>Pick User Role</option>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                    <option value="Jobseeker">Jobseeker</option>
                </Form.Select>
                </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formEmail">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="email" placeholder="Enter Email" onChange={(event)=>
                        {
                            setemail(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formusername">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="text" placeholder="Enter Username" onChange={(event)=>
                        {
                            setusername(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3" controlId="formmobilenumber">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="text" placeholder="Enter Mobilenumber" onChange={(event)=>
                        {
                            setmobileNumber(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formpassword">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="password" placeholder="Enter Password" onChange={(event)=>
                        {
                            setpassword(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>
                
                <Button className="list-button" variant="primary" type="submit">
                    Submit
                </Button>
                <span> Already a User? <a href="/user/login">LOGIN</a></span>
            </form>

        </div>
    )
}

export default Register;