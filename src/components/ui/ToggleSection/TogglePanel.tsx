import React from 'react'

// Utils
import {concatStyles as s} from '../../../utils'

// Styles
import styles from './TogglePanel.module.scss'
import {Icon} from '../Icon'

// Types
interface ITogglePanelProps {
    children: JSX.Element | string
    className?: string
    contentClassName?: string
    controlled?: boolean
    customClosedIcon?: JSX.Element
    customOpenIcon?: JSX.Element
    disabled?: boolean
    headingClassName?: string
    headingContent: JSX.Element | string
    iconClassName?: string
    isOpen?: boolean
    onToggle?: () => void
}

interface ITogglePanelState {
    isOpen?: boolean
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
 *  | controlled?       | _boolean_                 | Indicates component is to be parent controlled  |
 *  | customClosedIcon? | _JSX.Element_             | Replaces default fontawesome down arrow icon    |
 *  | customOpenIcon?   | _JSX.Element_             | Replaces default fontawesome up arrow icon      |
 *  | disabled?         | _boolean_                 | Disables the ability to toggle the section      |
 *  | headingClassName? | _string_                  | Additional class to apply to header  	          |
 *  | headingContent    | _JSX.Element_ or _string_ | Content to display in clickable header 	      |
 *  | iconClassName?    | _string_                  | Additional class to apply to icon  	          |
 *  | isOpen?     	    | _boolean_                 | Indicates if toggle section is open 	          |
 *  | onToggle?     	| () => _void_              | Function to call on toggle     	              |
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
export class TogglePanel extends React.Component<ITogglePanelProps, ITogglePanelState> {
    constructor(props: ITogglePanelProps) {
        super(props)
        this.state = {
            isOpen: props.isOpen || false,
        }
    }

    // Event Handlers
    public toggle = () => {
        if (this.props.onToggle) {
            this.props.onToggle()
        }

        this.setState((oldState: ITogglePanelState) => {
            return {isOpen: !oldState.isOpen}
        })
    }

    // Lifecycle Methods
    public componentWillUpdate = () => {
        if (this.props.controlled) {
            this.setState({isOpen: this.props.isOpen})
        }
    }

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
            headingClassName,
            headingContent,
        } = this.props

        // TODO: Add icomoon icons to indicate open/close actions
        return (
            <div className={s(styles.container, className)}>
                <div
                    className={s(styles.heading, disabled && styles.disabled, headingClassName)}
                    onClick={disabled ? undefined : this.toggle}
                >
                    <span>{headingContent}</span>
                    {!isOpen && (customClosedIcon || <Icon iconName='circle-down' size='small' />)}
                    {isOpen && (customOpenIcon || <Icon iconName='circle-up' size='small' />)}
                </div>
                {isOpen && <div className={s(styles.content, contentClassName)}>{children}</div>}
            </div>
        )
    }
}
