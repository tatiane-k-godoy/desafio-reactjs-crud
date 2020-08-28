
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Navbar, Nav} from 'react-bootstrap';

import './App.css';
import Header from './components/Header';
import Eventos from './components/Eventos';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="App-div" id="home">

      <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar sticky="top" />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><AnchorLink href='#home'>Início</AnchorLink></Nav.Link>
            <Nav.Link><AnchorLink href='#eventos'>Eventos</AnchorLink></Nav.Link>
            <Nav.Link><AnchorLink href="#cadastro">Cadastrar Eventos</AnchorLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Header />
      
      <Eventos />

      <Footer />

    </div>
  );

};

export default App;
