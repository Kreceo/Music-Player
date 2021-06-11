import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 200;
`

function Button() {
    return (
        <StyledWrapper>
            <p>This is wrapped in a styled component :)</p>
        </StyledWrapper>
    )
}

export default Button;