import React from 'react'
import { useSelector } from 'react-redux'
import { NotFoundMain, NotFoundContent, Subtitle, Text } from '../styles/pages/notFound'

const NotFound = () => {
  const selectTheme = (state) => state.theme
  const theme = useSelector(selectTheme)

  return (
    <NotFoundMain theme={theme}>
      <NotFoundContent theme={theme}>
        <h2 className="sr-only">Page Not Found</h2>
        <Subtitle theme={theme}>404</Subtitle>
        <Text theme={theme}>Not found</Text>
      </NotFoundContent>
    </NotFoundMain>
  );
};

export default NotFound;