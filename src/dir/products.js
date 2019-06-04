import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';
import '../vendor/bootstrap/css/bootstrap.min.css'
import '../css/business-casual.css';
import '../css/business-casual.min.css';
import '../fonts/google_fonts.css';
import '../fonts/google_fonts_api.css'



class Products extends Component {

  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    
    return (
      <body>

  <h2 class="site-heading text-center text-white d-none d-lg-block">
    <span class="site-heading-upper text-primary mb-3">Listado de Libros</span>
    <span class="site-heading-lower"></span>
  </h2>


  <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
    <div class="container">
      <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Start Bootstrap</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="/">Inicio
              <span class="sr-only">(current)</span>
            </a>
          </li>
          
          <li class="nav-item active px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="/products">Listado</a>
          </li>
          <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="about.html">Acerca De</a>
          </li>
          <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="store.html">Sugerencias</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="page-section">
    <div class="container">
      <div class="product-item">
        <div class="product-item-title d-flex">
         
        </div>
       
        <div class="product-item-description d-flex mr-auto">
          
        </div>
      </div>
    </div>
  </section>

      <div class="container">
        <div class="panel panel-default">
          
          <div class="panel-body">
            <h1><Link to="/create">Añadir</Link></h1>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Descripcion</th>
                  <th>Autor</th>
                </tr>
              </thead>
              <tbody>
                {this.state.boards.map(board =>
                  <tr>
                    <td><Link to={`/show/${board.key}`}>{board.title}</Link></td>
                    <td>{board.description}</td>
                    <td>{board.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>


  <footer class="footer text-faded text-center py-5">
    <div class="container">
      <p class="m-0 small">Copyright &copy; Your Website 2019</p>
    </div>
  </footer>



</body>
      
    );
  }
}

export default Products;