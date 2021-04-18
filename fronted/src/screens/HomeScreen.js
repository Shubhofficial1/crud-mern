import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostCard from '../components/PostCard'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get('/posts')
      setPosts(data)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  return (
    <div>
      <Link to='/create-post'>Add a post</Link>

      {loading ? (
        <h2 style={{ textAlign: 'center' }}>Loading...</h2>
      ) : (
        <>
          <h1 style={{ textAlign: 'center' }}>Posts List 🚀</h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default HomeScreen
