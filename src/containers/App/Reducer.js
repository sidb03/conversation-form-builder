import { produce, original } from "immer";

const initState = {
    columns: {
        flowCanvas: {
            id: 'flowCanvas',
            title: 'All Blocks'
        },
        addBlockPanel: {
            id: 'addBlockPanel',
            title: 'Add New Blocks'
        }
    }
};

const AppReducer = produce((draft, action) => {
    switch (action.type) {
        case "":
            break;
        default:
            break;
    }
}, initState);

export default AppReducer;
