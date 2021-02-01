import {Component} from 'react';

interface UserSearchProps {
  users: User[]
}

interface UserSearchState {
  name: string;
  matchingUser: User | undefined;
}

interface User {
  name: string,
  age: number
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    matchingUser: undefined
  }

  private onClick() {
    this.setState({user: undefined});

    const matching = this.props.users.find(user => user.name.includes(this.state.name));
    if (matching) {
      this.setState({user: matching});
    }
  }

  render() {

    const {name, matchingUser} = this.state;

    return (
      <div>
        <h1>User Search</h1>

        <div>
          {matchingUser && matchingUser.name}
          {matchingUser && matchingUser.age}
        </div>

        <input value={name} onChange={(e) => this.setState({name: e.target.value})}/>
        <button onClick={this.onClick}>Find User</button>
      </div>
    )

    // return (
    //   <div>
    //     <h1>User Search</h1>
    //
    //     <div>
    //       {this.state.matchingUser && this.state.matchingUser.name}
    //       {this.state.matchingUser && this.state.matchingUser.age}
    //     </div>
    //
    //     <input value={this.state.name} onChange={(e) => this.state.setName(e.target.value)}/>
    //     <button onClick={onClick}>Find User</button>
    //   </div>
    // )
  }
}

export default UserSearch;
