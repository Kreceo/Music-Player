import styled from 'styled-components';

const Buttons = styled.button`
    background-color: transparent;
    border: none;
    align-items: center; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    
    & .Small {
        background-color: transparent;
        color: #919191;
        padding: 16px;
        border-radius: 100%;
        margin-bottom: 4px;
        margin-top: auto;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
        }
    }
    
    & .Medium {
        background: linear-gradient(to bottom left, #fff8e7, #ffe1cc);
        color: #838383; 
        padding: 16px; 
        border-radius: 100%;
        margin-bottom: 4px;
        margin-top: auto;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
        }
    }

    & .Large {
        background: linear-gradient(to bottom left, #ffffff, #fff8e7);
        border: 1px solid #fff3eb;
        box-shadow: -1px 1px 1px rgba(255, 195, 153, 0.25), 1px -1px 1px rgba(255, 255, 255, 0.25), -2px 2px 2px rgba(255, 195, 153, 0.2), 2px -2px 2px rgba(255, 255, 255, 0.2), -4px 4px 4px rgba(255, 195, 153, 0.15), 4px -4px 4px rgba(255, 255, 255, 0.15), -8px 8px 8px rgba(255, 195, 153, 0.1), 8px -8px 8px rgba(255, 255, 255, 0.1), -16px 16px 16px rgba(255, 195, 153, 0.05), 16px -16px 16px rgba(255, 255, 255, 0.05);
        color: #f26600;
        margin-bottom: 8px;
        padding: 24px;
        border-radius: 100%;
        transition: 0.2s;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
        }
    }

    & span {
        margin-top: auto;
    }
`

export const ButtonWrapper = ({type, size, title}) => {
    return (
       <Buttons>
            <div className={size}>
                <i className={type} />
            </div>
            <span className="button-text milli">{title}</span> 
        </Buttons>
    )
}