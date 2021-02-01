import {useState, useRef, useEffect} from 'react';

const users = [
  {name: 'Sarah', age: 20},
  {name: 'Alex', age: 20},
  {name: 'Michael', age: 20},
];

// interface UserModel {
//   name: string,
//   age: number
// }

const UserSearch: React.FunctionComponent = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Similar to componentDidMount and componentDidUpdate:
  // with [] at the end, it will invoke only once like didMount
  useEffect(() => {
   if(!inputRef.current) {
     return;
   }
   inputRef.current.focus();
  }, []);

  const [name, setName] = useState('');

  const [matchingUser, setMatchingUser] = useState<{ name: string, age: number } | undefined>();

  const onClick = () => {
    // const matching = users.find((user) =>{
    //   return user.name === name;
    // });

    setMatchingUser(undefined);

    const matching = users.find(user => user.name.includes(name));
    if (matching) {
      setMatchingUser(matching);
    }
  }

  return <div>
    <h1>User Search</h1>

    <div>
      {matchingUser && matchingUser.name}
      {matchingUser && matchingUser.age}
    </div>

    <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}/>
    <button onClick={onClick}>Find User</button>
  </div>;
};

export default UserSearch;
