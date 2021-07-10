import React,{useState, useContext} from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import firebase from '../config/firebase'
import { useHistory } from "react-router-dom"
import ecomContext from '../context/ecomContext'

const styles = { 
    cards:{
        width: '80%',
        margin:'auto',
        marginTop:'10px'
    }
}
function Login(){
    const context = useContext(ecomContext);
    const history = useHistory();
    const [form,setForm] = useState({email:'',password:''});
    const [spinner,setSpinner] = useState(false);
    const handleSubmit = (e)=>{
        console.log("HandleSubmit",form)
        setSpinner(true);
        firebase.auth.signInWithEmailAndPassword(form.email,form.password)
        .then(data=>{
            console.log("data",data)
            context.loginUser()
            history.push("/")
            setSpinner(false);
        })
        .catch(err=>{
            console.log("error",err)
            
            setSpinner(false);
        })
        e.preventDefault();
    }
    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setForm({
            ...form,
            [name]:value
        })
    }
    return(
        <>
        <Card style={styles.cards}>
            <Card.Body>
                <Card.Title><h2>Iniciar Sesión</h2></Card.Title>
                <Form onSubmit={handleSubmit}>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Escriba su email" name="email" value={form.email} onChange={handleChange}/>
                        
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Escriba su contraseña" name="password" value={form.password} onChange={handleChange}/>
                        
                    </Form.Group>

                    <Button variant="info" type="submit">
                        {
                            spinner &&
                            <Spinner animation="border" variant="info" size="sm" />
                        }
                        Ingresar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        
        
        </>
    )
}
export default Login