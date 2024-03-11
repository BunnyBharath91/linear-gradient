import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  MainHeading,
  SmallHeading,
  DirectionList,
  ColorsContainer,
  ColorCard,
  ColorHexCode,
  InputColor,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    selectedDirection: gradientDirectionsList[0].directionId,
    firstColorInput: '#8ae323',
    secondColorInput: '#014f7b',
    selectedDirectionItem: gradientDirectionsList[0].directionId,
  }

  changeDirection = id => {
    this.setState({
      selectedDirection: id,
    })
  }

  onChangeFirstColor = event => {
    this.setState({
      firstColor: event.target.value,
    })
  }

  onChangeSecondColor = event => {
    this.setState({
      secondColor: event.target.value,
    })
  }

  onGenerateOutput = () => {
    const {firstColor, secondColor, selectedDirection} = this.state
    this.setState({
      firstColorInput: firstColor,
      secondColorInput: secondColor,
      selectedDirectionItem: selectedDirection,
    })
  }

  render() {
    const {
      firstColor,
      firstColorInput,
      secondColor,
      secondColorInput,
      selectedDirection,
      selectedDirectionItem,
    } = this.state
    console.log(selectedDirection)
    return (
      <MainContainer
        data-testid="gradientGenerator"
        direction={selectedDirectionItem.toLowerCase()}
        firstColor={firstColorInput}
        secondColor={secondColorInput}
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <SmallHeading>Choose Direction</SmallHeading>
        <DirectionList>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              eachItem={eachItem}
              selected={selectedDirection === eachItem.directionId}
              changeDirection={this.changeDirection}
              key={eachItem.directionId}
            >
              {eachItem.displayText}
            </GradientDirectionItem>
          ))}
        </DirectionList>
        <SmallHeading>Pick the Colors</SmallHeading>
        <ColorsContainer>
          <ColorCard>
            <ColorHexCode>{firstColor}</ColorHexCode>
            <InputColor
              type="color"
              value={firstColor}
              onChange={this.onChangeFirstColor}
            />
          </ColorCard>
          <ColorCard>
            <ColorHexCode>{secondColor}</ColorHexCode>
            <InputColor
              value={secondColor}
              type="color"
              onChange={this.onChangeSecondColor}
            />
          </ColorCard>
        </ColorsContainer>
        <GenerateButton type="button" onClick={this.onGenerateOutput}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator

// Write your code here
