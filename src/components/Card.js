import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: props.title,
      showDescription: true,
      liked: false,
    };
  }
  
  componentDidMount() {
    this.props.getTitle(this.state.title);
  }
  
  render() {
    const { showDescription, liked } = this.state;
    const { title, backgroundImage, date, rating, votes, description } = this.props;
    return (
      <div className="card">
          <div
            className="card__image"
            style={{
              backgroundImage: `url(${backgroundImage})`
            }}/>
      
          <div className="card__title">
              {title}
          </div>
      
          <div className="card__like">
              <i onClick={() => {this.setState({liked: !liked})}} className="fa fa-heart-o">
                {liked ? 'unlike' : 'like'}
              </i>
          </div>
      
          <div className="card__subtitle">
              <span>{date}</span>
              <span>{rating} ({votes} votes)</span>
          </div>
      
          <div className="card-info">
            <div className="card-info__header">Summary</div>
            <button onClick={() => { this.setState({ showDescription: !showDescription })}}>Toggle</button>
            <div className="card-info__description">
              {showDescription ? description : null}
            </div>
          </div>
      </div>
    );
  }
}
