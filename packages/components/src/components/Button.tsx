import  {FC} from 'react'


interface Props {
onclick: () => void
}
export const Button:FC<Props> = (props) => {
  return (
    <button {...props} className="btn">Click me</button>
  )
}

