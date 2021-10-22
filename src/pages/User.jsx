import React, { useState } from 'react'
import styled from 'styled-components'
// import EditName from '../components/EditName'
import HeaderUser from '../components/HeaderUser'
import colors from '../utils/styles/bases/colors'
import { Button } from '../utils/styles/components/button'

export const UserHeaderMain = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`
export const Title = styled.h2`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 2.1rem;
`
export const EditNameWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.7rem;
  padding-top: 1rem;
`
export const InputStyle = styled.input`
  padding: 0.5rem 0.8rem;
  color: ${colors.text};
  border-radius: 0.3rem;
  border: 3px solid #bfc8d3;
  height: 1.5rem;
  margin: 0 .4rem;
  &:hover {
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  }
`
export const ButtonsWrapper = styled.div`
  display: flex;
`
export const ButtonsStyle = styled.input`
  padding: 0.5rem 0.8rem;
  color: ${colors.primary};
  font-size: 1.1rem;
  font-weight: 700;
  border: 3px solid ${colors.primary};
  border-radius: 0.3rem;
  width: 8rem;
  height: 2.5rem;
  margin: 0 .4rem;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary};
    color: white;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  }
`
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
                <ButtonsStyle type="submit" value="Save" />
                <ButtonsStyle
                  type="button"
                  value="Cancel"
                  onClick={() => {
                    setEditName(false)
                  }}
                />
              </ButtonsWrapper>
            </EditNameWrapper>
          ) : (
            <Button
              type="button"
              width="auto"
              onClick={() => {
                setEditName(true)
              }}
              value="Edit Name"
            />
          )}
        </UserHeaderMain>

        <h3 className="sr-only">Accounts</h3>

        <section className="account">
          <div className="account-content-wrapper">
            <h4 className="account-title">Argent Bank Checking (x8349)</h4>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>

        <section className="account">
          <div className="account-content-wrapper">
            <h4 className="account-title">Argent Bank Savings (x6712)</h4>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>

        <section className="account">
          <div className="account-content-wrapper">
            <h4 className="account-title">Argent Bank Credit Card (x8349)</h4>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default User
