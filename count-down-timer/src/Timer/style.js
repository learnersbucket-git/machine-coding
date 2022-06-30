import Styled from "styled-components";

export const Wrapper = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TimeTextWrapper = Styled.p`
    display:flex;
    flex-wrap: wrap;
`;

export const TimeText = Styled.span`
    font-size: ${(props) => props.fontSize || "2em"};
    flex: 0 100%;
`;
