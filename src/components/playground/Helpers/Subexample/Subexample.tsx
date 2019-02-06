import React from 'react'

// Styles
import styles from './Subexample.module.scss'

// Types
interface ISubexampleProps {
    children: JSX.Element
    label: string
}

// Primary Component
export const Subexample: React.SFC<ISubexampleProps> = props => {
    const {children, label} = props

    return (
        <div className={styles.subexample}>
            <h4>{label}</h4>
            {children}
        </div>
    )
}
