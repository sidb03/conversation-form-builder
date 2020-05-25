import React from 'react';
import styled from 'styled-components';

const BlockContentText = styled.div`
    font-family: HelveticaNeue;
    font-size: 1.2em;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.23;
    letter-spacing: normal;
    text-align: left;
    color: rgb(242, 242, 242);

`;
const BlockContentContainer = styled.div`
    height: 35%;
    width: 100%;
    padding: 5px 20px 5px 20px;
    overflow: scroll;
    
`;

const BlockContent = ({ content }) => (
    <BlockContentContainer>
        <BlockContentText>
            {content}
        </BlockContentText>
    </BlockContentContainer>
);
export default BlockContent;