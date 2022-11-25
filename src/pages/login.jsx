import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function Login()
{
    const [password,setpassword] = useState("");
    const [email,setemail] = useState("");
    let navigate = useNavigate();
    const hstyle = {color:'white' , backgroundColor:'black'}

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
                        navigate(Response.data)
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
                <h1 style={hstyle}>
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
                        <Button type="submit">LOGIN</Button>
                    </Col>
                </Form.Group>

            </form>

            <p>NEW USER? <span><a href="/user/signup">Signup</a></span></p>

        </div>
    )
}

export default Login