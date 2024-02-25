import React from 'react'
import styles from './contentContainer.module.css'

function ContentContainer({children}:{children : React.ReactNode}) {
  return (
    <div >
      <div  className={styles.container}>
        {children}
      </div>
    </div>
  )
}

export default ContentContainer
