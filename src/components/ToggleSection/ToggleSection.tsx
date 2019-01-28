import React from 'react'

// Packages
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons'

// Utils
import {concatStyles as s} from '../../utils'

// Styles
import styles from './ToggleSection.module.scss'

// Types
interface IToggleSectionProps {
    children: JSX.Element | string
    className?: string
    contentClassName?: string
    customClosedIcon?: JSX.Element
    customOpenIcon?: JSX.Element
    disabled?: boolean
    headerClassName?: string
    headerContent: JSX.Element | string
    iconClassName?: string
    isOpen?: boolean
    onToggle?: () => void
}

interface IToggleSectionState {
    isOpen: boolean
}

// Documentation
/**
 * # ToggleSection
 *
 * A header line with a toggleable content container. Component maintains local state
 * but can be overridden by passing an updated value for the isOpen prop
 *
 * ## Props
 *
 *  | **Prop**   	    | **Type**                  | **Description**                      	        |
 *  |-------------------|---------------------------|-----------------------------------------------|
 *  | children   	    | _JSX.Element_ or _string_ | Content to display within toggle section      |
 *  | className? 	    | _string_                  | Additional class to apply to component wrapper|
 *  | contentClassName? | _string_                  | Additional class to apply to content section  |
 *  | customClosedIcon? | _JSX.Element_             | Replaces default fontawesome down arrow icon  |
 *  | customOpenIcon?   | _JSX.Element_             | Replaces default fontawesome up arrow icon    |
 *  | disabled?         | _boolean_                 | Disables the ability to toggle the section    |
 *  | headerClassName?  | _string_                  | Additional class to apply to header  	        |
 *  | headerContent     | _JSX.Element_ or _string_ | Content to display in clickable header 	    |
 *  | iconClassName?    | _string_                  | Additional class to apply to icon  	        |
 *  | isOpen?     	    | _boolean_                 | Indicates if toggle section is open 	        |
 *  | onToggle?     	| () => _void_              | Function to call on toggle     	            |
 * ## Example
 *
 * ```jsx
 *  <ToggleSection headerContent="Details" isOpen={true} >
 *      <p>This is some toggleable content</p>
 *  </ToggleSection>
 * ```
 */
export class ToggleSection extends React.Component<IToggleSectionProps, IToggleSectionState> {
    static getDerivedStateFromProps = (newProps: IToggleSectionProps) => {
        if (!newProps.onToggle) {
            return null
        } else {
            return {isOpen: newProps.isOpen}
        }
    }

    constructor(props: IToggleSectionProps) {
        super(props)
        this.state = {
            isOpen: props.isOpen || false,
        }
    }

    // Event Handlers
    public toggle = () => {
        this.setState((oldState: IToggleSectionState) => {
            if (this.props.onToggle) {
                this.props.onToggle()
            }
            return {isOpen: !oldState.isOpen}
        })
    }

    // Lifecycle Methods
    public render = () => {
        const {isOpen} = this.state
        const {
            children,
            className,
            contentClassName,
            customClosedIcon,
            customOpenIcon,
            disabled,
            iconClassName,
            headerClassName,
            headerContent,
        } = this.props

        return (
            <div className={s(styles.container, className)}>
                <div
                    className={s(styles.header, disabled && styles.disabled, headerClassName)}
                    onClick={disabled ? undefined : this.toggle}
                >
                    {headerContent}
                    <span className={s(styles.icon, iconClassName)}>
                        {!isOpen && (customClosedIcon || <FontAwesomeIcon icon={faAngleDown} />)}
                        {isOpen && (customOpenIcon || <FontAwesomeIcon icon={faAngleUp} />)}
                    </span>
                </div>
                {isOpen && <div className={s(styles.content, contentClassName)}>{children}</div>}
            </div>
        )
    }
}
