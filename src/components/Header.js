import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    width: 100%;
    ${'' /* height: 12%; */}
    display: flex;
    justify-content: center;
    flex-direction: column;
    ${'' /* align-items: left; */}
`;
const HorizontalDivider = styled.div`
    width: 93%;
    margin-top: 8px;
    align-self: center;
    height: 0;
    border: solid 1px rgb(112, 112, 112);
`;
const Title = styled.h1`
    color: rgb(201, 201, 201);
    font-size: 1.5em;
    margin-left: 6%;
    margin-top: 2%;
`;

const Header = ({ title }) => {
    return (
        <HeaderContainer>
            <Title>
                {title}
            </Title>
            <HorizontalDivider />
        </HeaderContainer>
    )
};

export default Header;