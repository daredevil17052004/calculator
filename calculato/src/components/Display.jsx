import React from 'react'
import Key from './Key'
import styles from './styles.module.css'

const Display = ({expre}) => {
  console.log(expre)
  return (
    <div className={styles.inpu}><input type="text" value={expre} style={{textAlign:'right'}}/></div>
  )
}

export default Display