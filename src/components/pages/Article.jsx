import React, {useEffect, useState} from 'react'
import ArticleDetail from '../atoms/ArticleDetail'
import ActionTypes from '../../store/actionTypes'
import {useDispatch} from 'react-redux'

const Article = (props) => {
    const contentful = require("contentful");

    const [article, setArticle] = useState([])
    const [articleId, setArticleId] = useState(null)
    const dispatch = useDispatch()

    const [contentClient, setContentClient] = useState('')
    useEffect(() =>{
        const client = contentful.createClient({
            space: "eztr8wii0aib",
            accessToken: "9DTDgTEJryQR6wAgE72hmDvNjobYfI9Qw6bffHgNqu4"
          });
          setContentClient(client)
          const pathName = props.location.pathname
          setData(client, pathName.split('/article/')[1])
    }, [])

    const setData = async(client, id) => {
        dispatch({type: ActionTypes.SHOW_LOADER})
        const responseData = await client.getEntry(id)
        setArticle(responseData)
        dispatch({type: ActionTypes.HIDE_LOADER})
    }

    return (
        <>
            {article && <ArticleDetail article={article}/>}
        </>
    )
}

export default Article