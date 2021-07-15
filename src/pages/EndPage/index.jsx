import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import Button from "../../components/Button";
import {EndPageContent, EndPageWrapper, ScoredPoint} from "./style/EndPage";
import {clearScore} from "../../store/actions/questions";

const EndPage = ({setStep}) => {
    const dispatch = useDispatch()
    const {score} = useSelector(state => state.questions)

    const onRestartHandler = () => {
        setStep(1)
        dispatch(clearScore())
    }
    return (
        <EndPageWrapper>
            <EndPageContent>
                {score >= 9 && <Title>Excellent</Title>}
                {score >= 7 && score < 9 && <Title>Good</Title>}
                {score >= 5 && score < 7 && <Title>Not bad</Title>}
                {score < 5 && <Title>Don't worry,<br/> practice and try again</Title>}
                <Subtitle style={{margin: '15px 0 25px'}}>
                    You scored <ScoredPoint>{score}</ScoredPoint> points
                </Subtitle>
                <Button style={{marginTop: '15px'}} onClickButton={onRestartHandler}>
                    Restart
                </Button>
            </EndPageContent>
        </EndPageWrapper>
    );
};

export default EndPage;