import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import Moment from 'react-moment'

const ArticleListing = ({article}) => { 
    const history = useHistory()
    const [imageURL, setImageURL] = useState(null)

    useEffect(() =>{
        const imgurl = article.fields?.heroImage?.fields?.file?.url
        setImageURL(imgurl)
    },[article]) 

    const onReadMore = () => {
        const articleId = article.sys.id
        history.push(`/article/${articleId}`)
    }

    return (
        <div>
            <div className="mb-4 row">
                <div className="card-body col-sm-8">
                    <h2 className="card-title">{article.fields?.title}</h2>
                    <p className="card-text">{article.fields?.description}</p>
                    <button className="btn btn-primary" onClick={onReadMore}>Read More &rarr;</button>
                </div>
                <img className="card-img-top col-sm-4" src={imageURL || "http://placehold.it/750x300"} alt="Card image cap" width={500} height={250}/>
                <div className="text-muted">
                    <Moment format ={'MMMM Do, YYYY'} date={article.fields?.publishDate} />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ArticleListing