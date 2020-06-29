import {createStore, combineReducers} from 'redux';
import { v4 as uuidv4 } from 'uuid';

// ADD_EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id : uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE
const removeExpense = ({id = undefined} = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense : {
        id
    }
});

// EDIT_EXPENSE
const editExpense = (id = undefined,update = {}) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
});

// SET_TEXT_FILTER
const setTextFilter = (text='') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate: startDate
});

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});





//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // return state.concat(action.expense);
            return [...state,action.expense];
        
        case 'REMOVE_EXPENSE':
            if(!!action.expense.id){
                return state.filter(({id}) => id !== action.expense.id);
            } else
            return state;    
        
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.update
                    };
                }            
            })
        
        default:
            return state;
    }
};

//Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};


const filtersReducer = (state = filtersReducerDefaultState,action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                'text': action.text
            };
        
        case 'SORT_BY_DATE':
            return {
                ...state,
                'sortBy': 'date'
            };
        
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                'sortBy': 'amount'
            };

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };

        default:
            return state;
    }
}

//Create Visible Filters
const getVisibleFilters = (expenses,{startDate,endDate,text,sortBy}) => {
    return expenses.filter((expense) => {
        
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        // const textMatch = text === '' || expense.description.search(new RegExp(text, "i")) >= 0;
        const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase());
        //const textMatch = true;
        //console.log(startDateMatch,endDateMatch);
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt?1:-1;
        }
        else if(sortBy === 'amount'){
            return a.amount < b.amount? 1: -1;
        }
    });
};


// Store creation

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

// console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleFilters(state.expenses,state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description:'Rent', amount: 54500, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount: 300, createdAt: -1000}));



// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(removeExpense({}));

// store.dispatch(editExpense(expenseTwo.expense.id,{amount: 600}));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(521));
//store.dispatch(setEndDate(1001));
//store.dispatch(setTextFilter('fee'));

// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

//console.log(uuidv4());
store.dispatch(sortByAmount())

const demoState = {
    expenses : [
        {
            id: 'fhcnzkxcnlxzknc',
            description: 'January Rent',
            note: 'This was the final payment for that address',
            amount: 54500,
            createdAt: 0
        }],
        filters: {
            text: 'rent',
            sortBy: 'date', //date or amount
            startDate: undefined,
            endDate: undefined
        }
};






// console.log('redux-expensify is running');