import React from 'react'
import { node } from 'prop-types'
import styled from 'styled-components'

const StyledMain = styled.main`
    display: flex;
    justify-content: center;
`

export const Main = ({ children }) => <StyledMain>{children}</StyledMain>

Main.propTypes = { children: node.isRequired }
