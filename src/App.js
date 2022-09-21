import './App.css'

// Replace your code here
import {Component} from 'react'

class App extends Component {
  state = {isSave: false, value: ''}

  change = event => {
    this.setState({value: event.target.value})
  }

  saveClick = () => {
    this.setState(prev => ({isSave: !prev.isSave}))
  }

  render() {
    const {isSave, value} = this.state
    console.log(value)
    return (
      <div className="bg-container">
        <div className="card">
          <h2>Editable Text Input</h2>

          <div className="card-2">
            {isSave === false ? (
              <input value={value} onChange={this.change} type="text" />
            ) : (
              <p>{value}</p>
            )}

            <button className="btn" onClick={this.saveClick} type="button">
              {isSave === false ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
