import React from 'react'

export const Card = ({titleJob , name ,image , description }) => {
    // const titleJob = props.titleJob
    // const name = props.name

    // const {titleJob , name} = props

    return (
        <div className='card' >
        <div className="card-image">
            <figure className="image is-1by1" >
            <img  src={image} />
            </figure>
        </div>
        <div className="card-content">
        <div className="media-content">
        <p className='title is-4'>  {name}  </p>
        <p className='subtitle is-6'> {titleJob}  </p>
        <p className='subtitle is-6'> {description}  </p>
        </div>
        </div>
           
        </div>
    )
}
