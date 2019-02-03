import React from 'react'

// Components
import {Accordion, Button, ButtonGroup, Content, TogglePanel, Example} from './components'

// Styles
import styles from './App.module.scss'

// Helpers
const SubExample = (props: {label: string; children: JSX.Element[] | JSX.Element}) => (
    <div className={styles.subexample}>
        <label>{`${props.label}: `}</label>
        <div>{props.children}</div>
    </div>
)

export class App extends React.Component {
    public render() {
        return (
            <Content>
                <article>
                    <h1>UI Component Playground</h1>

                    <Example name='Button' description='A standard button component with options for role and shape.'>
                        <SubExample label='Rounded and Primary'>
                            <Button role='primary' title='thing1' children='Test1' />
                        </SubExample>
                        <SubExample label='Square and Secondary'>
                            <Button role='secondary' title='thing2' children='Test2' shape='square' />
                        </SubExample>
                        <SubExample label='Rounded and Danger'>
                            <Button role='danger' title='thing2' children='Delete' shape='rounded' />
                        </SubExample>
                    </Example>
                    <Example
                        name='Button Group'
                        description='A container component for a group of several elements, typically <Button>s'
                    >
                        <SubExample label='Row'>
                            <ButtonGroup justify='start'>
                                <Button role='primary' title='thing' children='Test' />
                                <Button role='secondary' title='thing1' children='Test1' />
                                <Button role='danger' title='thing2' children='Test2' />
                            </ButtonGroup>
                        </SubExample>
                        <SubExample label='Column'>
                            <ButtonGroup justify='start' direction='column'>
                                <Button role='primary' title='thing' children='Test' />
                                <Button role='secondary' title='thing1' children='Test1' />
                                <Button role='danger' title='thing2' children='Test2' />
                            </ButtonGroup>
                        </SubExample>
                    </Example>
                    <Example
                        name='Toggle Section'
                        description='A header line with a toggleable content container. Component maintains local state
                    but can be overridden by passing an updated value for the isOpen prop'
                    >
                        <TogglePanel headingContent='Details'>This is some hidden content</TogglePanel>
                    </Example>
                    <Example
                        name='Accordion'
                        description='A container component for a group of several <TogglePanel>s.'
                    >
                        <SubExample label='Single Open Slot Allowed'>
                            <Accordion
                                singleSlotAllowed
                                slots={[
                                    {headerContent: 'Hello1', bodyContent: 'Secret Text 1'},
                                    {headerContent: 'Hello2', bodyContent: 'Secret Text 2'},
                                ]}
                            />
                        </SubExample>
                        <SubExample label='Multiple Open Slots Allowed'>
                            <Accordion
                                slots={[
                                    {headerContent: 'Hello3', bodyContent: 'Secret Text 3'},
                                    {headerContent: 'Hello4', bodyContent: 'Secret Text 4'},
                                ]}
                            />
                        </SubExample>
                    </Example>
                </article>
            </Content>
        )
    }
}
