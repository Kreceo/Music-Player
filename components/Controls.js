import styled from 'styled-components';
import { ButtonWrapper } from './Buttons';

const ControlWrapperClass = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    width: 100%; 
`

export function ControlsWrapper() {
    return (
        <ControlWrapperClass>
            <ButtonWrapper type="fas fa-step-backward" size="Small" title="Back"/> 
            <ButtonWrapper type="fas fa-backward" size="Medium" title="Rewind"/> 
            <ButtonWrapper type="fas fa-play" size="Large" title="Play"/> 
            <ButtonWrapper type="fas fa-forward" size="Medium" title="Forward"/> 
            <ButtonWrapper type="fas fa-step-forward" size="Small" title="Skip"/> 
        </ControlWrapperClass>
    )
}