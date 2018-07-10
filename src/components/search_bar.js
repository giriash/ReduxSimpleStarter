  import React, { Component } from 'react';
  // { Component } is same as: const Component = React.Component;
  // { Component } for: class SearchBar extends React.Component

  class SearchBar extends Component {
      constructor(props) {
          super(props); // call parent class

          this.state = {term: ''};
      }

      render() {
          return (
              <div className="search-bar">
                  <input
                      value = {this.state.value}
                      onChange={event => this.onInputChange(event.target.value)}/>
              </div>

          );
      }

      onInputChange(term) {
         this.setState({term});
         this.props.onSearchTermChange(term);
      }

  }

  export default SearchBar;