import React from 'react'

// Components
import {TogglePanel} from '..'

// Utils
import {concatStyles as s} from '../../../../utils'

// Styles
import styles from './Accordion.module.scss'

// Types
interface ISlot {
    headerContent: JSX.Element | string
    bodyContent: JSX.Element | string
}

interface IAccordionProps {
    className?: string
    singleSlotAllowed?: boolean
    slots: ISlot[]
}

interface IAccordionState {
    openIndices: number[]
}

// Documentation
/**
 * ## Accordion
 *
 * A container component for a group of several <TogglePanels>s.
 *
 * ## Props
 *
 *  | **Prop**   	    | **Type**   | **Description**                      	 |
 *  |-------------------|------------|-------------------------------------------|
 *  | className? 	    | _string_   | Additional class to apply to group  	     |
 *  | singleSlotAllowed | _boolean_  | Only allow one slot open at a time?       |
 *  | slots   	        | _ISlot[]_  | Elements to display in group 	         |
 *
 * ## Example
 *
 * ```jsx
 *  <Accordion slots={[{headerContent: "Hello", bodyContent: "Secret Text"}]} />
 * ```
 */
export class Accordion extends React.Component<IAccordionProps, IAccordionState> {
    constructor(props: IAccordionProps) {
        super(props)
        this.state = {
            openIndices: [],
        }
    }

    // Event Handlers
    public onSlotOpen = (index: number) => {
        this.setState((oldState: IAccordionState) => {
            if (this.props.singleSlotAllowed) {
                return {openIndices: oldState.openIndices.includes(index) ? [] : [index]}
            } else {
                let result = [...oldState.openIndices]
                const isOpenAlready = result.includes(index)

                if (isOpenAlready) {
                    result = result.filter(i => i !== index)
                } else {
                    result.push(index)
                }

                return {openIndices: result}
            }
        })
    }

    public render = () => {
        const {className, slots} = this.props

        return (
            <div className={s(styles.accordion, className)}>
                {slots.map((slot: ISlot, i: number) => {
                    const isLast = i === slots.length - 1
                    const isOpen = this.state.openIndices.includes(i)
                    return (
                        <TogglePanel
                            headingClassName={s(styles.panel, isLast && styles.last, isOpen && styles.open)}
                            key={i}
                            headingContent={slot.headerContent}
                            isOpen={isOpen}
                            isLast={isLast}
                            onClick={() => this.onSlotOpen(i)}
                        >
                            {slot.bodyContent}
                        </TogglePanel>
                    )
                })}
            </div>
        )
    }
}
