import React, { Component } from 'react';
import {Button, Carousel} from 'react-bootstrap';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Carousel className="Carousel">
                    <Carousel.Item>
                        <h1> Eventos S. A. 1 </h1>
                        <h3> Eventos S. A. 1 </h3><br/><br/>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <h1> Eventos S. A. 2 </h1>
                        <h3> Eventos S. A. 2 </h3><br/><br/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h1> Eventos S. A. 3 </h1>
                        <h3> Eventos S. A. 3 </h3><br/><br/>
                </Carousel.Item>
            </Carousel>
            <Button type="submit"><a  href="#cadastro">Criar meu Evento!</a></Button>
            </div>
        )
    }

}
export default Header