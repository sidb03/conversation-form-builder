import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from '../../components/Header';
import QuestionBlock from '../../components/QuestionBlock';
import EditBlock from '../EditBlock/EditBlock'
import { toggleEditmodal } from "../EditBlock/Actions"
import { deleteBlock } from "./Actions";

const FlowCanvasContainer = styled.div`
    display: flex;
    align-items: center;
    width: 58.75%;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
`;
const EmptyBlock = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    justify-content: space-evenly;
    width: 100%;
    height: 26%;
    min-height: 50px;
    margin-bottom: 5%;
`;
const EmptyBlockWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: #5d5372 3px dashed;
    ${'' /* background: repeating-linear-gradient(45deg,#5d5372,#5d5372 17px,rgb(66, 60, 85) 20px,rgb(66, 60, 85) 20px); */}
`;
const EmptyBlockText = styled.h2`
    color: #5d5372;
    font-family: HelveticaNeue;
    font-size: 1.6em;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.23;
    letter-spacing: normal;
    text-align: left;

`;
const FlowCanvasWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    height: 85%;
    border-radius: 7px;
    background-color: #1D182B;
    margin-left: 7%;
    padding-bottom: 20px;
`;
const BlockList = styled.div`
    height: 100%;
    overflow: scroll;
    margin-top: 20px;
    width: 90%;
`;
class FlowCanvas extends React.PureComponent {
    render() {
        const { columns, questionBlocks, blocks } = this.props;
        return (
            <FlowCanvasContainer>
                <FlowCanvasWrapper>
                    <Header title={columns.flowCanvas.title} />
                    <Droppable droppableId={columns.flowCanvas.id}>
                        {provided => (
                            
                            <BlockList
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {/* <TransitionGroup component={null}> */}
                                    {blocks.map((blockId, index) => (
                                        <QuestionBlock key={blockId} id={blockId} limit={questionBlocks[blockId].limit} limitValue={questionBlocks[blockId].limitValue} content={questionBlocks[blockId].content} index={index} type={questionBlocks[blockId].type} onDeleteClick={() => this.props.onDeleteClick(blockId)} onEditClick={() => { this.props.onEditClicked(blockId, questionBlocks[blockId].type) }} /> 
                                      
                                        ))}
                                {/* </TransitionGroup>     */}
                                {provided.placeholder}
                                {blocks.length == 0 ? <EmptyBlock>
                                    <EmptyBlockWrapper>
                                        <EmptyBlockText>
                                            Drag here to Add Blocks
                                        </EmptyBlockText>
                                    </EmptyBlockWrapper>
                                </EmptyBlock> : <div/>}
                            </BlockList>
                            
                        )}
                    </Droppable>
                </FlowCanvasWrapper>
                <EditBlock />
            </FlowCanvasContainer>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEditClicked: (id, blockType) => {
            dispatch(toggleEditmodal(true, null, id, blockType));
        },
        onDeleteClick: (id) => {
            dispatch(deleteBlock(id));
        }
    }
}

const mapSateToProps = (state) => {
    return {
        ...state.FlowCanvas,
        ...state.App
    };
};

export default connect(mapSateToProps, mapDispatchToProps)(FlowCanvas); 