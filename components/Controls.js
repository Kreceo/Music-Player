import { useState } from 'react';
import styled from 'styled-components';
import { ButtonWrapper } from './Buttons';

const ControlWrapperClass = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    width: 100%; 
`

export function ControlsWrapper () {
    const [playing, setPlaying] = useState(false);
    const [count, setCount] = useState(0);

    return (
        <ControlWrapperClass>
            <ButtonWrapper clickControl={() => setCount(count + 1)} type="fas fa-step-backward" size="Small" title="Previous"/> 
            <p>{count}</p>
            <ButtonWrapper clickControl={() => setCount(count + 1)} type="fas fa-backward" size="Medium" title="Start"/> 
            <ButtonWrapper clickControl={() => setPlaying(playing == false) ? true : false} type="fas fa-play" size="Large" title={playing == false ? 'Play' : 'Paused'}/> 
            <ButtonWrapper clickControl={() => setCount(count + 1)} type="fas fa-forward" size="Medium" title="End"/> 
            <ButtonWrapper clickControl={() => setCount(count + 1)} type="fas fa-step-forward" size="Small" title="Next"/> 
        </ControlWrapperClass>
    )
}
