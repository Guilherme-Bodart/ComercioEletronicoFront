import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import logo from "../../assets/logo2.png"
import '../../styles/Login.css'

const initialState = {
  pageC:1,
  pageE:1

}

class Principal extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    onChangePageC = (pageC) => {
      this.setState({
        pageC
     })
    }

    onChangePageE = (pageE) => {
      this.setState({
        pageE
     })
    }

    render(props){
      // if(this.props.page.page === "cadastro"){
      //   return <Redirect to ="/cadastro"/>
      // }
      // if(this.props.page.page === "enviarEmail"){
      //   return <Redirect to ="/enviarEmail"/>
      // }
      // if(this.state.logado && this.props.usuario.permissao==2){
      //   return <Redirect to ="/admin"/>
      // }
      // if(this.state.logado && this.props.usuario.permissao==1){
      //   return <Redirect to ="/user"/>
      // }
      if(this.state.pageC==0){
        return <Redirect to ="/cadastro"/>
      }
      if(this.state.pageE==2){
        return <Redirect to ="/recuperar"/>
      }
  
      return (
        <div className="App">
          <header className="App-header">
            
            <Image src={logo} className="App-logo " alt="logo" />
            <Form className="App-form " onSubmit={this.handleSubmit} >
              <Form.Label className="App-text">Fazer Login</Form.Label>
              <Form.Group controlId="formBasicEmail" className="App-form-group">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Entre com seu e-mail"
                    className="App-form-control"  
                    // onChange = {value => this.onChangeEmail(value)}
                    />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
  
              <Form.Group controlId="formBasicPassword" className="App-form-group">
                <Form.Label >Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha" 
                className="App-form-control" 
                // onChange = {value => this.onChangeSenha(value)}
                />
              </Form.Group>
              <Button variant="outline-light" type="submit" className="App-button-login" 
              style={{color:"#E87715", borderColor:"#C1550C"}} 
                // onClick = { async () =>
                //   {
                //     var idx = this.state.email.indexOf('@');
                //     if(idx != -1){
                //       var usuario = {email:this.state.email,senha:this.state.senha}
                //       await this.props.autenticarUsuario(usuario)
                //       await this.onChangeLogado(this.props.usuario.logado)
                //     }
                //   }
                // }
                >
                <p className="App-text-button">Entrar</p>
              </Button>
              <Button variant="outline-secondary" className="App-button-login" 
                      onClick={ () => {
                          this.onChangePageC(0)
                        }
                      }
                      >
                <p className="App-text-button">Crie sua conta</p>
              </Button>
              
            </Form>
            <Button variant="link" className="App-button-link" style={{color:"#E87715"}}
                      onClick={ () => {
                        this.onChangePageE(2)
                    }}
                    >
                <p className="App-text-button">Esqueceu sua senha?</p>
              </Button>
  
          </header>
        </div>
        
        
      )
    }
}

const mapStateToProps = ({ }) => {
    return {
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Principal)