import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './search-bar';
import ImageList from './image-list';

class App extends React.Component {
  state = {text: '', images: []};

  onSearchSubmit = (e) => {
    e.preventDefault();
    this.searchImages(this.state.text);
    this.setState({text: ''});
  };

  searchImages = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {query: term},
    });
    this.setState({images: response.data.results});
  };
  onInputChange = (e) => {
    this.setState({text: e.target.value});
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar
          text={this.state.text}
          onSearchSubmit={this.onSearchSubmit}
          onInputChange={this.onInputChange}
        />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
