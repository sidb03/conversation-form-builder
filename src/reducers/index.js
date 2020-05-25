import { combineReducers } from 'redux';
import FlowCanvasReducer from "../containers/FlowCanvas/Reducer";
import NewBlockPanelReducer from "../containers/NewBlockPanel/Reducer";
import AppReducer from "../containers/App/Reducer"
import EditBlockReducer from "../containers/EditBlock/Reducer";

const rootReducer = combineReducers({
    FlowCanvas: FlowCanvasReducer,
    NewBlockPanel :NewBlockPanelReducer,
    App: AppReducer,
    EditBlock: EditBlockReducer,
    state: () => ({})
});

export default rootReducer;
