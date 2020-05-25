import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { Draggable } from 'react-beautiful-dnd';

const BlockContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 80px;
    height: 35%;
    ${'' /* height: 114px; */}
    font-family: 'Open Sans', sans-serif;
    margin-top: 10%;
`;

const BlockWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    
    height: 100%
    border-radius: 20px;
    background: ${props => props.type == 'endConvoBlock' ? "repeating-linear-gradient(45deg,#423c55,#423c55 17px,rgb(93, 83, 114) 20px,rgb(93, 83, 114) 20px);" : "rgb(66, 60, 85)"};
`;
const BlockGridIcon = styled.i`

    margin-left: 25px;
`;
const BlockTitle = styled.h2`
     -webkit-text-stroke: 1px rgb(112, 112, 112);
  font-family: HelveticaNeue;
  font-size: 1.5em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: rgb(255, 255, 255);
  margin-left: 20px;
`;

class NewBlock extends React.PureComponent {
    render() {
        const { id, index, title, type } = this.props;
        return (
            <BlockContainer>
                <Draggable draggableId={id} index={index}>
                    {provided => (
                        <BlockWrapper   
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            type={type}
                        >
                            <BlockGridIcon>
                                <FontAwesomeIcon icon={faTh} size="lg" color="rgb(149, 149, 149)" />
                            </BlockGridIcon>
                            <BlockTitle>
                                {title}
                            </BlockTitle>
                        </BlockWrapper>
                    )}
                </Draggable>
            </BlockContainer>
        )
    }
}

export default NewBlock;
