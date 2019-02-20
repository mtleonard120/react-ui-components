import React from 'react'

// Components
import {Icon} from '../..'

// Utils
import {concatStyles as s} from '../../../../utils'

// Styles
import styles from './TogglePanel.module.scss'

// Types
interface ITogglePanelProps {
    children: JSX.Element | string
    className?: string
    contentClassName?: string
    customClosedIcon?: JSX.Element
    customOpenIcon?: JSX.Element
    disabled?: boolean
    headingClassName?: string
    headingContent: JSX.Element | string
    iconClassName?: string
    isOpen?: boolean
    isLast?: boolean
    onClick?: () => void
}

// Documentation
/**
 * # TogglePanel
 *
 * A header line with a toggleable content container. Component maintains local state
 * but can be overridden by passing an updated value for the isOpen prop
 *
 * ## Props
 *
 *  | **Prop**   	    | **Type**                  | **Description**                      	          |
 *  |-------------------|---------------------------|-------------------------------------------------|
 *  | children   	    | _JSX.Element_ or _string_ | Content to display within toggle section        |
 *  | className? 	    | _string_                  | Additional class to apply to component wrapper  |
 *  | contentClassName? | _string_                  | Additional class to apply to content section    |
 *  | customClosedIcon? | _JSX.Element_             | Replaces default fontawesome down arrow icon    |
 *  | customOpenIcon?   | _JSX.Element_             | Replaces default fontawesome up arrow icon      |
 *  | disabled?         | _boolean_                 | Disables the ability to toggle the section      |
 *  | headingClassName? | _string_                  | Additional class to apply to header  	          |
 *  | headingContent    | _JSX.Element_ or _string_ | Content to display in clickable header 	      |
 *  | iconClassName?    | _string_                  | Additional class to apply to icon  	          |
 *  | isOpen?     	    | _boolean_                 | Indicates if toggle section is open 	          |
 *  | isLast?     	    | _boolean_                 | Indicates if toggle section is last in Accordion|
 *  | onClick?     	    | () => _void_              | Function to call on header click	              |
 *
 *
 * ## Example
 *
 * ```jsx
 *  <TogglePanel headerContent="Details" isOpen={true} >
 *      <p>This is some toggleable content</p>
 *  </TogglePanel>
 * ```
 */
export const TogglePanel: React.SFC<ITogglePanelProps> = props => {
    const {
        children,
        className,
        contentClassName,
        customClosedIcon,
        customOpenIcon,
        disabled,
        iconClassName,
        isOpen,
        isLast,
        headingClassName,
        headingContent,
        onClick,
    } = props

    return (
        <div className={s(styles.container, className)}>
            <button
                className={s(
                    headingClassName,
                    styles.heading,
                    disabled && styles.disabled,
                    isLast && styles.last,
                    isOpen && styles.open
                )}
                onClick={onClick}
            >
                <span>{headingContent}</span>
                {!isOpen && (customClosedIcon || <Icon iconName='circle-down' className={iconClassName} />)}
                {isOpen && (customOpenIcon || <Icon iconName='circle-up' className={iconClassName} />)}
            </button>
            {isOpen && <div className={s(styles.content, contentClassName, isLast && styles.last)}>{children}</div>}
        </div>
    )
}
