import {createStore, combineReducers} from 'redux';
import Uuid from 'uuid';

const expensesReducerDefault = [];
const expensesReducer = (state=expensesReducerDefault,action) => {
    switch(action.type){
        case 'value':
            return state;
        default:
            return state;
    }
}

const filtersReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state=filtersReducerDefault,action) => {
    switch (action.type) {
        case 'value':
            return state;      
            
    
        default:
            return state;
    }
}

const store = createStore(combineReducers(
    {
        expenses:expensesReducer,
        filters: filtersReducer
    }
    ));

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})