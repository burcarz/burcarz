import React, { FC } from 'react';
import styled from 'styled-components';

interface props {
    className?: string,
}

const WidgetComp:FC <props> = ({ className }) => {
    return(
        <section className={className}>
            <div className="parent">
                <div className="container">
                </div>
            </div>
        </section>
    );
}

const Widget = styled(WidgetComp)`

display: none;

`

export default Widget;