import {Component} from 'react'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props
    return (
      <ul className="blog-list-container">
        {blogsList.map(eachItem => (
          <BlogItem key={eachItem.id} blogDetails={eachItem} />
        ))}
      </ul>
    )
  }
}

export default BlogList
