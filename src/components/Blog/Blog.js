import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class Blog extends Component {

  render() {
    const { blog,handleDeleteBlog } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-9">
            <Link className="blog" to={"/blogs/" + blog._id}>
              <h2 className="blog">
                {blog.titulo}
              </h2>
              <h3 className="blog">
                {blog.titulo}
              </h3>
            </Link>
            <p className="blog">Posted by
            <Link className="blog" to="/">{" " + blog.idUsuario + " "}</Link>
              on {blog.date}</p>
          </div>

          <div className="col-lg-3">
            <button className="btn btn-danger btn-lg btn-block" onClick={handleDeleteBlog}>Borrar</button>
            <Link className="btn btn-warning btn-lg btn-block" to={"/blogs/api/put/"+blog._id}>Actualizar</Link>
          </div>

        </div>
        <hr>
        </hr>
      </React.Fragment>
    );
  }
}
