import React, { Component }  from 'react';
import { withRouter } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


const styles = {
    imgProducto:{
        width:"100px"
    },
    title:{
        fontSize:"16px",
        color: "#11838b"
      
    },
    desc:{
        fontSize:"12px",
        fontStyle:"italic",
        color: "#11838b"
      
    }
}
class ProductoDetalle extends Component{
    
    constructor(props){
        super(props)
        this.state={
            mensaje:""
        }
    }
    handleClick = ()=>{
        this.setState({
            mensaje:"Gracias por su compra"
        })
    }
    render(){
        return (
            <Card style={{ width: "18rem", margin: "auto" }}>
            <Card.Body align="center">
                <Card.Title style={styles.title}>{this.props.data.data().name}</Card.Title>
                <Card.Title style={styles.title}>SKU: {this.props.data.data().SKU}</Card.Title>
                <Card.Text>
                    <img src={this.props.data.data().image} style={styles.imgProducto}></img>
                </Card.Text>
                <Card.Text style={styles.desc}>Descripción: {this.props.data.data().description}
                    
                </Card.Text>
               {
                    this.props.buttons &&
                    <Button variant="info" onClick={()=>this.props.history.push('/producto/'+this.props.data.id)}>Ver Detalle</Button>
                }
                    <Button variant="info" onClick={this.handleClick}>
                    Comprar
                </Button>
               
                <br/>
                {this.state.mensaje}
            </Card.Body>
           </Card>
        )
    }
}

export default withRouter(ProductoDetalle);