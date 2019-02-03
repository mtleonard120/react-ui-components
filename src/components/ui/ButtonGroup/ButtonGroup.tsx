import React from 'react'

// Utils
import {concatStyles as s} from '../../../utils'

// Styles
import styles from './ButtonGroup.module.scss'

// Types
type JustifyType = 'start' | 'end' | 'between' | 'around' | 'even'
type DirectionType = 'row' | 'column'

interface IButtonGroupProps {
    children: JSX.Element[]
    className?: string
    direction?: DirectionType
    justify?: JustifyType
}

// Documentation
/**
 * # ButtonGroup
 *
 * A container component for a group of several elements, typically <Button>s
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
 *  <ButtonGroup justify='start' direction='column'>
 *      <Button role='primary' title='thing' children='Test' />
 *      <Button role='secondary' title='thing1' children='Test1' />
 *      <Button role='danger' title='thing2' children='Test2' />
 *  </ButtonGroup>
 * ```
 */
export const ButtonGroup = (props: IButtonGroupProps) => {
    const {children, className, direction = 'row', justify = 'start'} = props
    const classList = s(styles[justify], styles[direction], styles.group, className)

    return <div className={classList}>{children}</div>
}
