import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID y8EkpdquSYSOxpqR18H65_DX2pvJUqbGlAZnSrJtoWo'
    }
});