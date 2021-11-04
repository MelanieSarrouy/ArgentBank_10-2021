import React from 'react'
import { InputButton } from '../styles/components/button'
import {
  AccountArticle,
  AccountContentWrapper,
  AccountTitle,
  AccountAmount,
  AccountDescription,
  ButtonWrapper
} from '../styles/components/account'
import { useSelector } from 'react-redux'

const Account = ({ title, amount, description }) => {
  const selectTheme = (state) => state.theme
  const theme = useSelector(selectTheme)

  return (
    <AccountArticle theme={theme}>
      <AccountContentWrapper>
        <AccountTitle theme={theme}>{title}</AccountTitle>
        <AccountAmount theme={theme}>$ {amount.toLocaleString('en')}</AccountAmount>
        <AccountDescription theme={theme}>{description}</AccountDescription>
      </AccountContentWrapper>
      <ButtonWrapper>
        <InputButton
          type="button"
          value="View transactions"
          width="100%"
        />
      </ButtonWrapper>
    </AccountArticle>
  )
}

export default Account
