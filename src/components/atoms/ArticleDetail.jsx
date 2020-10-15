import React, {useEffect, useState} from 'react'
import Moment from 'react-moment'


const ArticleDetail = ({article}) => {
  const [imageURL, setImageURL] = useState(null)
  useEffect(() =>{
    const imgurl = article.fields?.heroImage?.fields?.file?.url
    setImageURL(imgurl)
  },[article])

  return (
      <div className="card mb-4">
        <img className="card-img-top" src={imageURL || "http://placehold.it/750x300"} alt="Card image cap" />
        <div className="card-footer text-muted">
              Posted on <Moment format ={'MMMM Do YYYY, hh:mm a'} date={article.fields?.publishDate} />
          </div>
        <div className="card-body-detail">
          <h2 className="card-title-detail">{article.fields?.title}</h2>
          <p className="card-text-detail">{article.fields?.description}</p>
        </div>
      </div>
  )
}

export default ArticleDetail