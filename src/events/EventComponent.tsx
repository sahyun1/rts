const EventComponent: React.FC = () => {

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  }

  return <div>
    <h2>Event component</h2>
    <input onChange={e => onChange(e)}/>
  </div>
};

export default EventComponent;
