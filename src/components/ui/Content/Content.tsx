import React from 'react'

// Utils
import {concatStyles as s} from '../../../utils'

// Styles
import styles from './Content.module.scss'

// Types

interface IContentProps {
    children: JSX.Element | JSX.Element[]
    className?: string
}

// Documentation
/**
 * # Content
 *
 * A container component for primary page content
 *
 * ## Props
 *
 *  | **Prop**   	| **Type**                             	        | **Description**                      	    |
 *  |------------	|-----------------------------------------------|-------------------------------------------|
 *  | children   	| _JSX.Element[]_           	                | Elements to display in group 	            |
 *  | className? 	| _string_                             	        | Additional class to apply to group  	    |
 *
 * ## Example
 *
 * ```jsx
 *  <Content>
 *      <ToggleSection headerContent="Hello" children="Secret" />
 *  </Content>
 * ```
 */
export const Content = (props: IContentProps) => {
    const {children, className} = props
    const classList = s(styles.content, className)

    return <main className={classList}>{children}</main>
}
