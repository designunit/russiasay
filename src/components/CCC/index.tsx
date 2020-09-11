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
                    alignItems: 'center'
                }}
                left={'0 0 49%'}
                right={'0 0 49%'}
                spacer={'0 0 2%'}
                leftContent={(
                    <>
                        <img
                            src='/static/heroText.svg'
                            className={s.image}
                        />
                        <h1
                            className={s.h1}
                        >
                            Скажи свое слово!
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