import React from 'react'

const Newsitems = (props) => {

    const {title, description, imgUrl, author, url} = props;

  return (
    <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={imgUrl?imgUrl:"https://static.foxnews.com/foxnews.com/content/uploads/2024/04/mahomes-worthy-good.png"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title?title:""}</h5>
                <p className="card-text">{description?description:"The Kansas City Chiefs traded up to select Xavier Worthy, the record-holder for the fasted 40-time, and Patrick Mahomes seems excited about it."}</p>
                <p className="card-text">By {author?author:"Thomas Lake"}</p>
                <a href={url} target='target_main' className="btn btn-primary">Read More</a>
            </div>
        </div>
    </div>
  )
}

export default Newsitems
