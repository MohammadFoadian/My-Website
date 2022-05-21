import axios from 'axios'




const getApi = async (cityName) => {

    const APIKEY = 'e4abe48c9f7593613fdaa87d8015c225'

    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`

   
    const response = await axios.get(BASE_URL)
    
    
    
    
    // console.log(response)
    return response.data

}

export {getApi}
