import React from 'react'
import { Link } from "react-router-dom";
const PostBox = (props) => {
  return (

    <div className="postitmes">
      <div className="postcard">
        <h5>By : <span>{props.username}</span></h5>
        <Link onClick={props.PostDetial}><h4>{props.title}</h4></Link>
        <p>{props.disc}</p>
        <Link onClick={props.PostDetial}><span className='btntext'>Read More</span></Link>
      </div>
    </div>

  )
}

export default PostBox