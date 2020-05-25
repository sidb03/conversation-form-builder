import React from 'react';
import styled from 'styled-components';
import { DragDropContext } from "react-beautiful-dnd"
import { connect } from "react-redux";
import cogoToast from 'cogo-toast';
import NewBlockpanel from "../NewBlockPanel/NewBlockPanel";
import FlowCanvas from "../FlowCanvas/FlowCanvas";
import {updateBlockOrder} from "../FlowCanvas/Actions";
import {toggleEditmodal} from  "../EditBlock/Actions";

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    ${'' /* max-width: 1500px; */}
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
    background-color: #272237;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
`;

class App extends React.PureComponent {
    onDragEnd = (result) => {

        const { source, destination, draggableId } = result;
        
        if (!destination ||
            source.droppableId === destination.droppableId && source.index === destination.index
        )
            return;

        if (source.droppableId === 'flowCanvas') {
            if (destination.index == (this.props.blocks).length - 1 && this.props.questionBlocks[this.props.blocks[this.props.blocks.length - 1]].type == 'endConvoBlock') {
                cogoToast.warn("Oops! Can't insert after end block", { position: 'top-right'});
                return;
            }
                
            else
                this.props.updateBlockOrder(source, destination, draggableId);
        }
        else if (source.droppableId === 'addBlockPanel') {
            if (draggableId === 'endConvoBlock' && destination.index !== (this.props.blocks).length) {
                // alert("Can be inserted only at end!");
                cogoToast.warn("Oops! End Convo block can only be inserted at the end", { position: 'top-right' });
                return ;
            }
            else if (destination.index == (this.props.blocks).length && (this.props.blocks).length !==0 &&  this.props.questionBlocks[this.props.blocks[this.props.blocks.length - 1]].type == 'endConvoBlock') {
                cogoToast.warn("Oops! Can't insert after end block", { position: 'top-right'});
                return;
            }
            else {
                this.props.createNewBlock(destination.index, draggableId)
            }
        }
    }

    render() {
        return (
            <Container>
                <Wrapper>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <NewBlockpanel />
                        <FlowCanvas />
                    </DragDropContext>
                </Wrapper>
            </Container>
        )
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateBlockOrder: (source, destination, draggableId) => {
            dispatch(updateBlockOrder(source, destination, draggableId));
        },
        createNewBlock: (destinationIndex, blockType) => {
            dispatch(toggleEditmodal(true, destinationIndex, null, blockType));
        }
    }
}

const mapSateToProps = (state) => {
    return {
        ...state.FlowCanvas
    };
};

export default connect(mapSateToProps, mapDispatchToProps)(App);
