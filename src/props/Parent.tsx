import {ChildAsFC} from './Child';

const Parent = () => {
  return <ChildAsFC color="red" onClick={()=> console.log('clicked')}>
  {/*this pass as children prop auto*/}
    aasdfasdf
  </ChildAsFC>
}

export default Parent;
