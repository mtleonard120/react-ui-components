import React from 'react'

// Components
import {Content, Button, Accordion, Article, Group, HR, Ipsum} from '../../ui'
import {Example, Subexample} from '..'

// Helpers
const onClick = () => alert('Button pressed!')

// Primary Component
export const Playground: React.SFC<{}> = () => (
    <Content>
        <Article title='UI Component Playground'>
            <Example name='Button' description='A standard button component with options for role and shape.'>
                <Group justify='around'>
                    <Subexample label='Rounded and Primary'>
                        <Button role='primary' title='Primary CTA' children='Rounded' onClick={onClick} />
                    </Subexample>
                    <Subexample label='Square and Secondary'>
                        <Button
                            role='secondary'
                            title='Secondary CTA'
                            children='Square'
                            shape='square'
                            onClick={onClick}
                        />
                    </Subexample>
                    <Subexample label='Rounded and Danger'>
                        <Button role='danger' title='Delete Item' children='Delete' shape='rounded' onClick={onClick} />
                    </Subexample>
                </Group>
            </Example>

            <HR style='light' />

            <Example
                name='Group'
                description='A container component for a group of several elements, typically <Button>s'
            >
                <Group justify='around'>
                    <Subexample label='Row'>
                        <Group justify='start'>
                            <Button role='primary' title='thing' children='Test' onClick={onClick} />
                            <Button role='secondary' title='thing1' children='Test1' onClick={onClick} />
                            <Button role='danger' title='thing2' children='Test2' onClick={onClick} />
                        </Group>
                    </Subexample>
                    <Subexample label='Column'>
                        <Group justify='start' direction='column'>
                            <Button role='primary' title='thing' children='Test' onClick={onClick} />
                            <Button role='secondary' title='thing1' children='Test1' onClick={onClick} />
                            <Button role='danger' title='thing2' children='Test2' onClick={onClick} />
                        </Group>
                    </Subexample>
                </Group>
            </Example>

            <HR style='light' />

            <Example name='Toggle Panel' description='A header line with a toggleable content container.'>
                <Accordion slots={[{headerContent: 'Open for Details', bodyContent: <Ipsum />}]} />
            </Example>

            <HR style='light' />

            <Example name='Accordion' description='A container component for a group of several <TogglePanel>s.'>
                <Group justify='around'>
                    <Subexample label='Single Open Slot Allowed'>
                        <Accordion
                            singleSlotAllowed
                            slots={[
                                {headerContent: 'Hello1', bodyContent: 'Secret Text 1'},
                                {headerContent: 'Hello2', bodyContent: 'Secret Text 2'},
                            ]}
                        />
                    </Subexample>
                    <Subexample label='Multiple Open Slots Allowed'>
                        <Accordion
                            slots={[
                                {headerContent: 'Hello3', bodyContent: 'Secret Text 3'},
                                {headerContent: 'Hello4', bodyContent: 'Secret Text 4'},
                            ]}
                        />
                    </Subexample>
                </Group>
            </Example>
        </Article>
    </Content>
)
