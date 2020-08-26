import Head from 'next/head'
import Link from 'next/link'
import { NextPage } from 'next'
import { Hero } from '../components/Hero'
import { Section } from '../components/Section'
import { Ratio } from '../components/Ratio'
import s from '../styles/index.module.css'
import { MobileMenu } from '../components/MobileMenu'
import { createBreakpoint } from 'react-use'

const useBreakpoint = createBreakpoint({ mobile: 0, desktop: 1025 })

const Index: NextPage = () => {
   const isMobile = useBreakpoint() === 'mobile'

   return (
      <>
         <Head>
            <title>СКАЖИ.РФ</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         {isMobile && <MobileMenu />}
         <main
            style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}
         >
            <span
               className={s.animatedBg}
               style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
               }}
            >
               <Section
                  style={{
                     flex: 1,
                     minHeight: '100vh',
                     height: '100%',
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'space-between',

                     paddingBottom: '3%',
                  }}
               >
               <div
                  style={{
                     display: 'flex',
                     justifyContent: 'space-between',

                     fontWeight: 'bold',
                     letterSpacing: '.25rem',
                     textTransform: 'uppercase',
                     color: 'white',
                  }}
               >
                  <span>
                     скажи.рф
                  </span>
                  {!isMobile && (
                     <span>
                        почта
                     </span>
                  )}
               </div>
               <Hero />
               <div
                  style={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     
                     letterSpacing: '.25rem',
                     textTransform: 'uppercase',
                     fontWeight: 'bold',
                  }}
               >
                  {!isMobile && (
                     <>
                        <span
                           style={{
                              padding: '12px',
                           }}
                        >
                           о проекте 
                        </span>
                        <span
                           style={{
                              padding: '12px',
                           }}
                        >
                           карта идей
                        </span>
                        <span
                           style={{
                              padding: '12px',
                           }}
                        >
                           вопросы
                        </span>
                     </>
                  )}
               </div>
               
               </Section>
            </span>
            <Section
               style={{
                  width: '100%',
                  minHeight: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',

                  backgroundImage: 'url(/static/map.svg)',
                  backgroundPosition: 'bottom',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  
                  paddingBottom: '3%',
               }}
            >
               <Ratio
                  left={7}
                  right={3}
                  leftContent={(
                     <p>
                        Проект создан на базе студии проектирования городской среды design::unit. Изначально мы осуществляли «точечное» решения, расчитанное на конкретные города России и заданные районы города. Для того, чтобы оперативно собрать общественное мнение жителей.
                        <br /><br />
                        <span
                           style={{
                              fontWeight: 'bold',
                           }}
                        >
                           Как это работает?
                        </span>
                        <br /><br />
                        Найдите на карте свой город, улицу и даже дом; выберете что вы хотите отметить идею, ценность или проблему. Затем укажите точку на карте и напишите свой комментарий во всплывающем окне.
                        <br /><br />
                        Ждем предложений. Высказывайте свои идеи и ценности, опиши свои настроения и эмоции.
                     </p>
                  )}
               />
               <button
                  style={{
                     width: '470px',
                     maxWidth: '100%',
                     alignSelf: 'center',
                     padding: '25px',
                     backgroundColor: 'var(--color-blue)',
                     border: 'none',
                     borderRadius: '10px',
                     boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

                     fontWeight: 'bold',
                     letterSpacing: '.25em',
                     textTransform: 'uppercase',

                     color: 'white',
                  }}
               >
                  карта идей
               </button>
               <Ratio
                  style={{
                     marginTop: '2rem',

                     textAlign: 'right',
                     letterSpacing: '.25rem',
                  }}
                  left={5}
                  right={5}
                  rightContent={(
                     <>
                        разработано в студии {' '}
                        <Link href='#' >
                           <a
                              style={{
                                 textDecoration: 'underline',
                              }}
                           >
                              design::unit
                           </a>
                        </Link>
                        {' '} ©2020
                     </>
                  )}
               />
            </Section>
         </main>
      </>
   )
}

export default Index