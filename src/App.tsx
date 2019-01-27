import React from 'react'

// Components
import {Button} from './components'
import {ButtonGroup} from './components/ButtonGroup/ButtonGroup'

export class App extends React.Component {
    public render() {
        return (
            <ButtonGroup justify='start' direction='column'>
                <Button role='primary' title='thing' children='Test' />
                <Button role='secondary' title='thing1' children='Test1' />
                <Button role='danger' title='thing2' children='Test2' />
            </ButtonGroup>
        )
    }
}
