import { produce } from 'immer';

const initState = {
    questionBlocks: {
        dummyID1: {
            id: 'dummyID1',
            content: 'Hey! What is your name?',
            limit: false,
            limitValue: 0,
            type:'qna'
        },
        dummyID2: {
            id: 'dummyID2',
            content: 'What is your height?',
            limit: true,
            limitValue: 300,
            type: 'qna'
        },
        dummyID3: {
            id: 'dummyID3',
            content: 'Thanks for your responses!',
            limit: false,
            limitValue: 0,
            type: 'endConvoBlock'
        }
    },
    // blocks: ['dummyID1', 'dummyID2', 'dummyID3']
    blocks: []
};

const FlowCanvasReducer = produce((draft, action) => {
    switch (action.type) {
    case 'UPDATE_BLOCK_ORDER':
        var { source, destination, draggableId } = action.payload;
        draft.blocks.splice(source.index, 1);
        draft.blocks.splice(destination.index, 0, draggableId);
        break;
    case 'UPDATE_BLOCK':
        var { index, content, limit, limitValue, type, id } = action.payload;
        if (!id) {
            id = 'dummyID' + Math.floor((Math.random() * 1000) + 1);;
            draft.blocks.splice(index, 0, id);
        }
        draft.questionBlocks[id] = {
            id,
            content,
            limit,
            limitValue,
            type
        };
        break;
    case 'DELETE_BLOCK':
        var { id } = action.payload;
        draft.blocks.splice(draft.blocks.findIndex(blockId => blockId === id), 1);
        delete draft.questionBlocks[id];
        break;
    default:
        break;
    }
}, initState);

export default FlowCanvasReducer;
