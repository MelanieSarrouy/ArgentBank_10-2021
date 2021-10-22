import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Input from '../components/Input'
import { Button } from '../utils/styles/components/button'
import {
  SignInMain,
  SignInSection,
  SignInSectionHeader,
  SignInIcon,
  SignInTitle,
} from '../utils/styles/pages/signIn'

const SignIn = () => {
  return (
    <div>
      <Header />
      <SignInMain>
        <SignInSection>
          <SignInSectionHeader>
            <SignInIcon className="fa fa-user-circle"></SignInIcon>
            <SignInTitle>Sign In</SignInTitle>
          </SignInSectionHeader>
          <form method="GET">
            <Input
              direction={'column'}
              forAndId={'username'}
              inputType={'text'}
            />
            <Input
              direction={'column'}
              forAndId={'password'}
              inputType={'password'}
            />
            <Input
              direction={'row-reverse'}
              forAndId={'remember-me'}
              inputType={'checkbox'}
            />
          </form>
          <Link to="/user/:id?">Page User (provisoire)</Link>

          <Button type="submit"width='100%' value='Sign In' />
        </SignInSection>
      </SignInMain>
    </div>
  )
}

export default SignIn
