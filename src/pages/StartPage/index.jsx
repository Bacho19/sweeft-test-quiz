import React from 'react';
import Title from '../../components/Title';
import {FirstPageContent, FirstPageWrapper} from './style/StartPage';
import Subtitle from '../../components/Subtitle';
import Button from '../../components/Button';
import CustomSelect from "../../components/CustomSelect";
import {useDispatch, useSelector} from 'react-redux';
import { selectCategory, selectDifficult} from "../../store/actions/questions";

const StartPage = ({setStep}) => {
    const dispatch = useDispatch();

    const categoryOptions = [
        {value: '9', label: 'General Knowledge'},
        {value: '10', label: 'Entertainment: Books'},
        {value: '11', label: 'Entertainment: Film'},
        {value: '12', label: 'Entertainment: Music'},
        {value: '13', label: 'Entertainment: Musicals & Theatres'},
        {value: '14', label: 'Entertainment: Television'},
        {value: '15', label: 'Entertainment: Video Games'},
        {value: '16', label: 'Entertainment: Board Games'},
        {value: '17', label: 'Science & Nature'},
        {value: '18', label: 'Science: Computers'},
        {value: '19', label: 'Science: Mathematics'},
        {value: '20', label: 'Mythology'},
        {value: '21', label: 'Sports'},
        {value: '22', label: 'Geography'},
        {value: '23', label: 'History'},
        {value: '24', label: 'Politics'},
        {value: '25', label: 'Art'},
        {value: '26', label: 'Celebrities'},
        {value: '27', label: 'Animals'},
        {value: '28', label: 'Vehicles'},
        {value: '29', label: 'Entertainment: Comics'},
        {value: '30', label: 'Science: Gadgets'},
        {value: '31', label: 'Entertainment: Japanese Anime & Manga'},
        {value: '32', label: 'Entertainment: Cartoon & Animations'},
    ];

    const difficultOptions = [
        {value: 'easy', label: 'Easy'},
        {value: 'medium', label: 'Medium'},
        {value: 'hard', label: 'Hard'}
    ];

    const handleCategoryChange = selectedOption => {
        dispatch(selectCategory(selectedOption));
    }

    const handleDifficultChange = selectedOption => {
        dispatch(selectDifficult(selectedOption))
    }

    const {selectedCategory, selectedDifficult} = useSelector((state) => state.questions)

    const onStartQuiz = () => {
        if (selectedCategory && selectedDifficult) {
            setStep(2)
        }
    }

    return (
        <FirstPageWrapper>
            <FirstPageContent>
                <Title>
                    Welcome
                </Title>
                <Subtitle style={{marginBottom: '20px'}}>
                    Click on start button to start a quiz
                </Subtitle>
                <CustomSelect
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    options={categoryOptions}
                    placeholder="Select a category"
                    style={{marginBottom: '7px'}}
                />
                <CustomSelect
                    value={selectedDifficult}
                    onChange={handleDifficultChange}
                    options={difficultOptions}
                    placeholder="Select a difficult"
                />
                <Button style={{marginTop: '15px'}} onClickButton={onStartQuiz}>
                    Start a Quiz
                </Button>
            </FirstPageContent>
        </FirstPageWrapper>
    );
};

export default StartPage;