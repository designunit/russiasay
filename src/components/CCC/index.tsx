import { Ratio } from "../Ratio"
import s from './styles.module.css'
import { useRef } from "react"

export const CCC: React.FC = () => {

   const ref = useRef(null)

   return (
      <>
         <Ratio
            style={{
               display: 'flex',
               width: '100%',
               justifyContent: 'center',
            }}
            left={'0 0 50%'}
            right={'0 0 50%'}
            leftContent={(
               <h1
                  ref={ref}
                  className={s.h1}
                  style={{
                     // @ts-ignore
                     fontSize: `${Math.min(ref.current?.clientWidth / 5, 135)}px`,
                  }}
               >
                  <span>
                     СКАЖИ
                  </span>
                  <span>
                     СВОЕ
                  </span>
                  <span>
                     СЛОВО!
                  </span>
               </h1>
            )}
            rightContent={(
               <img
                  src='/static/hero.svg'
                  className={s.image}
               />
            )}
         />
      </>
   )
}