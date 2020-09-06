import React, { Component } from "react";
import "./MovieResults.scss";


class MovieResults extends Component {
  render() {
    if (!this.props.data) {
      return <h3>Please Search For Results</h3>;
    }
    return (
      <section className="movie">
      {!this.props.data &&
       ( <h3>Please Search For Results</h3>)}
        <section>
          {this.props.data.map((item) => {
            return (
              <form
                className="movie__container"
                onSubmit={(event) => this.props.clickHandler(event, item.Title)}
                key={item.imdbID}
              >
                <div className="movie__poster--container">
                  <img
                    src={item.Poster}
                    className="movie__poster"
                    alt={item.Title}
                  />
                </div>

                <div className="movie__blurb">
                  <h3 className="movie__blurb-text">Title : {item.Title}</h3>
                  <h4 className="movie__blurb-text">Release Year: {item.Year}</h4>
                </div>

                <button className="movie__btn" type="submit">Nominate</button>
              </form>
            );
          })}
        </section>
       
      </section>
    );
  }
}

export default MovieResults;
