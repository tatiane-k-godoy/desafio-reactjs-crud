import React, { Component } from 'react'
import { Button, Form, Col, Container} from 'react-bootstrap';
import './Cadastro.css';

class Cadastro extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex == -1)
            return {
                nome: '',
                email: '',
                telefone: '',
                titulo: '',
                descricao: '',
                data: '',
                hora: '',
                local: ''
                // nao configurado para recebe o arquivo de imagem
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list != this.props.list) {
            this.setState({ ...this.returnStateObject() })
            console.log(prevProps, this.props)
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleChangeSearch = (e) => {
        this.setState({[e.target.name]: e.target.value})
       
            function initAutocomplete() {
                var local = document.getElementById('pac-input');
                var searchBox = new window.google.maps.places.SearchBox(local);
                searchBox.addListener('places_changed', function() {});
            }
            initAutocomplete();
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)

    }


    render() {
        return (
            <Container fluid className="Cadastro-body">
                <h1>Cadastrar Evento</h1>
                <Form className="Cadastro-form" onSubmit={this.handleSubmit} autoComplete="off">
                    <Form.Group>
                        <Form.Row>
                            <Col xl="2"><Form.Label>Nome/Provedor</Form.Label></Col>
                            <Col xl="10"><Form.Control className="Form-control"type="text" name="nome" placeholder="Nome Completo" onChange={this.handleInputChange} value={this.state.nome} /><br /></Col>
                        </Form.Row>
                        <Form.Row>
                            <Col xl={2}><Form.Label >Contato</Form.Label></Col>
                            <Col xl={5}><Form.Control type="email"  name="email" placeholder="Email" onChange={this.handleInputChange} value={this.state.email} /><br /></Col> 
                            <Col><Form.Control type="text" name="telefone" placeholder="Telefone" onChange={this.handleInputChange} value={this.state.telefone} /><br /></Col> 
                        </Form.Row>
                        <Form.Row>
                            <Col xl={2}><Form.Label>Título</Form.Label></Col>
                            <Col><Form.Control type="text" name="titulo" placeholder="Digite um Título" onChange={this.handleInputChange} value={this.state.titulo} /><br /></Col> 
                        </Form.Row>
                        <Form.Row>
                            <Col xl={2}><Form.Label>Descrição</Form.Label></Col>
                            <Col><Form.Control as="textarea" rows="2"  name="descricao" placeholder="Descrição do Evento" onChange={this.handleInputChange} value={this.state.descricao} /><br /></Col> 
                        </Form.Row>
                        <Form.Row>
                            <Col xl={2}><Form.Label>Data</Form.Label></Col>
                            <Col xl={5}><Form.Control type="date" name="data" onChange={this.handleInputChange} value={this.state.data} /><br /></Col>
                            <Col xl={1}><Form.Label>Hora</Form.Label></Col>
                            <Col xl={4}><Form.Control type="time" name="hora" onChange={this.handleInputChange} value={this.state.hora} /><br /></Col> 
                        </Form.Row>
                        <Form.Row>
                        <Col xl={2}><Form.Label>Local</Form.Label></Col>
                        <Col xl={5}><Form.Control type="text" name="local" placeholder="Buscar Local..." onChange={this.handleChangeSearch} defaultValue={this.state.local} id="pac-input" /><br /></Col>
                        <Col xl={3}><Form.Label for="formcheck-api-regular" className="Cadastro-form-file">Inserir Foto</Form.Label></Col>
                        <Form.File id="formcheck-api-regular" className="Cadastro-form-file2" type="file"><Form.File.Input /></Form.File><br />
                        <Col xl={2}><Button type="submit">Cadastrar</Button></Col>
                        </Form.Row>
                    </Form.Group>  
                </Form>
            </Container>
        )

    }
}


export default Cadastro