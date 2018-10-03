import React from 'react'
import { Footer, Container, Content } from 'bloomer'
import { APP_NAME } from 'appConstants'

const AppFooter = () => (
  <Footer>
    <Container>
      <Content hasTextAlign="centered">
        <p>
          <strong>{APP_NAME}</strong> made by{' '}
          <a href="https://github.com" target="blank">
            Author Name
          </a>
        </p>
        <p>
          The source code is available on{' '}
          <a href="https://github.com/" target="blank">
            GitHub
          </a> In development.
        </p>
      </Content>
    </Container>
  </Footer>
)

export default AppFooter
