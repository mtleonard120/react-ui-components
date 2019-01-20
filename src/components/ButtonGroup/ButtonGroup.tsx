import React from 'react'

// Utils
import {s} from '../../utils'

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

// Primary Component
export const ButtonGroup = (props: IButtonGroupProps) => {
    const {children, className, direction = 'row', justify = 'start'} = props
    const classList = s(styles[justify], styles[direction], styles.group, className)

    return <div className={classList}>{children}</div>
}
