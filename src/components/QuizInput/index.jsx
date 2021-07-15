import React from 'react';
import {InputItem, InputLabel, InputWrapper} from './style/QuizInput';
import {useDispatch}  from 'react-redux';
import {selectAnswer} from '../../store/actions/questions';

const QuizInput = ({answer}) => {
    const dispatch = useDispatch()

    const onSelectInput = (e) => {
        dispatch(selectAnswer(e.target.value))
    }

    return (
        <InputWrapper>
            <InputItem
                id={answer}
                type="radio"
                value={answer}
                name="quiz"
                onChange={onSelectInput}
            />
            <InputLabel
                htmlFor={answer}
            >
                {answer}
            </InputLabel>
        </InputWrapper>
    );
};

export default QuizInput;