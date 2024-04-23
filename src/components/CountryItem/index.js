// Write your code here
import './index.css'

const CountryItem = props => {
  const {countryDetails, toggleIsVisited} = props
  const {id, name, isVisited} = countryDetails

  const onClickRemove = () => {
    toggleIsVisited(id)
  }

  return (
    <li>
      <p>{name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button type="button" onClick={onClickRemove}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
