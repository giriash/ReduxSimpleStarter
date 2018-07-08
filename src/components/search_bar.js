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
              <div>
                  <input
                      value = {this.state.value}
                      onChange={event => this.setState({term: event.target.value})}/>
              </div>

          );
      }

  }

  export default SearchBar;