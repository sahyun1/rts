import {useState} from 'react';


const GuestList:React.FC = () => {
  const [name, setName] = useState('');
  // const [guests, setGuests] = useState([]);
  // set type of guests state
  const [guests, setGuests] = useState<string[]>([]);


  const onClick = () => {
    setName('');
    // setGuests(guests.push(name));
    setGuests([...guests, name]);
  }

  return <div>
    <h3>Guest list</h3>

    {/*<div>*/}
    {/*  {guests.map(guest=><div>{guest}</div>)}*/}
    {/*</div>*/}

    <ul>
      {guests.map(guest=><li key={guest}>{guest}</li>)}
    </ul>

    <input value={name} onChange={(e)=> setName(e.target.value)}></input>
    <button onClick={onClick}>Add Guest</button>
  </div>
}

export default GuestList;
