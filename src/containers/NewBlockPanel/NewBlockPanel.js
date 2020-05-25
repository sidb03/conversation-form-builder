import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import Header from '../../components/Header';
import NewBlock from '../../components/NewBlock';


const NewBlockPanelContainer = styled.div`
    display: flex;
    align-items: center;
    width: 41.25%;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
`;

const NewBlockPanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 50%;
    border-radius: 7px;
    border: solid 1px #1d182b;
    background-color: #1d182b;
    margin-left: 25%;
    
    padding-bottom: 20px;

`;
const BlockList = styled.div`
    height: 100%;
    width: 90%
    overflow: scroll;
`;
class NewBlockPanel extends React.PureComponent {
    render() {
        const { blockTypes, columns, blocks } = this.props;
        return (
            <NewBlockPanelContainer>
                <NewBlockPanelWrapper>
                    <Header title={columns.addBlockPanel.title} />
                    <Droppable droppableId={columns.addBlockPanel.id} isDropDisabled={true}>
                        {provided => (
                            <BlockList
                                {...provided.droppableProps}
                                ref={provided.innerRef} >
                                {blocks.map((blockId, index) => <NewBlock id={blockId} index={index} title={blockTypes[blockId].title} type={blockTypes[blockId].type} />)}
                            </BlockList>
                        )}


                    </Droppable>
                </NewBlockPanelWrapper>
            </NewBlockPanelContainer>
        )
    }
};

const mapSateToProps = (state) => {
    return {
        ...state.NewBlockPanel,
        ...state.App
    };
};


export default connect(mapSateToProps)(NewBlockPanel);
