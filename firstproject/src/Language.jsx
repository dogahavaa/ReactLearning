import React from 'react'

function Language({ language }) {
    const { id, title, description, value, image } = language;
    return (
        <div className='language-container'>
            <div>
                <img src={image} width={200} height={300}></img>
                <h3 className='language-title'>{title}</h3>
                <h5 className='description'>{description}</h5>
                <progress className='progress-bar' value={value} max={100} />
            </div>
        </div>
    )
}

export default Language