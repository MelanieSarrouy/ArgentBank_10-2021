import React from 'react'
import Input from '../components/Input'
import {
  SignInMain,
  SignInSection,
  SignInSectionHeader,
  SignInIcon,
  SignInTitle,
  SignInButton,
} from '../utils/styles/pages/signIn'

const SignIn = () => {
  return (
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
          <a href="./user.html">Page User (provisoire)</a>
        </form>
        <SignInButton type="submit" value="Sign In" />
      </SignInSection>
    </SignInMain>
  )
}

export default SignIn
