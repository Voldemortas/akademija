import React from 'react';
import Card from './Card';
import Genre from './Genre';
import axios from 'axios';
import { endpoints, getImageUrl } from '../config';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      list: [],
      genres: [{id: 0, name: "Most Popular"}],
      selected: 0,
    };
  }
  async componentDidMount() {
    let res = await axios.get(endpoints.genres())
    let data = res.data
    this.setState({
      genres: [...this.state.genres, ...data.genres]
    })
    console.log(this.state.genres)
    const endpoint = this.state.selected === 0?endpoints.mostPopularMovies:this.state.genres.filter(e => e.id == endpoints.genreMovies)
    res = await axios.get(endpoint(this.state.selected));
    data = res.data;
    this.setState({
      list: data.results,
    });
  }
  
  getTitle = (title) => {
    console.log(title);
  };

  setSelected = (id) => {
    console.log(id)
    this.setState({
      selected: id
    })
    this.forceUpdate()
  }
  
  render() {
    console.log(endpoints.genres())
    return (
      <div>
        <div>
          {this.state.genres.map(genre => (
            <Genre title={genre.name} id={genre.id} selected={this.state.selected === genre.id} clickHandler={(id) => this.setSelected(id)} />  
          ))}
        </div>
        {this.state.list.map((card) => (
          <Card
            getTitle={this.getTitle}
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
    );
  }
}

export default App;
