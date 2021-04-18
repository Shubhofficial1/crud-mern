import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CreatePost = () => {
  const [data, setData] = useState({
    title: '',
    description: '',
  })

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
  }

  function submit(e) {
    e.preventDefault()
    axios
      .post('http://localhost:5000/posts', {
        title: data.title,
        description: data.description,
      })
      .then((res) => {
        console.log('success')
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

export default CreatePost
