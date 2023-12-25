import {Component} from 'react'
import Options from '../options/index'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {countryValue: countryAndCapitalsList[0]}

  changed = event => {
    const {countryValue} = this.state
    const typedValue = event.target.value
    const filteredCountires = countryAndCapitalsList.filter(
      eachObject => eachObject.id === typedValue,
    )
    this.setState({countryValue: filteredCountires[0]})
  }

  render() {
    const {countryValue} = this.state
    return (
      <div>
        <h1>Countries and Capitals</h1>
        <div>
          <select id="options" onChange={this.changed}>
            {countryAndCapitalsList.map(eachCapital => (
              <Options eachCapital={eachCapital} key={eachCapital.id} />
            ))}
          </select>
          <label htmlFor="options">is Capital of which country?</label>
        </div>
        <p>{countryValue.country}</p>
      </div>
    )
  }
}

export default Capitals
