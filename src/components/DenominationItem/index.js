import './index.css'

const DenominationItem = props => {
  const {denominationList, withdrawalDenomination} = props
  const {value} = denominationList

  const onClickButton = () => {
    withdrawalDenomination(value)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onClickButton}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
