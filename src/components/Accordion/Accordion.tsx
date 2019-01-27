import React from 'react'

// Components
import {ToggleSection} from '..'

// Utils
import {concatStyles as s} from '../../utils'

// Styles
import styles from './Accordion.module.scss'

// Types
interface IAccordionProps {
    children: JSX.Element[]
    className?: string
}

// Documentation
/**
 * # Accordion
 *
 * A container component for a group of several <ToggleSection>s
 *
 * ## Props
 *
 *  | **Prop**   	| **Type**                             	        | **Description**                      	    |
 *  |------------	|-----------------------------------------------|-------------------------------------------|
 *  | children   	| _JSX.Element[]_           	                | Elements to display in group 	            |
 *  | className? 	| _string_                             	        | Additional class to apply to group  	    |
 *  | direction?   	| 'row' or 'column'                    	        | Direction in which group should display 	|
 *  | justify?     	| 'start', 'end', 'between', 'around' or 'even' | How to justify content (flexbox)    	    |
 *
 * ## Example
 *
 * ```jsx
 *  <Accordion justify='start' direction='column'>
 *      <Button role='primary' title='thing' children='Test' />
 *      <Button role='secondary' title='thing1' children='Test1' />
 *      <Button role='danger' title='thing2' children='Test2' />
 *  </Accordion>
 * ```
 */
export const Accordion = (props: IAccordionProps) => {
    const {children, className, direction = 'row', justify = 'start'} = props
    const classList = s(styles[justify], styles[direction], styles.group, className)

    return <div className={classList}>{children}</div>
}
