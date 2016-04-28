// Import React and pull off Component directly from react, meaning React.Component
import React, { Component } from 'react';

// New SearchBar class and gives it access to all functionnality
// from the react component class
class SearchBar extends Component {
  // Call automatically whatever a new instance of searchBar is called
  constructor(props) {
    super(props);

    // Only inside the constructor function we change the state that way
    this.state = { term: ''};
  }
  // Method on the class = function
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange (term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
