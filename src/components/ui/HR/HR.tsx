import React from 'react'

// Styles
import styles from './HR.module.scss'

// Types
interface IHRProps {
    style?: 'heavy' | 'standard' | 'light'
}

// Primary Component
export const HR: React.SFC<IHRProps> = props => <hr className={styles[props.style || 'standard']} />
