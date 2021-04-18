import axios from 'axios'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const PostCard = ({ post }) => {
  const deletePost = async (postid) => {
    try {
      const { data } = await axios.delete(`/posts/${postid}`)
      console.log(data)
    } catch (err) {
      console.log(err.message)
    }
  }
  return (
    <Card>
      <Card.Body style={{ textAlign: 'center' }}>
        <LinkContainer to={`/show-post/${post._id}`}>
          <Card.Title>{post.title}</Card.Title>
        </LinkContainer>
        <LinkContainer to={`/show-post/${post._id}`}>
          <Card.Text>{post.description}</Card.Text>
        </LinkContainer>

        <Button
          variant='primary'
          onClick={() => {
            deletePost(post._id)
          }}
        >
          delete
        </Button>
        <LinkContainer to={`/edit-post/${post._id}`}>
          <Button variant='info'>Update</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  )
}

export default PostCard
