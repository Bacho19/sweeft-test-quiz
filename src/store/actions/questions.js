import {
    ADD_SCORE,
    CLEAR_SCORE,
    CLEAR_SELECT_ANSWER,
    FETCH_QUESTIONS,
    SELECT_ANSWER,
    SELECT_CATEGORY,
    SELECT_DIFFICULT
} from "../types";


export const fetchQuestions = (data) => {
    return {
        type: FETCH_QUESTIONS,
        payload: data
    }
}

export const selectAnswer = (answer) => {
    return {
        type: SELECT_ANSWER,
        payload: answer
    }
}

export const selectCategory = (category) => {
    return {
        type: SELECT_CATEGORY,
        payload: category
    }
}

export const selectDifficult = (difficult) => {
    return {
        type: SELECT_DIFFICULT,
        payload: difficult
    }
}

export const addScore = () => {
    return {
        type: ADD_SCORE
    }
}

export const clearScore = () => {
    return {
        type: CLEAR_SCORE
    }
}

export const clearSelectedAnswer = () => {
    return {
        type: CLEAR_SELECT_ANSWER
    }
}
