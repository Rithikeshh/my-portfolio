import React from 'react'
import styles from './contentContainer.module.css'

function ContentContainer({children}:{children : React.ReactNode}) {
  return (
    <div  className={styles.container}>
      {children}
    </div>
  )
}

export default ContentContainer
