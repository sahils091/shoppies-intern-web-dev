import React, { Component } from "react";
import "./NominatedMovie.scss";
import { Link } from 'react-router-dom';
import FileSaver, {saveAs} from 'file-saver';



class NominatedMovie extends Component {

  render() {
 
    if (!this.props.nomination)   return null
    return (
      <section className="nominated">
          {this.props.nomination.map((data) => {
            return (
              <form 
              className="nominated__container"
               onSubmit={this.props.deleteHandler}
               key={data.Title}
               >
              <div className="nominated__poster--container">
                  <img
                    src={data.Poster}
                    className="nominated__poster"
                    alt={data.Title}
                  />
                </div>

                <div className="nominated__blurb">
                  <h3 className="nominated__blurb-text">Title : {data.Title}</h3>
                  <h4 className="nominated__blurb-text">Release Year: {data.Year}</h4>
                </div>
                <button className="nominated__btn" type="submit">Delete</button>
              </form>
            

            );
          })}
      </section>
    );
  }
}

export default NominatedMovie;
