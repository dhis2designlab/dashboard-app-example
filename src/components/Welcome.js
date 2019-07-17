import React from 'react'
import styled from 'styled-components'
import { useDataQuery } from '@dhis2/app-runtime'
import { CircularLoader } from '@dhis2/ui-core'

const query = { me: { resource: 'me', fields: 'displayName' } }

const StyledHeading = styled.h1`
    font-size: 8vw;
    font-weight: 500;
`

export const Welcome = () => {
    const { loading, error, data } = useDataQuery(query)

    if (loading) return <CircularLoader />

    if (error) return `ERROR: ${error.message}`

    return <StyledHeading>Welcome, {data.me.displayName}</StyledHeading>
}
