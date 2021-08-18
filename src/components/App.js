import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';

// const App = () => {
//     return (
//         <div className="ui container" style={{ marginTop: '20px'}} >
//             <SearchBar />
//         </div>
//     );
// };

class App extends React.Component {

    state = { images: [] };

    // Promise
    // onSearchSubmit(term) {
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: { query: term },
    //         headers: {
    //             Authorization: 'Client-ID y8EkpdquSYSOxpqR18H65_DX2pvJUqbGlAZnSrJtoWo'
    //         }
    //     }).then((response) => {
    //         console.log(response.data.results)
    //     });
    // }

    // Async-Await
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });
        // console.log(response.data.results)
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px'}} >
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found : {this.state.images.length} Images.
            </div>
        );
    }
}

export default App;