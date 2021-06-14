import styled from 'styled-components';
import { MusicPlayer } from '../components/Musicplayer';

const Background = styled.div`
  :after {
    background: no-repeat 25vw 40vh / 30vw url("https://assets.codepen.io/518555/blobSolid.svg");
    content: '';
    height: 100%;
    left: 0;
    opacity: 0.8;
    position: absolute;
    top: 0;
    width: 100%; 
  }

  & {
    align-items: center;
    background-color: #fff8e7;
    color: #545454;
    display: flex;
    height: 100vh;
    justify-content: center;
    position: relative;
  }

  :before {
    background: no-repeat 23vw 30vh   
    url("https://assets.codepen.io/518555/sparkles1.svg"), no-repeat right 25vw bottom 30vh 
    url("https://assets.codepen.io/518555/sparkles4.svg"), no-repeat 40vw 30vh / 35vw 
    url("https://assets.codepen.io/518555/blobStripe.svg");
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%; 
  } 
`

export default function App () {
  return (
    <>
      <Background>
        <MusicPlayer />
      </Background>
    </>
  )
}