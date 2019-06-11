import React, { Component } from 'react';

import Image from './img/intro.jpg';
import './img/bg.jpg';
import './css/business-casual.css';
import './css/business-casual.min.css';
import './fonts/google_fonts.css';
import './fonts/google_fonts_api.css';
class App extends Component {

  render() {
    return (


  
   
    <body>


<h1 class="site-heading text-center text-white d-none d-lg-block">
    <span class="site-heading-upper text-primary mb-3">Libros</span>
    <span class="site-heading-lower"></span>
  </h1>

  <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
    <div class="container">
      <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Libros</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="/">Inicio
              <span class="sr-only">(current)</span>
            </a>
          </li>
         
            <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="/products">Listado</a>
          </li>
          <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="/about">Acerca de</a>
          </li>
        
          <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="/store">sugerencias</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="page-section clearfix">
    <div class="container">
      <div class="intro">
         <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src={Image} alt=""></img>
           
        <div class="intro-text left-0 text-center bg-faded p-5 rounded">
          <h2 class="section-heading mb-4">
            <span class="section-heading-upper">Beneficios de leer</span>
            <span class="section-heading-lower">Vale la pena leer?</span>
          </h2>
          <p class="mb-3">¿Te encanta leer? ¿Aún no has acabado un libro cuando ya estás empezando otro nuevo? Entonces no lo dudes, la lectura es una de las mejores costumbres que podemos tener.
          </p>
          <div class="intro-button mx-auto">
               
          </div>
        </div>
    </div>
    </div>
  </section>

  <section class="page-section cta">
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <div class="cta-inner text-center rounded">
            <h2 class="section-heading mb-4">
              <span class="section-heading-upper">Leer Mejora</span>
              <span class="section-heading-lower">Tu Memoria</span>
            </h2>
            <p class="mb-0">Leer diariamente va a hacer que dispongamos de una auténtica biblioteca personal de historias, de personajes, de términos, de expresiones y vocabulario nuevo que nos enriquece enormemente. El disponer de todas esas historias que cada día proseguimos con nuestra lectura y su hilo narrativo, mejora notablemente nuestra memoria y ejercita nuestras capacidades cognitivas.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer text-faded text-center py-5">
    <div class="container">
      <p class="m-0 small">Copyright &copy; Your Website 2019</p>
    </div>
  </footer>

  

  
      
      </body>
      
    );
  }
}

export default App;