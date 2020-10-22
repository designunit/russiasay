import { Section } from "../Section"
import { Ratio } from "../Ratio"
import Link from "next/link"
import s from './index.module.css'
import { Menu } from "../Menu"
import { modalContentType, buttonsType } from "../../pages"
import { useMobile } from "../../hooks/useMobile"

interface IAboutProps {
    buttons: buttonsType
    setModalContent: (content: modalContentType) => void
}

export const About: React.FC<IAboutProps> = ({ buttons, setModalContent }) => {
    const isMobile = useMobile()
    
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
                            Проект создан на базе студии проектирования городской среды{' '}
                            <Link
                                href='https://unit4.io'
                            >
                                <a>
                                    design : : unit4
                                </a>
                            </Link>
                            {' '}для оперативного опроса жителей и сбора общественного мнения об устройстве городских территорий.
                        </p>
                        <p
                            style={{
                                margin: 0,
                            }}
                        >
                            Мы уже применили проект в некоторых городах России: Урай, Краснокамск, Питкяранта и др.
                        </p>
                        <p
                            style={{
                                margin: 0,
                                marginBottom: '1rem',
                            }}
                        >
                            Активность общественности превзошла все наши ожидания и мы решили расширить географию проекта.
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
                                margin: 0,
                            }}
                        >
                            Найдите на карте свой город, улицу или дом. Выберите категорию: Идея, Ценность или Проблема. Укажите точку на карте. Напишите свой комментарий во всплывающем окне.
                        </p>
                        <p
                            style={{
                                margin: 0,
                            }}
                        >
                            Вам Слово...
                        </p>
                    </>
                )}
            />
            <Link href={'https://app.latl.ng/map/73RM6E47C2C3K5RT'}>
                <button
                    className={`${s.button} ${isMobile && s.butonMobile}`}
                >
                    <a
                        className={s.butonText}
                    >
                        Вам Слово...
                    </a>
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
        </Section>
    )
}