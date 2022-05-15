import React, { useState } from 'react';


function Card(props) {
    const [selSize, setSelSize] = useState('100%');
    const [isFlipped, setIsFlipped] = useState(false);

    const {
        img,
        title,
        copy,
        github,
        site,
        alt
    } = props;

    const handleHover = (e) => {
        setSelSize('150%');
    };

    const handleLeave = (e) => {
        setSelSize('100%');
    }

    const handleFlip = (e) => {
        setIsFlipped(true)
    }

    const handleBackFlip = (e) => {
        setIsFlipped(false)
    }

    return (
        <div className={`card_container ${isFlipped ? 'is-flipped' : ''}`} style={{backgroundImage: `url(${img})`}}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}> 
            <div className='card_face card_face_front' onClick={handleFlip}>
                <h3 className="title">
                    {title}
                </h3>
            </div>
            <div className="card_face card_face_back" onClick={handleBackFlip}>
                <p className="copy">
                    {copy}
                </p>
                <button>
                    {github}
                </button>
                <button>
                    {site}
                </button>
                <button onClick={handleBackFlip}>
                    back
                </button>
            </div>
        </div>
    )
}

export default Card;