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
      genres: [],
      selected: 0,
    };
  }
  async componentDidMount() {
    let res = await axios.get(endpoints.genres())
    let data = res.data
    const movies = await this.getList()
    this.setState({
      genres: [{id: 0, name: "Most Popular"}, ...data.genres],
      list: movies,
    })  
  }
  
  getTitle = (title) => {
    console.log(title)
  };

  async setSelected(id) {
    const movies = await this.getList(id)
    console.log('movies from api', movies.map(m => m.original_title))
    this.setState({
      selected: id,
      list: movies,
    })  
    console.log('movies from state', this.state.list.map(m => m.original_title))
  }

  async getList(selected = 0){    
    const endpoint = selected === 0?endpoints.mostPopularMovies:endpoints.genreMovies
    let res = await axios.get(endpoint(selected));
    return res.data.results;    
  }

  render() {
    return (
      <div>
          {this.state.genres.map(genre => (
            <Genre title={genre.name} id={genre.id} selected={this.state.selected === genre.id} clickHandler={(id) => this.setSelected(id)} />  
          ))}
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
