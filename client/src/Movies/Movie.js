import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Link, Route } from 'react-router-dom'; 
import UpdateMovie from './UpdateMovie'; 

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id)
    console.log(this.props); 
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.response));
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
        <Route path={`/update-movie/${this.props.match.params.id}`} component={UpdateMovie} />
        <Link to={`/update-movie/${this.props.match.params.id}`}>
          <button className="save-button edit-button">Edit</button>
        </Link>
      </div>
    );
  }
}
