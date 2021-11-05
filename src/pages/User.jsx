import React, { useState } from 'react'
import { InputButton } from '../styles/components/button'
import {
  UserHeaderMain,
  Title,
  EditNameWrapper,
  InputStyle,
  ButtonsWrapper,
  InputButtonsStyle,
  InputWrapper,
  SectionAccount
} from '../styles/pages/user'
import account from '../datas/account'
import Account from '../components/Account'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { editUser } from '../actions/actionEditUser'
import colors from '../styles/bases/colors'

const User = () => {
  const selectTheme = (state) => state.theme
  const theme = useSelector(selectTheme)

  const [editName, setEditName] = useState(false)
  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')
  const selectUser = (state) => state.getUser.user.body
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  if (user === undefined) {
    return <Redirect to="/" />
  }
  const firstName = user.firstName
  const lastName = user.lastName

  const edit = () => {
    dispatch(editUser(newFirstName, newLastName))
    setEditName(false)
  }

  return (
    <>
      <UserHeaderMain>
        <Title theme={theme}>
          Welcome back
          <br />
          {firstName} {lastName}
        </Title>
        {editName ? (
          <EditNameWrapper>
            <InputWrapper>
              <InputStyle
                theme={theme}
                value={newFirstName}
                placeholder={firstName}
                type="text"
                onChange={(e) => {
                  setNewFirstName(e.target.value)
                }}
              />
              <InputStyle
                theme={theme}
                value={newLastName}
                placeholder={lastName}
                type="text"
                onChange={(e) => {
                  setNewLastName(e.target.value)
                }}
              />
            </InputWrapper>
            <ButtonsWrapper>
              <InputButtonsStyle type="submit" value="Save" onClick={edit} />
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
            borderColor={colors.primary}
            bkgColor={colors.primary}
            txtColor="white"
            width="10rem"
            onClick={() => {
              setEditName(true)
            }}
            value="Edit Name"
          />
        )}
      </UserHeaderMain>

      <h3 className="sr-only">Accounts</h3>
      <SectionAccount>
        {account.map((ac, index) => (
          <Account
            key={index}
            title={ac.title}
            amount={ac.amount}
            description={ac.description}
          />
        ))}
      </SectionAccount>
    </>
  )
}

export default User
