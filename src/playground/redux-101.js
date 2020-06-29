import {createStore} from 'redux';

//Action generator

const incrementCount = ({incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy: incrementBy
    });


const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ({count=0} = {}) => ({
    type: 'SET',
    count: count
});

const resetCount = () => ({
    type: 'RESET'
})
    
const countReducer = (state = {count: 0},action) => {
    
    switch (action.type){
        case 'INCREMENT':
            return {
                count : state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count : state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count : 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
                return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// store.dispatch({
//     type: 'INCREMENT'
// });

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 8
// });


// store.dispatch({
//     type: 'RESET'
// });

// store.dispatch({
//     type: 'SET',
//     count: 50
// })

store.dispatch(incrementCount({incrementBy:7}));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:2}));
store.dispatch(resetCount());
store.dispatch(setCount({count: 15}));