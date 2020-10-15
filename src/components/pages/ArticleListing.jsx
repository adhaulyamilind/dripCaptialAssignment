import React, {useEffect, useState} from 'react'
import ArticleContainer from '../atoms/ArticleContainer'
import ActionTypes from '../../store/actionTypes'
import {useDispatch} from 'react-redux'
import {createClient} from 'contentful'

const ArticleListing = () => {
    const [article, setArticle] = useState([])
    const dispatch = useDispatch()

    useEffect(() =>{
        const client = createClient({
            space: "eztr8wii0aib",
            accessToken: "9DTDgTEJryQR6wAgE72hmDvNjobYfI9Qw6bffHgNqu4"
          });
          setData(client)
    }, [])

    const setData = async(client) => {
        dispatch({type: ActionTypes.SHOW_LOADER})
        const responseData = await client.getEntries({
            content_type: 'blogPost'
          })

        setArticle(responseData.items)
        dispatch({type: ActionTypes.HIDE_LOADER})
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="my-4">BLOG</h1>
                    {article.length > 0 && 
                        article.map((val, index) => {
                            return <ArticleContainer article={val} key={index}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ArticleListing