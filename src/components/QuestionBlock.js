import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import BlockContent from "./BlockContent"
import "./QuestionBlock.css"

const BlockHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    height: 45%;
`;
const BlockHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 96%;
    height: 100%;
`;
const BlockType = styled.div`
    font-family: HelveticaNeue;
    font-size: 1em;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    text-align: left;
    color: rgb(186, 184, 184);
    margin-left: 17px;
    width: 60%;    

`;
const StyledHeader = styled.div`
    margin-left: ${props => props.leftMargin};
    font-size: ${props => props.fontSize};
    cursor: "pointer"
`;

const HeaderRowIcon = ({ icon, color, leftMargin, fontSize, onIconClick, blockType }) => {
    return (
        <StyledHeader leftMargin={leftMargin} fontSize={fontSize} onClick={onIconClick} >
            <FontAwesomeIcon icon={icon} size="lg" color={blockType !== 'endConvoBlock' ? color : "rgb(152, 152, 152)" } cursor="pointer" />
        </StyledHeader>
    )
}
const BlockNumber = styled.div`
    width: 25px;
    height: 25px;
    box-sizing: initial;
    margin-left: 10px;
    background: rgb(186, 184, 184);
    color: rgb(67, 67, 67);
    text-align: center;
    border-radius: 50%;    

    line-height: 25px;
    box-sizing: content-box;  
`;

const VerticalDivider = styled.div`
    border-left: solid 1.5px rgb(150, 150, 150);
    height: 28.7px;
    margin-left: ${props => props.leftMargin};
`;
const BlockHeaderBottomBorder = styled.hr`
    width: 95%;
    color: rgb(67, 67, 67);
    margin-top: 0;
`;

const BlockContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    justify-content: space-evenly;
    width: 100%;
    height: 26%;
    min-height: 50px;
    margin-bottom: 5%;
`;
const BlockWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: ${props => props.type === "endConvoBlock" ? "repeating-linear-gradient(45deg,#5d5372,#5d5372 17px,rgb(66, 60, 85) 20px,rgb(66, 60, 85) 20px)"  : "rgb(93, 84, 114)"};
`;
const DummyBlock = styled.div``;

const MaxLimitContainer = styled.div`
    height: 20%;
    width: 100%;
    `;

const MaxLimitText = styled.div`
    font-family: HelveticaNeue;
    font-size: 0.9em
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    text-align: right;
    margin-right: 15px;
    color: rgb(186, 184, 184);
`;

const QuestionBlock = ({ index, id, content, type, limit, limitValue, onEditClick, onDeleteClick }) => (
    <BlockContainer>
        <Draggable draggableId={id} index={index} isDragDisabled={(type === "endConvoBlock")}>
            {provided => (
                <BlockWrapper
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    type={type}
                >
                    <BlockHeaderContainer >
                        <BlockHeaderWrapper  >
                            <DummyBlock {...provided.dragHandleProps}>
                                <HeaderRowIcon icon={faTh} blockType={type} size="lg" color="rgb(237, 237, 237)" leftMargin="28px" fontSize="0.8em">
                                </HeaderRowIcon>
                            </DummyBlock>
                            <BlockNumber>{index + 1}</BlockNumber>
                            <VerticalDivider leftMargin="10px" />
                            <BlockType>{type === "endConvoBlock" ? "End Converstion" : "Q/A Block"}</BlockType>
                            <HeaderRowIcon  icon={faPen} size="lg" color="rgb(237, 237, 237)" leftMargin="9%" fontSize="0.8em" onIconClick={onEditClick} />
                            <VerticalDivider leftMargin="10px" />
                            <HeaderRowIcon icon={faTimes} size="lg" color="#ff8080" leftMargin="10px" fontSize="1em" onIconClick={onDeleteClick} />
                        </BlockHeaderWrapper>
                        <BlockHeaderBottomBorder />
                    </BlockHeaderContainer>
                    <BlockContent content={content} />
                    <MaxLimitContainer>
                        <MaxLimitText>
                            {limit ? `Max Answer Limit: ${limitValue}` : ""}
                        </MaxLimitText>
                    </MaxLimitContainer>
                </BlockWrapper>
            )}
        </Draggable>
        
    </BlockContainer>
    
);
export default QuestionBlock;
