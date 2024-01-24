import { produce } from 'immer';

import { REGISTER } from './constants';

export const initialState = {
    userdata: {}
};

export const storedKey = ['userdata'];

const registerReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case REGISTER:
                draft.userdata = action.userdata;
                break;
        }
    });

export default registerReducer;