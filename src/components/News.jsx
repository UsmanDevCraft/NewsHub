import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems'

const News = (props) => {

    const API_key = "83021bb6af17429aaa14055e1284a0f5";
    const [articles, setArticles] = useState([]);


    const newsCall = async () => {
   const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${API_key}`;
      try {
          const data = await fetch(url);
          const parsedData = await data.json();
          setArticles(parsedData.articles);
      } catch (error) {
          console.error("Error fetching news:", error);
      }
  };
  
  useEffect(() => {
      newsCall();
  }, []);
  


  const capitalize = ()=>{
    return props.category.charAt(0).toUpperCase() + props.category.substr(1);
  };

  return (
<>
    <div className="container d-flex justify-content-center mt-5 text-center">
      <h1>NewsHub - Top {capitalize(props.category)} News</h1>
    </div>
      <div className='mt-5 d-flex flex-wrap justify-content-center gap-4'>
        {articles.map((element)=>{
            return <div key={element.publishedAt}>
            <Newsitems title={element.title} description={element.description} imgUrl={element.urlToImage} author={element.author} url={element.url}/>
          </div>
        })}
      </div>
</>
  )
}


export default News
