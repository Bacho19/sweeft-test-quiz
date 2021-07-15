import {
    ADD_SCORE,
    CLEAR_SCORE,
    CLEAR_SELECT_ANSWER,
    FETCH_QUESTIONS,
    SELECT_ANSWER,
    SELECT_CATEGORY,
    SELECT_DIFFICULT
} from "../types";

const initialState = {
    questions: [],
    selectedCategory: null,
    selectedDifficult: null,
    selectedAnswer: null,
    score: 0
}

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS:
            return {...state, questions: action.payload};
        case SELECT_CATEGORY:
            return {...state, selectedCategory: action.payload};
        case SELECT_DIFFICULT:
            return {...state, selectedDifficult: action.payload};
        case SELECT_ANSWER:
            return {...state, selectedAnswer: action.payload};
        case CLEAR_SELECT_ANSWER:
            return {...state, selectedAnswer: null};
        case ADD_SCORE:
            return {...state, score: state.score + 1};
        case CLEAR_SCORE:
            return {...state, score: 0};
        default:
            return state;
    }
}

export default questionsReducer;