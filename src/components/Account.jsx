import React from 'react'
import { InputButton } from '../utils/styles/components/button'
import {
  AccountSection,
  AccountContentWrapper,
  AccountTitle,
  AccountAmount,
} from '../utils/styles/components/account'

const Account = ({ title, amount, description }) => {
  return (
    <AccountSection>
      <AccountContentWrapper>
        <AccountTitle>{title}</AccountTitle>
        <AccountAmount>$ {amount.toLocaleString('en')}</AccountAmount>
        <p>{description}</p>
      </AccountContentWrapper>
      <div className="account-content-wrapper cta">
        <InputButton type="button" value="View transactions" width="100%" />
      </div>
    </AccountSection>
  )
}

export default Account
