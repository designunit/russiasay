import { Ratio } from "../Ratio"
import s from './styles.module.css'

export const CCC: React.FC = () => {
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
                    <>
                        <h1
                            className={s.h1}
                            style={{
                                // @ts-ignore
                                fontSize: 'calc(min(2rem + 9vmin, 135px))'
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
                        <h2
                            className={s.h2}
                        >
                            Социальный проект
                        </h2>
                    </>
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