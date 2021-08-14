import React from 'react';

class SearchBar extends React.Component {    
    // onInputChange(event) { console.log(event.target.value); }
    // onInputClick() { console.log("Input Was Clicked"); }

    // 1st Way
    // constructor(props) {
    //     super(props)
    //     this.state = this.state.bind(this)
    // }

    state = { term: ''};

    // onFormSubmit(event) {
        // event.preventDefault();
        // console.log(this.state.term); // Won't Work Here as 'this' is Undefined
    //}

    // 2nd Way
    onFormSubmit = event => {
        event.preventDefault();
        // This would work
        // console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                {/* 3rd Way */}
                {/* <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form"> */}
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