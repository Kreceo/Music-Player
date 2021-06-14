import styled from 'styled-components';

const ProgressWrapperClass = styled.div`
    align-self: stretch;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & .progressBarWrapper {
        align-self: stretch;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;

        & .progress-bar {
            background-color: transparent;
            border-radius: 12px;
            box-shadow: inset -1px 1px 1px rgba(255, 195, 153, 0.25),
            inset 1px -1px 1px rgba(255, 255, 255, 0.25), inset -2px 2px 2px rgba(255, 195, 153, 0.2),
            inset 2px -2px 2px rgba(255, 255, 255, 0.2),
            inset -4px 4px 4px rgba(255, 195, 153, 0.15),
            inset 4px -4px 4px rgba(255, 255, 255, 0.15),
            inset -8px 8px 8px rgba(255, 195, 153, 0.1),
            inset 8px -8px 8px rgba(255, 255, 255, 0.1),
            inset -16px 16px 16px rgba(255, 195, 153, 0.05),
            inset 16px -16px 16px rgba(255, 255, 255, 0.05);
            height: 12px;
            margin-bottom: 8px;
            margin-top: 24px;
            position: relative;
            width: 100%;
            cursor: pointer;

            & .currentPosition {
                background: linear-gradient(to right, #fdd25f, #ff6b00);
                border-radius: 12px;
                box-shadow: none;
                height: 12px;
                width: 20%;
            }
        }

        & .milli {
            font-size: 13px;
            line-height: 1.23076923;
            font-weight: 400;
        }
    }
`

export const ProgressBarWrapper = ({start, end}) => {
    return (
    <ProgressWrapperClass>
        <div className="progressBarWrapper">
            <div className="progress-bar">
                <div className="currentPosition"></div>
            </div>
            <div className="progress-time-current milli">{start}</div>
            <div className="progress-time-total milli">{end}</div>
        </div> 
    </ProgressWrapperClass>
    )
}