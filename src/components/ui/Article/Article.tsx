import React from 'react'

// Components
import {HR} from '..'

// Utils
import {concatStyles as s} from '../../../utils'

// Styles
import styles from './Article.module.scss'

// Types
interface IArticleProps {
    children: JSX.Element | JSX.Element[]
    className?: string
    title: string
    titleClassName?: string
}

// Primary Component
export const Article: React.SFC<IArticleProps> = props => {
    const {children, className, title, titleClassName} = props

    return (
        <article className={s(className, styles.article)}>
            <h2 className={s(titleClassName, styles.title)}>{title}</h2>
            <HR style='heavy' />
            {children}
        </article>
    )
}
