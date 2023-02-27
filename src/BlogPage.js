import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import {blogdata} from './blogdata.js'

function BlogPage() {
  return (
    <div>
      <h1> BlogPage </h1>
      
        {/* lista por publicaciones
         por cada una renderizo algo, para ir al post */}

        <Outlet />

        <ul>
          {
            blogdata.map(post => (
              <BlogLink 
                key={post.slug}
                post = {post} 
              />
            ))
          }
        </ul>
        

    </div>
  )
}

function BlogLink({post}) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}> {post.title} </Link>
    </li>
  )
}

export {BlogPage}