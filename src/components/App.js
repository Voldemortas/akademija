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
      selectedGenre: 0,
      likedMovies: [],
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
      selectedGenre: id,
      list: movies,
    })  
    console.log('movies from state', this.state.list.map(m => m.original_title))
  }

  async getList(selectedGenre = 0){    
    const endpoint = selectedGenre === 0?endpoints.mostPopularMovies:endpoints.genreMovies
    let res = await axios.get(endpoint(selectedGenre));
    return res.data.results;    
  }

  setLikedMovies(id){
    console.log(id)
    if(this.state.likedMovies.findIndex(e => e === id) != -1){
      this.setState({
        likedMovies: [...this.state.likedMovies.filter(e => e != id)]
      })
    }else{
      console.log('hi');
      this.setState({
        likedMovies: [...this.state.likedMovies, id]
      })
    }
  }

  render() {
    return (
      <div>
          {this.state.genres.map(genre => (
            <Genre title={genre.name} id={genre.id} selected={this.state.selectedGenre === genre.id} clickHandler={(id) => this.setSelected(id)} />  
          ))}
        {this.state.list.map((card) => (
          <Card
            id={card.id}
            getTitle={this.getTitle}
            key={card.original_title}
            backgroundImage={getImageUrl(card.backdrop_path)}
            date={card.release_date}
            rating={card.vote_average}
            votes={card.vote_count}
            description={card.overview}
            title={card.original_title}
            liked={this.state.likedMovies.findIndex(e => e == card.id) != -1}
            likeHandler={(id) => this.setLikedMovies(id)}
          />
        ))}
      </div>
    );
  }
}

export default App;
