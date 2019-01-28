import React from 'react'

// Components
import {Button} from './components'
import {ButtonGroup} from './components/ButtonGroup/ButtonGroup'
import {ToggleSection} from './components/ToggleSection'
import {Accordion} from './components/Accordion/Accordion'

export class App extends React.Component {
    public render() {
        return (
            <div>
                <ButtonGroup justify='start'>
                    <Button role='primary' title='thing' children='Test' />
                    <Button role='secondary' title='thing1' children='Test1' />
                    <Button role='danger' title='thing2' children='Test2' />
                </ButtonGroup>
                <ToggleSection headerContent='Details'>This is some hidden content</ToggleSection>
                <Accordion
                    singleSlotAllowed
                    slots={[
                        {headerContent: 'Hello1', bodyContent: 'Secret Text 1'},
                        {headerContent: 'Hello2', bodyContent: 'Secret Text 2'},
                    ]}
                />
            </div>
        )
    }
}
