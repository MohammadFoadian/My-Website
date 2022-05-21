import axios from 'axios'
// APIKEY = 466e35abdf904f069b2db2fec1e62b2a
// 1

const APIkey = "466e35abdf904f069b2db2fec1e62b2a"

const newsApi = async (newsName , country , category) => { 
    var BASE_URL = "https://newsapi.org/v2/"

    if(country === '' && category === '') { 
        BASE_URL += 'everything?' 
    } else {
        BASE_URL += 'top-headlines?' 
    }

    // if newsName exist
    if( newsName !== '' ) {  
        BASE_URL += `q=${newsName}&`  
    } 

    // if country exist
    if( country !== '') {  // 34
        BASE_URL += `country=${country}&`
    }

    // if category exist
    if( category !== '') {  // 36
        BASE_URL += `category=${category}&`  
       }

    BASE_URL += `apiKey=${APIkey}`

    // const newsResponse = await axios.get(BASE_URL)
    // const news = await newsResponse.json()
    // return {
    //     news
    // }

    const response = await axios.get(BASE_URL)
    console.log(response.data)
    return response.data
}

export {newsApi}