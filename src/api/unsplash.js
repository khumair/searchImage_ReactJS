import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID fC525VqZcerTw0shJt2s-nlN08mtaCdFuybzNTUtzfQ',
    }
});