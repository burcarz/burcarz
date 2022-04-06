import React, { useState } from 'react';
import Card from '../Card';

function Gallery() {

    const [currentCard, setCurrentCard] = useState();

    let [cards] = useState([
    {
        title: "Critique Code",
        copy: "Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Yeah, but John",
        github: "link to source code",
        site: "link to deployed app",
        img: "critique"
    },
    {
        title: "Slay the Market",
        copy: "Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Yeah, but John",
        github: "link to source code",
        site: "link to deployed site",
        img: "market"
    },
    {
        title: "Seeder",
        copy: "Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Yeah, but John",
        github: "link to source code",
        site: "link to deployed site",
        img: "faker"
    },
    {
        title: "The 101 Percent",
        copy: "Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Yeah, but John",
        github: "link to source code",
        site: "link to deployed site",
        img: "wallstreet"
    }]);

    const currentCards = cards;

    console.log(currentCards[0].img)

    return (
        <section className="gallery">
            {currentCards.map((card) => {
                <Card 
                title={card.title}
                copy={card.copy}
                github={card.github}
                site={card.site}
                img={card.img}
                />
            })}
        </section>
    )
}

export default Gallery;