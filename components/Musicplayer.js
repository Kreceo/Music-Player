import { ControlsWrapper } from './Controls';
import {ProgressBarWrapper } from './ProgressBar';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

const MusicPlayerWrapperClass = styled.div`
    align-items: center;
    background: #fffaee;
    border: 1px solid #fff3eb;
    border-radius: 24px;
    color: #565656;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 24px;
    max-width: calc(100% - 24px * 2);
    padding: 24px;
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 450px;

    &:before {
        border-radius: 24px;
        box-shadow: 0 2px 2px rgba(255, 107, 0, 0.25), 0 4px 4px rgba(255, 107, 0, 0.2), 0 8px 8px rgba(255, 107, 0, 0.15), 0 16px 16px rgba(255, 107, 0, 0.1), 0 24px 24px rgba(255, 107, 0, 0.05);
        content: '';
        height: 100%;
        left: 0;
        mix-blend-mode: multiply;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }
`

const MusicContainer = () => {
    return (
    <MusicPlayerWrapperClass>
        <ControlsWrapper />
        <ProgressBarWrapper start="0:30" end="03:53"/>
    </MusicPlayerWrapperClass> 
    )
}

export function MusicPlayer() {
    return (
        <MusicContainer />
    )
}