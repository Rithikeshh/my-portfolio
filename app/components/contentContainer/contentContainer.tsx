import React from 'react'
import styles from './contentContainer.module.css'

function ContentContainer({children}:{children : React.ReactNode}) {
  return (
    <div className='overflow-hidden'>
      <div  className={`${styles.container} dark:bg-white dark:shadow-xl`}>
        {children}
      </div>
    </div>
  )
}

export default ContentContainer
