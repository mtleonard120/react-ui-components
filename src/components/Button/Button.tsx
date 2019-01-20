import React from 'react'

// Utils
import {s} from '../../utils'

// Styles
import styles from './Button.module.scss'

// Types
type ButtonContext = 'primary' | 'secondary' | 'danger'
type ButtonAppearance = 'round' | 'square' | 'oval'

interface IButtonProps {
    children: JSX.Element | string
    onClick?: () => void
    context: ButtonContext
    appearance?: ButtonAppearance
    className?: string
    title?: string
}

// Primary Component
export const Button = (props: IButtonProps) => {
    const {appearance = 'round', children, className, context, ...rest} = props
    const classList = s(styles[context], styles[appearance], styles.button, className)

    return (
        <button className={classList} {...rest}>
            {children}
        </button>
    )
}
