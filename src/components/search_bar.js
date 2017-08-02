import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

/* Work on placeholder for searchbar 
// Reference Link: https://stackoverflow.com/questions/27950908/react-jsx-how-to-set-props-to-placeholder-attribute
  1. Save it as a label props in state
  2. problem state change on click implement condition
 createStateFromProps: function(props){
    return {
      label: (props.value ?
        props.label || props.placeholder :
        props.placeholder || props.label),
      style: (props.value ? 'label' : 'placeholder')
    };
  }
*/
  render() {
    return (
      <div className="search-bar">
        <input 
          //placeholder="Search for videos"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  // The moment we give input -> we need to change the state  -> call function change state 
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
