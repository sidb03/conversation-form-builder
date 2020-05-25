const deleteBlock = (id) => ({
    type: "DELETE_BLOCK",
    payload: {
        id
    }
})
const updateBlockOrder = (source, destination, draggableId) => ({
    type: "UPDATE_BLOCK_ORDER",
    payload: {
        source, destination, draggableId
    }
})
const updateBlock = (content, limit, limitValue, index, id, type) => ({
    type: "UPDATE_BLOCK",
    payload: {
        index,
        id,
        content,
        limit,
        limitValue,
        type
    }
})
module.exports = {
    deleteBlock,
    updateBlockOrder,
    updateBlock
}