import * as redux from 'redux';
import counter from './counter';
import ui from './ui';

const reducers = redux.combineReducers({
    counter, ui
});

export default reducers;
