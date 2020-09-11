import { Ratio } from "../Ratio"
import s from './styles.module.css'
import { useRef } from "react"

export const CCC: React.FC = () => {
    const refH1 = useRef<HTMLHeadingElement>(null)
    const refLeft = useRef<HTMLDivElement>(null)

    return (
        <>
            <Ratio
                style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                left={'0 0 50%'}
                right={'0 0 50%'}
                leftContent={(
                    <div
                        ref={refLeft}
                        style={{
                            height: '100%',
                        }}
                    >
                        <h1
                            className={s.h1}
                            ref={refH1}
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
                        <h2
                            className={s.h2}
                        >
                            Социальный проект
                        </h2>
                        <img
                            style={{
                                width: refH1.current?.clientWidth ?? '100%',
                            }}
                            src='/static/h2.svg'
                        />
                    </div>
                )}
                rightContent={(
                    <img
                        src='/static/hero.svg'
                        className={s.image}
                        style={{
                            height: refLeft.current?.clientHeight ?? '100%',
                        }}
                    />
                )}
            />
        </>
    )
}