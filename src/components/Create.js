import React, { Component } from 'react';

import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      title: '',
      description: '',
      author: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, author } = this.state;

    this.ref.add({
      title,
      description,
      author
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        author: ''
      });
      this.props.history.push("/products")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { title, description, author } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Añadir 
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/products" class="btn btn-primary"> Volver</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Titulo:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Titlulo" required/>
              </div>
              <div class="form-group">
                <label for="description">Descripción:</label>
                <textArea class="form-control" name="description" onChange={this.onChange} placeholder="Descripción" cols="80" rows="3" required>{description}</textArea>
              </div>
              <div class="form-group">
                <label for="author">Autor:</label>
                <input type="text" class="form-control" name="author" value={author} onChange={this.onChange} placeholder="Autor" pattern="[A-Za-z ñÑáéíóúÁÉÍÓÚ]+" required />
              </div>
              <button type="submit" class="btn btn-success">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;