const Options = props => {
  const {eachCapital} = props
  const {id, capitalDisplayText} = eachCapital

  return <option value={id}>{capitalDisplayText}</option>
}

export default Options
