import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useAuth } from "../utils/auth";



function Login()
{
    const [password,setpassword] = useState("");
    const [email,setemail] = useState("");
    const auth = useAuth()
    let navigate = useNavigate();

    async function handleSubmit(event)
    {
        event.preventDefault();
        if(password!=="" && email!=="")
        {
            try{
                await axios.post("http://localhost:8080/user/login",
                {
                    email:email ,
                    password: password
                })
                .then((Response)=>{
                    if(Response.data !== "Password incorrect" && Response.data !== "Email not Exists")
                    {
                        const result = Response.data
                        auth.login(result.Role)
                        result.Role==="user"? navigate("/customer/dashboard"):
                        result.Role==="Jobseeker"? navigate("/user/dashboard"):
                        result.Role==="Admin"? navigate("/admin/profile"):
                        console.log(result)
                    }
                    else{
                        alert(Response.data);
                    }
                });
                setemail("");
                setpassword("");
            }
            catch(err)
            {
                alert(err);
            }
        }
        else{
            alert("Credentials should not be empty")
        }
        {/*window.location.reload()*/}
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="header">
                    LOGIN
                </h1>
                <Form.Group as={Row} className="mb-3" controlId="formEmail">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="email" placeholder="Email" onChange={(event)=>
                        {
                            setemail(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>

                <br></br>

                <Form.Group as={Row} className="mb-3" controlId="formpassword">
                    <Form.Label column sm={3}>
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="password" placeholder="password" onChange={(event)=>
                        {
                            setpassword(event.target.value);
                        }}/>
                    </Col>
                </Form.Group>

                <br></br>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset:  1}}>
                        <Button className="list-button" type="submit">LOGIN</Button>
                        <span> NEW USER?<a href="/user/signup">Signup</a></span>
                    </Col>
                </Form.Group>

            </form>

        </div>
    )
}

export default Login