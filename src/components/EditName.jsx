import React, { useState } from 'react'
import styled from 'styled-components'

export const EditNameWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
  padding-top: 1rem;
`
const EditName = ({ editName }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <EditNameWrapper>
      <input
        value={firstName}
        type="text"
        onChange={(e) => {
          setFirstName(e.target.value)
        }}
      />
      <input
        value={lastName}
        type="text"
        onChange={(e) => {
          setLastName(e.target.value)
        }}
      />
      <button>Save</button>
      {/* <button onClick={() => {setEditName(!editName)}}>Cancel</button> */}
    </EditNameWrapper>
  )
}

export default EditName
