import React, { useState, useEffect } from 'react'
import axios from 'axios'
const PostScreen = ({ match }) => {
  const [post, setPost] = useState({})

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(`/posts/${match.params.id}`)
      setPost(data)
    }
    fetchPost()
  }, [match])
  return (
    <div>
      <h3>{post.title}</h3>
      <h3>{post.description}</h3>
    </div>
  )
}

export default PostScreen
