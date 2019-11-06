import React from 'react'
import { connect } from 'react-redux'
import { toggleCards, setSelected } from '../actions'
import { getGenres, getGenreMovies } from '../thunks'
import Card from './Card'
import { getImageUrl } from '../config'

class App extends React.Component {
  componentDidMount() {
    this.props.onSetSelected(0)
    this.props.onGetGenres()
    this.props.onGetGenreMovies()
  }

  render() {
    return (
      <div className="container">
        <header>
          <button
            style={{ display: 'block', margin: '0 auto' }}
            onClick={() => this.props.onToggleCards(!this.props.showCards)}
          >
            Hide movies
          </button>
        </header>

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
              />
            ))}
          </div>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showCards: state.componentState.showCards,
  mostPopularMovies: state.cards.list,
})
const mapDispatchToProps = dispatch => ({
  onToggleCards: shouldShow => dispatch(toggleCards(shouldShow)),
  onGetGenreMovies: genre => dispatch(getGenreMovies(genre)),
  onSetSelected: selected => dispatch(setSelected(selected)),
  onGetGenres: () => dispatch(getGenres()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
