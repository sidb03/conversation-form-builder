const toggleEditmodal = (value, index, id, blockType) => ({
    type: "TOGGLE_DISPLAY_EDIT_MODAL",
    payload: {
        value,
        index,
        id,
        blockType
    }
})
module.exports = {
    toggleEditmodal
}