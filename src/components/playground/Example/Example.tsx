import React from 'react'

// Apollo

// Packages

// Components

// Utils

// Styles
import styles from './Example.module.scss'

// Types
interface IExampleProps {
    name: string
    description: string | undefined
}

// Helpers

// Primary Component
export const Example: React.SFC<IExampleProps> = props => {
    const {name, description, children} = props
    return (
        <section>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className={styles.example}>{children}</div>
        </section>
    )
}
