import React, {useEffect, useState} from 'react'
import { createClient } from 'contentful-management'
import {useDispatch} from 'react-redux'
import ActionTypes from '../../store/actionTypes'

const AddPost = () => {
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [isPublishable, setIsPublishable] = useState(false)
    const dispatch = useDispatch()

    const publishData = () => {
        const client = createClient({
            accessToken: 'CFPAT-OqevthSBFlIwyvRICkoIs-uzlV3fytd7WSmHd8kVbI0'
          })
        dispatch({type: ActionTypes.SHOW_LOADER})

        client.getSpace('eztr8wii0aib')
        .then((space) => space.getEnvironment('master'))
        .then((environment) => environment.createEntry('blogPost', {
        fields: {
            title: {
                'en-US': title
            },
            description: {
                'en-US': description
            }
        }
        }))
        .then((entry) => entry.publish())
        .then((entry) => {
            dispatch({type: ActionTypes.HIDE_LOADER}) 
        })
        .catch(error => {
            dispatch({type: ActionTypes.HIDE_LOADER}) 
        })
        
    }

    useEffect(() => {
        if(title && title.length > 0)
            setIsPublishable(true)
        else 
            setIsPublishable(false)
    }, [title])

    return (
        <>
            <form class="form-signin">
                <h1 class="h3 mb-3 font-weight-normal">Enter The Details</h1>
                <label htmlFor="title" class="sr-only">Title</label>
                <input type="text" className="form-control" 
                    id="title" 
                    placeholder="Enter Title Here" 
                    onChange={(e) =>{setTitle(e.target.value)}} 
                    required autofocus 
                />
                <small id="titleHelp" className="form-text text-muted">This Field is required</small>

                <br />
                <label htmlFor="description" class="sr-only">Description</label>
                <input type="text" 
                    className="form-control" 
                    id="desciption" 
                    placeholder="Enter Description Here" 
                    onChange={(e) =>{setDescription(e.target.value)}} required 
                /> 
                <br />
                <br />
                <button type='button' class="btn btn-primary" onClick={publishData} disabled={!isPublishable}> Publish</button>
            </form>
            
        </>
    )
}

export default AddPost