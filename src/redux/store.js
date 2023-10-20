import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/reducer";

let store;
try {
    store = configureStore({
        reducer: {
            counter: counterReducer
        }
    });
    console.log('Store configured successfully');
} catch (error) {
    console.log('Store configuration error: ' + error);
    throw error;
}
export default store;