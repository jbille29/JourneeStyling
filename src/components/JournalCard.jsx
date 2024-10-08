import React from 'react'
import './Card.css'

const JournalCard = () => {
  return (
    <div className='card-container'>
        <h2>Journal #1</h2>
        <div className='card-stats'>
            <p className='card-last-updated'><strong>Last updated: </strong> 08/28/2024</p>
            <p className='card-entry-num'><strong>Entries: </strong> 11</p>
        </div>
        <div className='card-entry-preview'>
            <p className='card-entry-title'>Entry #11</p>
            <p className="card-entry-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem quis ipsum necessitatibus et maxime quisquam aspernatur ipsam porro nihil! Architecto ad quibusdam excepturi quidem culpa et non velit placeat distinctio quis nobis ea odio voluptatibus cumque hic iure minus, explicabo dolores nemo necessitatibus similique, molestiae ratione. Nisi, quod voluptas.</p>
        </div>
    </div>
  )
}

export default JournalCard