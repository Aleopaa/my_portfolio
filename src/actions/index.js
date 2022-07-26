import axios from 'axios';

const fetchJoke = async joke => {
    try {
        const { data } = await axios.get(`https://api.jokes.one/joke/random`);
        return console.log(data[0].joke);
     }  catch (err) {
        if (data.status === 404) { throw Error(`Oops looks like we aren't feeling very funny today`) }
        throw new Error(err.message)
        }
    }
