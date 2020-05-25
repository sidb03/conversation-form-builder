import { produce, original } from "immer";

const initState = {
    displayEditModal: false,
    editBlock: {
        id: null,
        index: null,
        blockType: 'qna'
    }
};

const EditBlockReducer = produce((draft, action) => {
    switch (action.type) {
    case "TOGGLE_DISPLAY_EDIT_MODAL":
        const { value, index, id, blockType } = action.payload;
        draft.displayEditModal = value;
        draft.editBlock.index = index;
        draft.editBlock.id = id;
        draft.editBlock.blockType = blockType || 'qna';
        break;
    default:
        break;
    }
}, initState);

export default EditBlockReducer;
