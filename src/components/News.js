import React,{useEffect, useState} from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

  const capitalize = ()=>{
    return props.category.charAt(0).toUpperCase() + props.category.substr(1);
  };

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [apiKey,setApiKey] = useState('83021bb6af17429aaa14055e1284a0f5');
  // const [loading, setLoading] = useState(false);
  // document.title = `${capitalize(props.category)} - NewsHub`;
  
  const updateNews = async ()=>{
    // props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${apiKey}&page=${page}&pagesize=9`
    let data = await fetch(url);
    // props.setProgress(30);
    let parsedData = await data.json();
    // props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    // props.setProgress(100);
  };

  useEffect(()=>{
    updateNews();
  }, []);

  // previousButton = async ()=>{
  //   let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&page=${page - 1}&pagesize=9`
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles
  //   });
  // };
  // nextButton = async ()=>{
  //   if(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)){

  //   } else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&page=${this.state.page + 1}&pagesize=9`
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parsedData.articles
  //     });
  //   };
  // };


  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&page=${page + 1}&pagesize=9`
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

    return (
      <>
            <h1 className='text-center my-3'>NewsHub - Top {capitalize(props.category)}  Headlines</h1>
            <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length !== totalResults}
              loader={<h4>Loading...</h4>} >
              <div className="container">
                <div className="row">
                  {articles.map((element)=>{
                    return <div className="col-md-4 my-3" key={element.url}>
                              <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
                            </div>
                  })}
                </div>
              </div>
            </InfiniteScroll>



            {/* PREVIOUS AND NEXT BUTTONS ARE COMMENTED OUT BECAUSE OF INFINITE SCROLL COMPONENT */}

            {/* <div className="container d-flex justify-content-between">
            <button type="button" className="btn btn-outline-success" disabled={this.state.page <= 1} onClick={this.previousButton}>&larr; Previous</button>
            <button type="button" className="btn btn-outline-success" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} onClick={this.nextButton}>Next &rarr;</button>
            </div> */}
      </>
    )
  }

News.defaultProps = {
  country: "us",
  pageSize: 12,
  category:"general"
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category:PropTypes.string,
};

export default News
