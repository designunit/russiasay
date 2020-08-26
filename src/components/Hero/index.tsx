import { Section } from "../Section"
import { Ratio } from "../Ratio"
import s from './styles.module.css'

export const Hero: React.FC = () => {

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
                  className={s.h1}
               >
                  СКАЖИ<br />СВОЕ<br />СЛОВО!
               </h1>
            )}
            rightContent={(
               <img
                  src='/static/hero.svg'
                  style={{
                     height: '100%',
                     width: '100%',
                  }}
               />
            )}
         />
      </>
   )
}