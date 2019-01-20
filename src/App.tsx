import React from 'react'

// Components
import {Button} from './components'

export class App extends React.Component {
    public render() {
        return (
            <div>
                <Button context='primary' title='thing'>
                    Test
                </Button>
            </div>
        )
    }
}
