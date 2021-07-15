import React from 'react';
import Button from '../../components/Button';
import {
    CurrentQuestionNumber, ErrorText, ErrorWrapper,
    QuizAnswers,
    QuizPageContent,
    QuizPageWrapper,
    QuizTitle,
    QuizTop
} from './style/QuizPage';
import QuizInput from "../../components/QuizInput";
import {useDispatch, useSelector} from 'react-redux';
import {useHttp} from "../../hooks/useHttp";
import {baseUrl} from "../../baseUrl";
import Loader from "../../components/Loader";
import {addScore, clearSelectedAnswer, fetchQuestions} from "../../store/actions/questions";
import Subtitle from "../../components/Subtitle";

const QuizPage = ({setStep}) => {

    const dispatch = useDispatch();

    const {selectedCategory, selectedDifficult} = useSelector(state => state.questions)
    const {loading, request, clearError, error} = useHttp()
    const fetchQuestionsFromServer = async () => {
        try {
            const response = await request(`${baseUrl}/api.php?amount=10&category=${selectedCategory.value}&difficulty=${selectedDifficult.value}&type=multiple`)
            dispatch(fetchQuestions(response.results))

        } catch (e) {
            console.log(e)
        }
    }

    React.useEffect(() => {
        fetchQuestionsFromServer()
        return () => {
            clearError()
        }
        // eslint-disable-next-line
    }, [])

    const {questions, selectedAnswer} = useSelector((state => state.questions))

    const [questionNumber, setQuestionNumber] = React.useState(0)
    const currentQuestion = questions[questionNumber]

    const [answersArray, setAnswersArray] = React.useState([])

    const onNextQuestion = () => {
        if (questionNumber === questions?.length - 1) {
            setStep(3);
        }
        dispatch(clearSelectedAnswer())
        if (selectedAnswer && !currentQuestion?.incorrect_answers.includes(selectedAnswer)) {
            dispatch(addScore());
        }
        setQuestionNumber(prev => prev + 1)
    }

    React.useEffect(() => {
        currentQuestion && setAnswersArray(currentQuestion?.incorrect_answers)
        currentQuestion && setAnswersArray(prev => [...prev, currentQuestion?.correct_answer])
    }, [currentQuestion])

    if (loading) {
        return <Loader/>;
    }

    if (error) {
        return (
            <ErrorWrapper>
                <ErrorText>
                    Error: {error}
                </ErrorText>
                <Subtitle>Please restart the page</Subtitle>
            </ErrorWrapper>
        )
    }

    return (
        <QuizPageWrapper>
            <QuizPageContent>
                <QuizTop>
                    <QuizTitle>
                        {currentQuestion?.question}
                    </QuizTitle>
                    <CurrentQuestionNumber>
                        {questionNumber + 1} / {questions?.length}
                    </CurrentQuestionNumber>
                </QuizTop>
                <QuizAnswers>
                    {answersArray?.map((answer, index) => {
                        return <QuizInput answer={answer} key={answer + index}/>
                    })}
                </QuizAnswers>
                <Button style={{alignSelf: 'flex-end', marginTop: '15px'}} onClickButton={onNextQuestion}>
                    Next
                </Button>
            </QuizPageContent>
        </QuizPageWrapper>
    );
};

export default QuizPage;