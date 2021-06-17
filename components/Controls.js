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

    const [shuffle, setShuffle] = useState(false);
    const [previous, setPrevious] = useState(false);
    const [next, setNext] = useState(false);
    const [save, setSave] = useState(false);
    const [playing, setPlaying] = useState(false)

    return (
        <ControlWrapperClass>
            <ButtonWrapper 
                clickControl={() => setShuffle(shuffle == true)} 
                type="fas fa-random" 
                size="Small" 
                title="Shuffle"
            /> 
            <ButtonWrapper 
                clickControl={() => setPrevious(previous == true)} 
                type="fas fa-step-backward" 
                size="Medium" 
                title="Previous"
            /> 
            <ButtonWrapper 
                clickControl={() => setPlaying(playing == false) ? true : false} 
                type="fas fa-play" 
                size="Large" 
                title={playing == false ? 'play' : 'pause'}
            />
            <ButtonWrapper 
                clickControl={() => setNext(next == true)} 
                type="fas fa-step-forward" 
                size="Medium" 
                title="Next"
            /> 
            <ButtonWrapper 
                clickControl={() => setSave(save == true) ? false : true} 
                type="fas fa-heart" 
                size="Small" 
                title={save == true ? 'Saved' : 'Save'}
            />
        </ControlWrapperClass>
    )
}
