import axios from "axios"

const searchImages = async (term)=> {
 const response= await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID HDpozCMoNarcpTuGsbtVWLRAAWF5xy3is7t4ZdS2byg'
        },
        params:{
            query:term,
        }
    });
    return response.data.results;
};
export default searchImages;
