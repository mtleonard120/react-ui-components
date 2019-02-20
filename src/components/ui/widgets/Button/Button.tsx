import React from 'react'

// Utils
import {concatStyles as s} from '../../../../utils'

// Styles
import styles from './Button.module.scss'

// Types
type ButtonRole = 'primary' | 'secondary' | 'danger'
type ButtonShape = 'rounded' | 'square' | 'soft'
type ButtonFill = 'fill' | 'outline' | 'none'

interface IButtonProps {
    children: JSX.Element | string
    className?: string
    fill?: ButtonFill
    onClick?: () => void
    role?: ButtonRole
    shape?: ButtonShape
    title?: string
}

// Bitsrc Documentation
/**
 * # Button
 *
 * A standard button component with options for role and shape
 *
 * ## Props
 *
 *  | **Prop**   	| **Type**                             	| **Description**                      	|
 *  |------------	|--------------------------------------	|--------------------------------------	|
 *  | children   	| _JSX.Element_ or _string_           	| Text or Element to display in button 	|
 *  | className? 	| _string_                             	| Additional class to apply to button  	|
 *  | fill?     	| 'fill' or 'outline' or 'none'        	| Fill of the button                  	|
 *  | onClick?   	| () => _void_                         	| Function to execute on button press  	|
 *  | role       	| 'primary' or 'secondary' or 'danger' 	| Role the button plays                	|
 *  | shape?     	| 'rounded' or 'square' or 'oval'   	| Shape of the button                  	|
 *  | title?     	| _string_                             	| Tooltip text                         	|
 *
 * ## Example
 *
 * ```jsx
 *  <Button context='primary' title='This is a tooltip' children='Press Me!' />
 * ```
 */
export const Button = (props: IButtonProps) => {
    const {shape = 'rounded', fill = 'fill', children, className, role = 'primary', ...rest} = props
    const styleList = s(styles[fill], styles[role], styles[shape], styles.button, className)

    return (
        <button className={styleList} {...rest}>
            {children}
        </button>
    )
}
