import React from 'react'

// Icomoon
import iconPaths from './selection.js'

// Utils
import {concatStyles as s} from '../../utils'

// Helpers
const getPath = (iconName: string) => {
    const icon = iconPaths.icons.find(icon => icon.properties.name === iconName)

    if (icon) {
        return icon.icon.paths.join(' ')
    }
}

// Styles
import styles from './Icon.module.scss'

// Types
interface IIconProps {
    className?: string
    iconName: string
    size?: 'small' | 'medium' | 'large' | 'xl'
    title?: string
    onClick?: (args?: any) => any
}

// Primary Component
export const Icon = (props: IIconProps) => {
    const {className, iconName, size, ...rest} = props

    return (
        <svg className={s(className, styles[props.size || 'medium'], styles.icon)} {...rest} viewBox='0 0 1024 1024'>
            <path d={getPath(props.iconName)} />
        </svg>
    )
}
