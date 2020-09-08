import { Section } from "../Section"
import { Ratio } from "../Ratio"
import Link from "next/link"
import s from './index.module.css'
import ScrollTrigger from 'react-scroll-trigger'
import { Menu } from "../Menu"
import { modalContentType, buttonsType } from "../../pages"

interface IAboutProps {
    buttons: buttonsType
    setModalContent: (content: modalContentType) => void
    setMenuIsBlue: (IsBlue: boolean) => void
}

export const About: React.FC<IAboutProps> = ({ buttons, setModalContent, setMenuIsBlue }) => {
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
                            Проект создан на базе студии проектирования городской среды <span className={s.textUnit}>design::unit4</span> для того, чтобы оперативно собирать общественное мнение жителей об устройстве городских территорий.  
                        </p>
                        <p
                            style={{
                                marginBottom: '1rem',
                            }}
                        >
                            Мы уже осуществили проекты в городах России: Урай, Краснокамск, Питкяранта и др. Активность общественности превзошла все наши ожидания и мы решили расширить географию проекта.
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
                            Найдите на карте свой город, улицу или дом. 
                            Выберите категорию- Идея, Ценность или Проблема.
                            Укажите точку на карте. 
                            Напишите свой комментарий во всплывающем окне. 
                        </p>
                    </>
                )}
            />
            <Link href={'https://app.latl.ng/map/73RM6E47C2C3K5RT'}>
                <button
                    className={s.button}
                >
                    <span
                        className={s.butonText}
                    >
                        Вам Слово...
                    </span>
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
                leftContent={(
                    <Menu
                        buttons={buttons}
                        setModalContent={setModalContent}
                    />
                )}
                rightContent={(
                    <div 
                        className={s.credits}
                    >
                        <p>
                            разработано в студии {' '}
                            <Link 
                                href='https://unit4.io'
                            >
                                <span
                                    className={s.linkUnit}
                                >
                                    design::unit4
                                </span>
                            </Link>
                            {' '} ©2020
                        </p>
                    </div>
                )}
            />
            {/* @ts-ignore */}
            <ScrollTrigger
                style={{
                    position: 'absolute',
                    top: '95vh',
                }}
                onEnter={() => setMenuIsBlue(true)}
                onProgress={() => setMenuIsBlue(true)}
                onExit={() => setMenuIsBlue(false)}
            />
        </Section>
    )
}