import { combineReducers } from '@reduxjs/toolkit';

import ItemSliceFinal from './Slices/Item'
import UserSliceFinal from './Slices/User'

const rootuser = combineReducers({
    User : UserSliceFinal,
    Item : ItemSliceFinal
})

export default rootuser;
