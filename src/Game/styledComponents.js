import styled from 'styled-components/macro'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
  height: 100vh;
  padding: 30px;
  background-color: #223a5f;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
`
export const ItemsContainer = styled.div``

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
`

export const ScoreCardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 100px;
  padding: 5px;
  margin: 15px;
`
export const ParagraphScore = styled.p`
  color: #000000;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin: 0;
`

export const ScoreSpan = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 0;
`

export const ItemsImageContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 50%;
  width: 100%;
  padding: 0;
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  border: none:
  cursor: pointer;
  outline: none;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const PopupButton = styled(PlayAgainButton)`
  width: 100px;
`

export const RulseImageContainer = styled.div``

export const RulesImage = styled.img`
  width: 100%;
  height: 100%;
`

export const CloseLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const CloseLineButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 25px;
`
