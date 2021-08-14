import React from 'react';

class SearchBar extends React.Component {    
    // onInputChange(event) { console.log(event.target.value); }
    // onInputClick() { console.log("Input Was Clicked"); }

    state = { term: ''};

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                    <label> Image Search : </label>
                    {/* <input 
                        type="text"
                        onChange={this.onInputChange}
                        // Alternate way to write event handlers
                        onChange={(event) => console.log(event.target.value)}
                        onClick={this.onInputClick}
                    /> */}
                    {/* Make Controlled Elements */}
                    <input 
                        type="text"
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })}
                    />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;