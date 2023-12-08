import React, { useState } from 'react'
import styles from './styles.module.css'
import Display from './Display'

const Key = () => {

    const [expression,setExpression] = useState('')

    const handleBtn =(value)=>{
        setExpression(expression+value)
    }

    const handleDel = ()=>{
        setExpression(expression.substring(0,expression.length -1 ))
    }

    const handleValue = () =>{
        if(typeof(expression) != 'string'){
            let exl =expression;
            exl = exl.toString()
        }
        setExpression(eval(expression))
    }

    const handleAc = () =>{
        setExpression('')
    }

  return (
    <div>
        <div className={styles.kl}>
          <Display expre={expression}/>
            <div className={styles.main}>
              <div className={styles.keys} onClick={handleAc}>AC</div>
              <div className={styles.keys} onClick={handleDel}>DEL</div>
              <div className={styles.keys} onClick={()=>handleBtn('-')}>-</div>
            </div>
            <div className={styles.main}>
              <div className={styles.keys} onClick={()=>handleBtn(7)}>7</div>
              <div className={styles.keys} onClick={()=>handleBtn(8)}>8</div>
              <div className={styles.keys} onClick={()=>handleBtn(9)}>9</div>
              <div className={styles.keys} onClick={()=>handleBtn('/')}>/</div>

            </div>
            <div className={styles.main}>
              <div className={styles.keys} onClick={()=>handleBtn(4)}>4</div>
              <div className={styles.keys} onClick={()=>handleBtn(5)}>5</div>
              <div className={styles.keys} onClick={()=>handleBtn(6)}>6</div>
              <div className={styles.keys} onClick={()=>handleBtn('*')}>*</div>

            </div>
            <div className={styles.main}>
              <div className={styles.keys} onClick={()=>handleBtn(1)}>1</div>
              <div className={styles.keys} onClick={()=>handleBtn(2)}>2</div>
              <div className={styles.keys} onClick={()=>handleBtn(3)}>3</div>
              <div className={styles.keys} onClick={()=>handleBtn('+')}>+</div>
            </div>
            <div className={styles.main}>
                <div className={styles.keys} onClick={()=>handleBtn(0)}>0</div>
                <div className={styles.keys} onClick={handleValue}>=</div>
            </div>
            
        </div>
    </div>
  )
}

export default Key
