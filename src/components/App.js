import React from 'react'
import { DataProvider } from '@dhis2/app-runtime'
import { CssReset } from '@dhis2/ui-core'
import { Main } from './Main'
import { Welcome } from './Welcome'
import 'typeface-roboto'

export const App = ({ baseUrl, apiVersion }) => (
    <DataProvider baseUrl={baseUrl} apiVersion={apiVersion}>
        <CssReset />
        <Main>
            <Welcome />
        </Main>
    </DataProvider>
)
