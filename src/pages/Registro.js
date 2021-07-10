import React,{useState} from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import { useHistory } from "react-router-dom"
import firebase from '../config/firebase'

const styles = { 
  cards:{
      width: '80%',
      margin:'auto',
      marginTop:'10px'
  }
}
function Registro(){
  const history = useHistory();
  const [form,setForm] = useState({nombre:'',apellido:'',email:'',password:''});
  const [spinner,setSpinner] = useState(false);
  const handleSubmit = (e)=>{
      console.log("HandleSubmit",form)
      setSpinner(true);
      firebase.auth.createUserWithEmailAndPassword(form.email,form.password)
      .then(data=>{
          console.log("data",data.user.uid)
          firebase.db.collection("usuarios").add({
              nombre:form.nombre,
              apellido:form.apellido,
              email:form.email,
              userId:data.user.uid
          })
          .then(data=>{
              console.log("data database",data)
              setSpinner(false);
              history.push("/Login")
          })
          .catch(error=>{
              setSpinner(false);
              console.log("error database",error)
          })
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
              <Card.Title><h2>Registro</h2></Card.Title>
              <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicNombre">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type="text" placeholder="Ingrese su nombre" name="nombre" value={form.nombre} onChange={handleChange}/>
                      
                  </Form.Group>
                  <Form.Group controlId="formBasicApellido">
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control type="text" placeholder="Ingrese su apellido" name="apellido" value={form.apellido} onChange={handleChange}/>
                      
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Ingrese su email" name="email" value={form.email} onChange={handleChange}/>
                      
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>Contraseña (por lo menos 6 dígitos)</Form.Label>
                      <Form.Control type="password" placeholder="Ingrese su contraseña" name="password" value={form.password} onChange={handleChange}/>
                      
                  </Form.Group>

                  
                  <Button variant="info" type="submit">
                      {
                          spinner &&
                          <Spinner animation="grow" variant="light" size="sm" />
                      }
                      Enviar datos
                  </Button>
              </Form>
          </Card.Body>
      </Card>
      
      
      </>
  )
}
export default Registro

/*class Registro extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
       }
  render() {
      return (
        <form>
          <h2>Registro</h2>
          <label>
            Nombre:
          </label>
          <input 
            type="text" 
            name="first-name"
            placeholder="escribe tu nombre"
            />
          <br/>
          <br/>
          <label>
            Apellido:
          </label>
          <input 
            type="text" 
            name="last-name"
            placeholder="escribe tu apellido"/>
           <br/>
           <br/> 
           <label>
            email:
          </label>
          <input 
            type="mail" 
            name="mail"
            placeholder="escribe tu correo"/>
          <br/>
          <br/>
          <label>
            Teléfono:
          </label>
          <input 
            type="number" 
            name="phone"
            placeholder="escribe tu teléfono"/>
          <br/>
          <br/> 
          <label>
            passworrd:
          </label>
          <input 
            type="password" 
            name="password"
            placeholder="escribe una contraseña"/>
          <br/>
          <br/> 
          <label>
            Confirmar contraseña : 
          </label>
          <input 
            type="password" 
            name="password"
            placeholder="repite la contraseña"/>
           <br/>
          <br/> 
          <button>enviar</button>
        </form>
      );
    }
  }
    document.getElementById('root')
    export default Registro;*/