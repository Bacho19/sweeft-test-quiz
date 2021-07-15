import styled from 'styled-components';

export const QuizPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const QuizPageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 780px;
`

export const QuizTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const QuizTitle = styled.div`
  font-size: 29px;
  font-weight: 700;
  color: #598CD9;
  width: 82%;
`

export const CurrentQuestionNumber = styled.div`
  background-color: #598CD9;
  color: #fff;
  font-weight: 700;
  padding: 15px 20px;
  border-radius: 25px;
`

export const QuizAnswers = styled.div`
  margin-top: 14px;
`

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`

export const ErrorText = styled.h1`
  font-size: 44px;
  font-weight: 700;
  color: #d61313;
`