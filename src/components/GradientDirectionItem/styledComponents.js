import styled from 'styled-components'

export const DirectionItem = styled.li`
  list-style-type: none;
  width: 120px;
  background-color: transparent;
  border: none;
  color: green;
  font-size: 14px;
  margin-right: 10px;
  text-align: center;
  opacity: ${props => (props.selected ? '1' : '0.5')};
`
export const DirectionButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 12px 22px;
  background-color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`
