import React from 'react'
import { connect } from 'react-redux'
import { setSelected } from '../actions'
import { getGenreMovies, thunkGenre } from '../thunks'

class Genre extends React.Component {
  async clickHandler(obj) {
    await this.props.onThunkGenre(obj)
  }

  render() {
    const isSelected = this.props.selected === this.props.id
    return (
      <div
        className={`genre ${isSelected ? 'is-selected' : ''}`}
        onClick={() =>
          this.clickHandler({ id: this.props.id, name: this.props.name })
        }
      >
        {this.props.name}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selected: state.componentState.selected,
})
const mapDispatchToProps = dispatch => ({
  onSelectGenre: id => dispatch(setSelected(id)),
  onSetMovies: id => dispatch(getGenreMovies(id)),
  onThunkGenre: genre => dispatch(thunkGenre(genre)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Genre)
