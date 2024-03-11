import {DirectionItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {changeDirection, eachItem} = props
  const {directionId, displayText} = eachItem

  const onSelectDirection = () => {
    changeDirection(directionId)
  }

  return (
    <DirectionItem {...props} onClick={onSelectDirection}>
      <DirectionButton>{displayText}</DirectionButton>
    </DirectionItem>
  )
}

export default GradientDirectionItem
