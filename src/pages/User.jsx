import React, { useState } from 'react'
import HeaderUser from '../components/HeaderUser'
import { InputButton } from '../utils/styles/components/button'
import {
  UserHeaderMain,
  Title,
  EditNameWrapper,
  InputStyle,
  ButtonsWrapper,
  InputButtonsStyle,
} from '../utils/styles/pages/user'
import account from '../datas/account'
import Account from '../components/Account'

const User = () => {
  const [editName, setEditName] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <div>
      <HeaderUser />

      <main>
        <UserHeaderMain>
          <Title>
            Welcome back
            <br />
            Tony Jarvis!
          </Title>
          {editName ? (
            <EditNameWrapper>
              <div>
                <InputStyle
                  value={firstName}
                  type="text"
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }}
                />
                <InputStyle
                  value={lastName}
                  type="text"
                  onChange={(e) => {
                    setLastName(e.target.value)
                  }}
                />
              </div>
              <ButtonsWrapper>
                <InputButtonsStyle type="submit" value="Save" />
                <InputButtonsStyle
                  type="button"
                  value="Cancel"
                  onClick={() => {
                    setEditName(false)
                  }}
                />
              </ButtonsWrapper>
            </EditNameWrapper>
          ) : (
            <InputButton
              type="button"
              width="10rem"
              onClick={() => {
                setEditName(true)
              }}
              value="Edit Name"
            />
          )}
        </UserHeaderMain>

        <h3 className="sr-only">Accounts</h3>
        {account.map((ac, index) => (
          <Account
            key={index}
            title={ac.title}
            amount={ac.amount}
            description={ac.description}
          />
        ))}
      </main>
    </div>
  )
}

export default User
