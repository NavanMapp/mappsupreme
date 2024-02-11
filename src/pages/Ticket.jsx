import React, { useState } from 'react'
import '../styles/ticket.css'
import Banner from '../components/Banner'
import { Dropdown } from 'primereact/dropdown'
import { getDatabase, ref, set } from 'firebase/database'

function Ticket() {
  const [userInput, setUserInput] = useState({})
  const [userName, setUserName] = useState('')
  const [userSurname, setUserSurname] = useState('')
  const [faultDescription, setFaultDescription] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const category = [
    { label: 'Hardware', value: 'hardware' },
    { label: 'Software', value: 'software' },
    { label: 'Networking', value: 'networking' },
    { label: 'Server', value: 'server' }
  ]

  function handleInput(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value })
    console.log(userInput)
  }

  function handleUpload(e) {
    console.log('File uploaded')
  }

  function handleLogTicket(userId, userName, userSurname, faultDescription) {
    const db = getDatabase()
    set(ref(db, 'tickets/' + userId), {
      name: userInput.userName,
      surname: userInput.userSurname,
      fault: userInput.fault,
      faultDescription: userInput.faultDescription,
    })
  }

  return (
    <div className='main'>
      <Banner />
      <div className='main_container'>
        <h1>Welcome to MAPP SUPREME IT X-perts</h1>
        <p>Log your query below and we will make
          sure our skilled support team contacts you to resolve it for you promptly.</p>
        <label htmlFor='name'>Who is requesting help?</label>
        <input type='text' placeholder='Name' name='name' required
          onChange={(e) => handleInput(e)}>
        </input>
        <label htmlFor='surname'>
          Surname
        </label>
        <input type='text' placeholder='Surname' name='surname' required
          onChange={(e) => handleInput(e)}>
        </input>
        <label htmlFor='fault'>
          Title for the problem
        </label>
        <input type='text' placeholder='Enter your subject line'
          name='fault' required
          onChange={(e) => handleInput(e)}>
        </input>
        <label htmlFor='faultCategory'>
          Please choose a category that best descibes your issue?
        </label>
        <Dropdown value={selectedCategory}
          onChange={(e) => setSelectedCategory(e)} options={category}
          optionLabel='name'
          placeholder='Please select a category'
          className='w-full md:w-14rem' />
        <textarea required
          placeholder='Can you give us a description of the issue?'
          type='text'
          name='textarea'
          shape="" coords="" href="" alt=""
          onChange={(e) => handleInput(e)}
        />
        <div>
          <button onClick={(e) => handleUpload(e)}> Upload file</button>
          <label htmlFor='btnUpload'>Select a file or screenshot to upload</label>
        </div>
        <div className='btnLog'>
          <button onClick={(e) => handleLogTicket(e)}>Log ticket</button>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Ticket