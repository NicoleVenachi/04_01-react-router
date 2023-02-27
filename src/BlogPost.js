import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { blogdata } from './blogdata';


function BlogPost(props) {

  //hook navigate
  const navigate = useNavigate()
  //recibo slug
  const {slug} = useParams();

  //filtro su contenido de persisitencia
  const blogpost = blogdata.find(post => post.slug === slug)

  //funcion arbitraria
  const returnToBlog = () => {
    //navigate('/blog')
    navigate(-1)
  }

  return (
    <div>
      <h2> {blogpost.title} </h2>

      {/* evento */}
      <button onClick={returnToBlog}> Volver al blog </button>

      <p> {blogpost.author} </p>
      <p> {blogpost.content} </p>
    </div>
  )
}

export {BlogPost}