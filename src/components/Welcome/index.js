// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onChangeButton = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button className="btn" type="button" onClick={this.onChangeButton}>
            Subscribe
          </button>
        ) : (
          <button className="btn" type="button" onClick={this.onChangeButton}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
