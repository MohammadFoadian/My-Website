import React, { useEffect, useRef, useState  } from 'react';
import NewsUi from './NewsUi';
import { newsApi } from './services/Api';
import Navbar from '../HPContainer.js/Navbar';

import { useNavigate } from 'react-router-dom';
import ShowNewsUi from './ShowNewsUi';


const News = () => {

    const [data , setData] = useState([])
    
    const navigate = useNavigate()

    const inputRef = useRef(null)
    const countryRef = useRef(null)
    const categoryRef = useRef(null)
      

    
    const submitHandler = (e) => { 
        e.preventDefault()
        const inputName = inputRef.current.value
        const countryName = countryRef.current.value
        const categoryName = categoryRef.current.value
        
        const fetchApi = async () => { 
            const news =  await newsApi(inputName , countryName , categoryName)
            const newsData = news.articles
            setData(newsData) 
        }
        fetchApi()       
         
    }
  
    return (
        <div>
            {/* <Navbar /> */}
            <NewsUi inputRef={inputRef} 
                    countryRef={countryRef}
                    categoryRef={categoryRef}
                    submitHandler={submitHandler}/>
            
                
                {
                data.map(news => <ShowNewsUi 
                                        key={news.url}
                                        title={news.title}
                                        image={news.urlToImage}
                                        author={news.author}
                                        description={news.description}
                                        publish={news.publishedAt}
                                        />)
                }
                
            

            
        </div>
    );
};

export default News;