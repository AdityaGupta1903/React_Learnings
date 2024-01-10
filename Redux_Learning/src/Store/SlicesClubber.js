import { combineReducers } from '@reduxjs/toolkit';
import ItemSliceFinal from './Slices/Item'
import UserSliceFinal from './Slices/User'

const SlicesClubber = combineReducers({
    User : UserSliceFinal,
    Item : ItemSliceFinal
})

export default SlicesClubber;
