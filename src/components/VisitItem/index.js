// Write your code here
import './index.css'

const VisitItem = props => {
  const {countryDetails, clickRemove} = props
  const {id, name, imageUrl} = countryDetails

  const onClickRemove = () => {
    clickRemove(id)
  }

  return (
    <li>
      <div className="top-container">
        <img src={imageUrl} className="img" alt="thumbnail" />
        <p>{name}</p>
        <button type="button" data-testid="remove" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitItem
