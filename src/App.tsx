import React from 'react'

// Components
import {Accordion, Button, ButtonGroup, Content, ToggleSection} from './components'

export class App extends React.Component {
    public render() {
        return (
            <Content>
                <h1>UI Component Playground</h1>

                <section>
                    <h3>Button</h3>
                    <Button role='primary' title='thing' children='Test' />
                </section>
                <section>
                    <h3>Button Group</h3>
                    <ButtonGroup justify='start'>
                        <Button role='primary' title='thing' children='Test' />
                        <Button role='secondary' title='thing1' children='Test1' />
                        <Button role='danger' title='thing2' children='Test2' />
                    </ButtonGroup>
                </section>
                <section>
                    <h3>Toggle Section</h3>
                    <ToggleSection headerContent='Details'>This is some hidden content</ToggleSection>
                </section>
                <section>
                    <h3>Accordion</h3>
                    <h5> --> Single Open Slot Allowed</h5>
                    <Accordion
                        singleSlotAllowed
                        slots={[
                            {headerContent: 'Hello1', bodyContent: 'Secret Text 1'},
                            {headerContent: 'Hello2', bodyContent: 'Secret Text 2'},
                        ]}
                    />
                    <h5> --> Multi Open Slot Allowed</h5>
                    <Accordion
                        slots={[
                            {headerContent: 'Hello3', bodyContent: 'Secret Text 3'},
                            {headerContent: 'Hello4', bodyContent: 'Secret Text 4'},
                        ]}
                    />
                </section>
            </Content>
        )
    }
}
