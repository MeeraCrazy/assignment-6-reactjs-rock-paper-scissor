import {ButtonsListContainer, ButtonImage, ImageItem} from './styledComponents'

const Buttons = props => {
  const {buttonsDetails, onGetId} = props
  const {id, image} = buttonsDetails
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    onGetId(image, id)
  }

  return (
    <ButtonsListContainer>
      <ButtonImage
        type="button"
        data-testid={`${lowerCaseId}Button`}
        onClick={onClickButton}
      >
        <ImageItem src={image} alt={id} />
      </ButtonImage>
    </ButtonsListContainer>
  )
}

export default Buttons
