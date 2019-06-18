import React, { Component } from 'react';



class store extends Component {
 
  render() {



    return (
      <body>

      <h2 class="site-heading text-center text-white d-none d-lg-block">
        <span class="site-heading-upper text-primary mb-3">Listado de Libros</span>
        <span class="site-heading-lower"></span>
      </h2>
    
    
      <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div class="container">
          <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Listado</a>
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
                <a class="nav-link text-uppercase text-expanded" href="#">Acerca De</a>
              </li>
              <li class="nav-item px-lg-4">
                <a class="nav-link text-uppercase text-expanded" href="/store">Sugerencias</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section class="text">
            <div class="container">
      <form>
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputPassword4">Nombre</label>
            <input type="text" class="form-control" id="inputPassword4" placeholder="Nombre"/>
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
          </div>
         
        </div>
        <div class="form-group">
          <label for="inputAddress">Descripcion</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="Descripcion"/>
        </div>
        
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">Ciudad</label>
            <input type="text" class="form-control" id="Ciudad"/>
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">Pais</label>
            <select id="inputState" class="form-control">
              <option selected>Seleccione...</option>
              <option>...</option>
            </select>
          </div>
         
        </div>
        
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
      </div>
      </section>

      <footer class="footer text-faded text-center py-5">
        <div class="container">
          <p class="m-0 small">Copyright &copy;  Website</p>
        </div>
      </footer>
      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    

      </body>

    

    );
  }
}
export default store;