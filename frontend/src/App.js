import {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function App() {

  const [param, setParam] = useState('')
  const [text, setText] = useState([{input: "hello world"}])

  const Handler = () => {
    fetch(`http://localhost:5000/${param}`)
    .then(response => {
      console.log("response: " + response)
      return response.json()
    })
    .then(data => setText(data))
    .catch(err => console.log(err))
  }

  return (
    <>
      {/* <h1>{text[text.length-1].input}</h1> */}
      <ul>
      {text && text.map((item, index) => {
        return (
        <li key={index}>{'test: ' + item.input}</li>
        )
      })}
        </ul>
     
      <TextField label="Input" onChange={(e) => setParam(e.target.value)}/>
      <Button variant="contained" color="primary" onClick={() => Handler()}>Submit</Button>
    </>
  );
}