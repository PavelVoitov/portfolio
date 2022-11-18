import React from 'react'
import s from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
  return (
      <div className={s.mainBlock}>
          <div className={styleContainer.container}>
              <div className={s.mainText}>
                  <h3 className={s.firstName}>Pavel</h3>
                  <h3 className={s.lastName}>Voitov</h3>
                  <span>Frontend Developer</span>
              </div>
              <div className={s.mainPhoto}></div>
          </div>
      </div>
  )
}