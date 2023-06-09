import styled from "styled-components";
import { PageProps } from "./styleTypes";
const SIDEBAR_WIDTH=450
export const InputContainer = styled.div`
    background-color: #131313;
    padding: 12px 16px;
    border-radius: 10px;
    width: 100%;
`;
export const InputFields = styled.input`
    font-family: "Inter";
    outline: none;
    border: none;
    color: #fff;
    font-size: 18px;
    width: 100%;
    background-color: inherit;
    margin: 4px 0;
`;

export const InputLabel = styled.label`
    display: block;
    color: #8f8f8f;
    font-size: 14px;
    margin: 4px 0;
`;

export const Button = styled.button`
    width: 100%;
    outline: none;
    border: none;
    font-family: "Inter";
    font-size: 16px;
    background-color: #2b09ff;
    color: #fff;
    border-radius: 10px;
    padding: 25px 0;
    transition: 200ms background-color ease;
    transition: 200ms border ease;
    font-weight: 500;
    &:focus {
        background-color: #573dfc;
    }
    &:hover {
        cursor: pointer;
        background-color: #3415ff;
    }

    &:active {
        background-color: #3a1cff;
    }
`;

export const Page = styled.div<PageProps>`
    /* background-color: #fff; */
    height: 100%;
    display: ${(props) => props.display};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
`;
export const ConversationSidebarStyle = styled.aside`
    border-right: 1px solid #545454;
    height: 100%;
    width: ${SIDEBAR_WIDTH}px;
    position: absolute;
    top: 0;
    left: 0;

    & header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #151515;
        height: 100px;
        padding: 0 24px;
        border: 1px solid #545454
        & h1{
            font-weight: 500;
        }
    }
`
export const ConversationPageStyle=styled.div`
    height: 100%;
    margin-left: ${SIDEBAR_WIDTH}px;
`