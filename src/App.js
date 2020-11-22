import logo from './logo.svg';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react'
import './App.css';

function App() {

  const [name, setName] = useState({ firstName: '', lastName: '' })
  const { register, handleSubmit } = useForm();
  return (

    <div className="App">
      <form>
        <div>
          <label>First name:</label>
          <input type="text" value={name.firstName}
            onChange={e => setName({ ...name, firstName: e.target.value })} placeholder="First Name" ref={register} />
        </div>
        <br />
        <div>
          <label>Last name:</label>
          <input type="text" value={name.lastName}
            onChange={e => setName({ ...name, lastName: e.target.value })} placeholder="Last Name" ref={register} />
        </div>
        <br />
        <input type="submit" value="Submit"></input>

        <br />
        <br />
        <table>
          <th>First Name</th>
          <th>Last Name</th>
          <tr>
            <td>{name.firstName}</td>
            <td>{name.lastName}</td>
          </tr>
        </table>

        <h2>{JSON.stringify(name)}</h2>

      </form>

    </div>
  )

}

export default App;
