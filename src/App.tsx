
import axios from 'axios'
import classes from './App.module.scss'
function App() {

  const onFetch = async () => {
    const data = axios.get("https://api.erdi.cmu.ac.th/landscape/")
    console.log(data,":fetch")
  }

  return (
    <div className={classes.container}>
      <button onClick={onFetch} className={classes.btn}>Api test</button>
    </div>
  )
}

export default App
