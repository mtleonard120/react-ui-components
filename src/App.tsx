import React from 'react'

// Components
import {Button} from './components'
import {ButtonGroup} from './components/ButtonGroup/ButtonGroup'

export class App extends React.Component {
    public render() {
        return (
            <ButtonGroup justify='start' direction='column'>
                <Button context='primary' title='thing' children='Test' />
                <Button context='secondary' title='thing1' children='Test1' />
                <Button context='danger' title='thing2' children='Test2' />
            </ButtonGroup>
        )
    }
}
