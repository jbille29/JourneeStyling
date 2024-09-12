import React from 'react'
import './Card.css'

const EntryCard = () => {
  return (
    <div className='card-container'>
        <h2>Entry #1</h2>
        <div className='card-stats'>
            <p className='card-last-updated'><strong>Entered: </strong> 08/28/2024</p>
            <p className='card-entry-num'><strong>Word Count: </strong> 11</p>
        </div>
        <div className='card-entry-preview'>
            <p className="card-entry-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem quis ipsum necessitatibus et maxime quisquam aspernatur ipsam porro nihil! Architecto ad quibusdam excepturi quidem culpa et non velit placeat distinctio quis nobis ea odio voluptatibus cumque hic iure minus, explicabo dolores nemo necessitatibus similique, molestiae ratione. Nisi, quod voluptas.</p>
        </div>
    </div>
  )
}

export default EntryCard