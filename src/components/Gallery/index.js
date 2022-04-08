import React from 'react';
import Card from '../Card';

import critique from '../../assets/img/critique.jpg'
import wallstreet from '../../assets/img/wallstreet.png'
import faker from '../../assets/img/faker.jpg'
import market from '../../assets/img/market.jpg'

function Gallery() {
    const url = "../../assets/img/";

    const projects = [
    {
        title: "Critique Code",
        copy: "Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Yeah, but John",
        github: "link to source code",
        site: "link to deployed app",
        img: critique
    },
    {
        title: "Slay the Market",
        copy: "Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Yeah, but John",
        github: "link to source code",
        site: "link to deployed site",
        img: market
    },
    {
        title: "Seeder",
        copy: "Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Yeah, but John",
        github: "link to source code",
        site: "link to deployed site",
        img: faker
    },
    {
        title: "The 101 Percent",
        copy: "Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Yeah, but John",
        github: "link to source code",
        site: "link to deployed site",
        img: wallstreet
    }];

    return (
        <div>
        <h4 className="side_text">Some <br /> of  <br /> my <br /> Projects.</h4>
        <section className="gallery">
            {projects.map((card) => (
                <Card 
                title={card.title}
                copy={card.copy}
                github={card.github}
                site={card.site}
                img={card.img}
                alt={card.title}
                key={card.title}
                />
            ))}
        </section>
        </div>
    )
}

export default Gallery;