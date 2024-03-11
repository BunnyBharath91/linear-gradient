import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    to ${props => props.direction},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`
export const MainHeading = styled.h1`
  font-size: 32px;
`
export const SmallHeading = styled.p`
  font-size: 22px;
`

export const DirectionList = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
`

export const ColorsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ColorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 24px;
`
export const ColorHexCode = styled.p`
  font-size: 18px;
  font-weight: 500;
`

export const InputColor = styled.input`
  width: 100px;
  height: 45px;
  padding: 0px;
  background-color: transparent;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  color: black;
  padding: 10px;
  margin-top: 24px;
  cursor: pointer;
`
