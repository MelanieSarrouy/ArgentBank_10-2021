import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
// import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { getToken } from '../actions/actionGetToken'
import { getUser } from '../actions/actionGetUser'
import Header from '../components/Header'
import Input from '../components/Input'
import { InputButton } from '../utils/styles/components/button'
import {
  SignInMain,
  SignInSection,
  SignInSectionHeader,
  SignInIcon,
  SignInTitle,
} from '../utils/styles/pages/signIn'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const token = useSelector(selectToken)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  console.log(token + user)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getToken(email, password))
    if (token) {
      login(token)
    }
  
  }

  const login = (token) => {
    dispatch(getUser(token))
  }

  return (
    <div>
      <Header />
      <SignInMain>
        <SignInSection>
          <SignInSectionHeader>
            <SignInIcon className="fa fa-user-circle"></SignInIcon>
            <SignInTitle>Sign In</SignInTitle>
          </SignInSectionHeader>
          <form onSubmit={handleSubmit}>
            <Input
              direction={'column'}
              forAndId={'email'}
              inputType={'text'}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <Input
              direction={'column'}
              forAndId={'password'}
              inputType={'password'}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <Input
              direction={'row-reverse'}
              forAndId={'remember-me'}
              inputType={'checkbox'}
            />
            <InputButton type="submit" width="100%" value="Sign In" />
          </form>
          <Link to="/user/:id?">Page User (provisoire)</Link>
        </SignInSection>
      </SignInMain>
    </div>
  )
}

const selectToken = (state) => state.token.token
const selectUser = (state) => state.getUser.user

export default SignIn
