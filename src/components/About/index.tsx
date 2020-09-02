import { Section } from "../Section"
import { Ratio } from "../Ratio"
import Link from "next/link"
import s from './index.module.css'
import ScrollTrigger from 'react-scroll-trigger'

export const About: React.FC<any> = ({ setMenuIsBlue }) => {
    return (
        <Section
            className={s.section}
        >
            <Ratio
                left={7}
                right={3}
                leftContent={(
                    <>
                        <p
                            style={{
                                marginBottom: '1rem',
                            }}
                        >
                            Проект создан на базе студии проектирования городской среды <span className={s.textUnit}>design::unit4</span> для того чтобы оперативно собирать общественное мнение жителей об устройстве городских территорий. 
                            Изначально мы осуществляли проекты в конкретных городах России: Урай, Краснокамск, Питкяранта и др. 
                            Активность общественности превзошла все наши ожидания и мы решили расширить проект. 
                        </p>
                        <p
                            style={{
                                fontWeight: 'bold',
                                marginBottom: '1rem',
                            }}
                        >
                            Как это работает?
                        </p>
                        <p
                            style={{
                                marginBottom: '1rem',
                            }}
                        >
                            Найдите на карте свой город, улицу и даже дом.
                            Выберете категорию: идея, ценность или проблема. 
                            Укажите точку на карте и напишите свой комментарий во всплывающем окне.
                        </p>
                        <p
                            style={{
                                marginBottom: '1rem',
                                fontWeight: 'bold',
                            }}
                        >
                            Ждем предложений.
                        </p>
                    </>
                )}
            />
            <Link href={'https://app.latl.ng/map/73RM6E47C2C3K5RT'}>
                <button
                    className={s.button}
                >
                    карта идей
                </button>
            </Link>
            <Ratio
                style={{
                    marginTop: '2rem',

                    textAlign: 'right',
                    letterSpacing: '.25rem',
                }}
                left={5}
                right={5}
                rightContent={(
                    <p>
                        разработано в студии {' '}
                        <Link 
                            href='https://unit4.io'
                        >
                            <span
                                className={s.linkUnit}
                            >
                                design::unit
                            </span>
                        </Link>
                        {' '} ©2020
                    </p>
                )}
            />
            {/* @ts-ignore */}
            <ScrollTrigger
                style={{
                    position: 'absolute',
                    bottom: '8%',
                }}
                onEnter={() => setMenuIsBlue(true)}
                onProgress={() => setMenuIsBlue(true)}
                onExit={() => setMenuIsBlue(false)}
            />
        </Section>
    )
}