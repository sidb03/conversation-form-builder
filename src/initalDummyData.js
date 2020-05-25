const initialData = {
    questionBlocks: {
        'dummyID1' : {id: 'dummyID1', content: 'Hey! How art thou?', limit: false, limitValue: 0},
        'dummyID2': { id: 'dummyID2', content: 'Hey! How art thou?', limit: true, limitValue: 300 },
        'dummyID3': { id: 'dummyID3', content: 'Hey! How art thou?', limit: false, limitValue: 0 },
    },
    
    blockTypes: {
        'qnaBlock' : {title: 'Q/A Block', },
        'endConvoBlock' : {title: 'End Conversation Block'}
    },
    addBlockPanel: {
        blocks: ['qnaBlock', 'endConvoBlock'],
        title: 'Add New Blocks'
    },
    columns: {
        flowCanvas: {
            id: 'flowCanvas',
            blocks: ['dummyID3', 'dummyID2', 'dummyID3'],
            title: 'Conversation Blocks All'
        },
        addBlockPanel: {
            id: 'addBlockPanel',
            blocks: ['qnaBlock', 'endConvoBlock'],
            title: 'Add New Blocks'
        },
    }
};
export default initialData;