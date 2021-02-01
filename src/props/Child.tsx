interface ChildProps {
  color: string;
  onClick: () => void;
}

// export const Child = (props: ChildProps) => {

// this way would be just using color field
export const Child = ({color, onClick}: ChildProps) => {
  return(
  <div>
      {color}
    <button onClick={onClick}>click</button>
  </div>
  )
}

// fc - function component
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
  return(
    <div>
      {color}
      <button onClick={onClick}>click</button>
    </div>
    )

}
