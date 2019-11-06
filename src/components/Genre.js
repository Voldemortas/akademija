import React from 'react'
import { connect } from 'react-redux'
import { setSelected } from '../actions'
import { getGenreMovies } from '../thunks'

class Genre extends React.Component {
  constructor(props) {
    super(props)
  }

  async clickHandler(id) {
    await this.props.onSetMovies(id)
    this.props.onSelectGenre(id)
  }

  render() {
    const isSelected = this.props.selected === this.props.id
    return (
      <div
        className={`genre ${isSelected ? 'is-selected' : ''}`}
        onClick={() => this.clickHandler(this.props.id)}
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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Genre)
