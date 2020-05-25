import { produce, original } from "immer";

const initState = {
    blockTypes: {
        'qnaBlock': { title: 'Q/A Block', type:'qnaBlock' },
        'endConvoBlock': { title: 'End Conversation Block', type:'endConvoBlock'}
    },
    blocks: ['qnaBlock', 'endConvoBlock']
};

const NewBlockPanelReducer = produce((draft, action) => {
    switch (action.type) {
        case "":
            break;
        default:
            break;
    }
}, initState);

export default NewBlockPanelReducer;
