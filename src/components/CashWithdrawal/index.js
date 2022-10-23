import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawalDenomination = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="line-1">
          <div className="profile-logo">
            <h1 className="profile-pic">S</h1>
          </div>
          <h1 className="name">Sarah Williams</h1>
        </div>
        <div className="line-2">
          <p className="your-balance">Your Balance</p>
          <div>
            <p className="balance">{balance}</p>
            <p className="in-rupees">In Rupees</p>
          </div>
        </div>
        <p className="withdraw">Withdraw</p>
        <p className="choose">CHOOSE SUM (IN RUPEES)</p>
        <ul className="denominations-list">
          {denominationsList.map(eachItem => (
            <DenominationItem
              denominationList={eachItem}
              key={eachItem.id}
              withdrawalDenomination={this.withdrawalDenomination}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default CashWithdrawal
