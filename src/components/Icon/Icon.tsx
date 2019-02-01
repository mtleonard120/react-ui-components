// React
import React from 'react'

// Utils
import {concatStyles as s} from '../../utils'

// Styles
import styles from './Icon.module.scss'

// Types
interface IIconProps {
    className?: string
    containerClassName?: string
    iconName: string
    size?: 'small' | 'medium' | 'large' | 'xl'
    title?: string
    useContainer?: boolean
    onClick?: (args?: any) => any
}

// Primary Component
export const Icon = (props: IIconProps) => {
    return (
        <span
            className={s(!!props.onClick && styles.clickable, props.containerClassName, styles.container)}
            title={props.title}
            onClick={props.onClick}
        >
            <span className={s(styles[props.iconName], styles[props.size || 'medium'])} />
        </span>
    )
}
