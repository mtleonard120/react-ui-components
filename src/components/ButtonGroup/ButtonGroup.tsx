import React from 'react'

// Utils
import {s} from '../../utils'

// Styles
import styles from './Button.module.scss'

// Types
type ButtonContext = 'primary' | 'secondary' | 'danger'

interface IButtonGroupProps {
    children: JSX.Element | string
    onClick?: () => void
    context: ButtonContext
    className?: string
    title?: string
}

// Primary Component
export const ButtonGroup = (props: IButtonGroupProps) => {
    const {children, className, context, ...rest} = props
    const classList = s(styles[context], className)

    return (
        <button className={classList} {...rest}>
            {children}
        </button>
    )
}
