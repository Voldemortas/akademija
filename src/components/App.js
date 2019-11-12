import React from "react";
import { connect } from "react-redux";
import { toggleCards, setSelected, log } from "../actions";
import { getGenres, getGenreMovies } from "../thunks";
import Card from "./Card";
import Genre from "./Genre";
import { getImageUrl } from "../config";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetGenres();
    this.props.onGetGenreMovies();
  }

  render() {
    return (
      <div className="container">
        <header>
          <button
            style={{ display: "block", margin: "0 auto" }}
            onClick={() => this.props.onToggleCards(!this.props.showCards)}
          >
            Hide movies
          </button>
        </header>
        <div className={"genres"}>
          {this.props.genres.map(genre => (
            <Genre key={genre.name} name={genre.name} id={genre.id} />
          ))}
        </div>
        {this.props.showCards ? (
          <div className="cards">
            {this.props.mostPopularMovies.map(card => (
              <Card
                key={card.original_title}
                backgroundImage={getImageUrl(card.backdrop_path)}
                date={card.release_date}
                rating={card.vote_average}
                votes={card.vote_count}
                description={card.overview}
                title={card.original_title}
                id={card.id}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showCards: state.componentState.showCards,
  mostPopularMovies: state.cards.list,
  genres: state.componentState.genres,
  selected: state.componentState.selected
});
const mapDispatchToProps = dispatch => ({
  onToggleCards: shouldShow => dispatch(toggleCards(shouldShow)),
  onGetGenreMovies: genre => dispatch(getGenreMovies(genre)),
  onSetSelected: selected => dispatch(setSelected(selected)),
  onGetGenres: () => dispatch(getGenres())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
