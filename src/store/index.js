import {configureStore} from '@reduxjs/toolkit';
import todoSlice from './todoSlice';


export default configureStore({
   reducer:{
      allTasks: todoSlice,
   }
})