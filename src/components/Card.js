import React from "react";
import { connect } from "react-redux";
import { toggleHeart } from "../actions";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      showDescription: true
    };
  }

  render() {
    const { showDescription } = this.state;
    const {
      id,
      title,
      backgroundImage,
      date,
      rating,
      votes,
      description,
      hearts
    } = this.props;
    const isHearted = hearts.findIndex(e => e === id) !== -1;
    const heartIcon = isHearted ? "fa fa-heart" : "fa fa-heart-o";
    return (
      <div className="card">
        <div
          className="card__image"
          style={{
            backgroundImage: `url(${backgroundImage})`
          }}
        />

        <div className="card__title">{title}</div>

        <div className="card__like">
          <i
            className={heartIcon}
            onClick={() => this.props.onToggleHeart({ title, id }, isHearted)}
          />
        </div>

        <div className="card__subtitle">
          <span>{date}</span>
          <span>
            {rating} ({votes} votes)
          </span>
        </div>

        <div className="card-info">
          <div className="card-info__header">Summary</div>
          <button
            onClick={() => {
              this.setState({ showDescription: !showDescription });
            }}
          >
            Toggle
          </button>
          <div className="card-info__description">
            {showDescription ? description : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hearts: state.cards.hearted
});
const mapDispatchToProps = dispatch => ({
  onToggleHeart: (movie, toggle) => dispatch(toggleHeart(movie, toggle))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
