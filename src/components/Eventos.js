import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button, Card, Col, Row, Container} from 'react-bootstrap';

import './Eventos.css';
import Cadastro from './Cadastro';

class Eventos extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList()
    }

    returnList() {
        if (localStorage.getItem('event') == null)
            localStorage.setItem('event', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('event'))
    }

    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })
    }

    handleDelete = (index) => {
        var list = this.returnList()
        list.splice(index, 1);
        localStorage.setItem('event', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    onAddOrEdit = (data) => {
        var list = this.returnList()
        if (this.state.currentIndex == -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem('event', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    render() {
        return (
            <div><div id="eventos"></div><br/>
                <Container fluid >
                    <h1>Próximos Eventos</h1>
                    <Row>
                    {this.state.list.map((item, index) => {
                        return <tr key={index}>
                            <Col><Card className="Cards">
                            <Card.Body>
                                {/* dada a nao implementacao do input-file img recebe um link */}
                                <Card.Img variant="top" src="https://betterstudio.com/wp-content/uploads/2019/05/1-1-instagram-1024x1024.jpg" />
                                <Card.Title className="Cards-titulo">{item.titulo}</Card.Title>
                                <Card.Text className="Cards-texto">
                                    {item.descricao} <br/>
                                    {item.data} {item.hora} <br/>
                                    {item.local} <br/>
                                    Por: {item.nome} <br/>
                                    Contato: {item.telefone} <br/>
                                    {item.email} 
                                </Card.Text>
                                <Button onClick={() => this.handleEdit(index)}><AnchorLink  href="#cadastro">Editar</AnchorLink></Button>
                                <Button onClick={() => this.handleDelete(index)}>Deletar</Button>
                            </Card.Body>
                            </Card></Col> <br/>
                        </tr>
                    })} 
                    </Row>
                </Container>
                <div id="cadastro"></div><br/>
                <Cadastro 
                    currentIndex={this.state.currentIndex}
                    list={this.state.list}
                    onAddOrEdit={this.onAddOrEdit}
                />
            </div>
        )
        
    }
}

export default Eventos