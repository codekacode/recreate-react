import { Component } from '../lib/react.js'

class User extends Component {
  render(){
    return `
      <div class="user">
        <div class="avatar">
          <img src="./images/ash.jpg" alt="ash" />
        </div>
        <h2>Ash</h2>
      </div>
    `
  }
}

export default User;