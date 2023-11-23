import React from 'react'

const NewsItems = (props) => {
      let {title, description, imageUrl, newsUrl, author, publishedAt, source} = props
    return (
      <div>
        <div className="card">
            <div style={{
              display:'flex',
              justifyContent:'flex-end',
              position:'absolute',
              right:'0'
            }}>
              <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
            <img src={imageUrl?imageUrl:"https://www.reuters.com/resizer/mI7HfKez_TwZy7QUqyTQIhStmxk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MPLGSNVE5ZJGRNRMTJGRZAXTKQ.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a rel="noopener noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-success">See More</a>
                <p className="card-text"><small className="text-body-secondary">By {author?author:"unknown"} updated on {new Date(publishedAt).toGMTString()}</small></p>
            </div>
        </div>
      </div>
    )
}

export default NewsItems
