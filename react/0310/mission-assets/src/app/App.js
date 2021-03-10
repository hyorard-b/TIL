import {data as buttonData} from '../data/button.json'

const renderedButtonElements = buttonData.map(({id, state, content, icon, disabled = false}) => (
  <button 
  type="button"
  key={`${id}`}
  className = {`button button__upload button--${state}`}
  onClick={() => console.log(`clicked ${state} state upload Button`)}
  disabled={disabled}>
    {content}
    <img
      src={`${process.env.PUBLIC_URL}/assets/icons/${icon}.svg`}
      alt=""
      height={12}
       />
  </button>
))

console.log(renderedButtonElements)

console.log(`${process.env.PUBLIC_URL}/assets/icons/wasda.svg`)
  

function App() {
  return (
    <div className="container">{renderedButtonElements}</div>
  )
}

export default App;
