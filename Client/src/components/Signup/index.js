import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';


function Signup() {
    const [addUser, { error }] = useMutation(ADD_USER)

    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: ''})

  return (
    <>
      
    </>
  )
}

export default Signup
