import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const EditPost = ({ match }) => {
  const [data, setData] = useState({
    title: '',
    description: '',
  })

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    // console.log(newdata)
    setData(newdata)
  }

  const submit = (e) => {
    e.preventDefault()
    axios
      .patch(`http://localhost:5000/posts/${match.params.id}`, {
        title: data.title,
        description: data.description,
      })
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <div>
      <Link to='/'>Go back</Link>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id='title'
          placeholder='title'
          value={data.title}
          type='text'
        ></input>
        <input
          onChange={(e) => handle(e)}
          id='description'
          placeholder='description'
          value={data.description}
          type='text'
        ></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default EditPost
