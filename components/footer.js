import styled from 'styled-components';

const FooterClass = styled.footer`
  position: absolute;
  bottom: 2%;
  width: 100%;
  text-align: center;
  left: 0;
  color: #919191;
`

function Footer() {
  return (
     <>
      <FooterClass>
        Copyright&copy; Darrell Lane
      </FooterClass>
     </>
  )
}

export default Footer;
