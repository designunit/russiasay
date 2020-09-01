import { Section } from "../Section"
import { Ratio } from "../Ratio"
import Link from "next/link"
import s from './index.module.css'

export const About: React.FC = () => {
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
                            Проект создан на базе студии проектирования городской среды design::unit. Изначально мы осуществляли «точечное» решения, расчитанное на конкретные города России и заданные районы города. Для того, чтобы оперативно собрать общественное мнение жителей.
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
                            Найдите на карте свой город, улицу и даже дом; выберете что вы хотите отметить идею, ценность или проблему. Затем укажите точку на карте и напишите свой комментарий во всплывающем окне.
                        </p>
                        <p
                            style={{
                                marginBottom: '1rem',
                            }}
                        >
                            Ждем предложений. Высказывайте свои идеи и ценности, опиши свои настроения и эмоции.
                        </p>
                    </>
                )}
            />
            <button
                className={s.button}
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
                    <p>
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
                    </p>
                )}
            />
        </Section>
    )
}