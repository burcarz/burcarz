import React, { FC } from 'react';
import styled from 'styled-components';

import Widget from '../components/Widget';


interface props {
    className?: string

}

const HomeComp:FC <props> = ({ className }) => {
    return(
        <section className={className}>
            <Widget />
        </section>
    );
};

const Home = styled(HomeComp)`



`

export default Home;