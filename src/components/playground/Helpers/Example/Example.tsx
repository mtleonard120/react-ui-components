import React from 'react'

// Styles
import styles from './Example.module.scss'

// Types
interface IExampleProps {
    name: string
    description: string | undefined
}

// Primary Component
export const Example: React.SFC<IExampleProps> = props => {
    const {name, description, children} = props
    return (
        <section className={styles.example}>
            <h3>{name}</h3>
            <p>{description}</p>
            {children}
        </section>
    )
}
