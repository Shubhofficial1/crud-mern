import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import CreatePost from './screens/CreatePost'
import EditPost from './screens/EditPost'
import PostScreen from './screens/PostScreen'

function App() {
  return (
    <Router>
      <main>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/create-post' component={CreatePost} exact />
        <Route path='/edit-post/:id' component={EditPost} />
        <Route path='/show-post/:id' component={PostScreen} />
      </main>
    </Router>
  )
}

export default App
