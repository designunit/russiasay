import { Section } from "../Section"
import { CCC } from "../CCC"
import s from './index.module.css'
import { useMobile } from "../../hooks/useMobile"
import { buttonsType, modalContentType } from "../../pages"

interface IHeroPorops {
    buttons: buttonsType
    setModalContent: (content: modalContentType) => void
}

export const Hero: React.FC<IHeroPorops> = ({ buttons, setModalContent }) => {
    const isMobile = useMobile()

    return (
        <span
            className={`${s.animatedBg} ${s.container}`}
        >
            <Section
                className={s.section}
            >
                <h2
                    className={s.h2}
                >
                    Независимый социальный проект
                </h2>
                <CCC />
                <div
                    className={s.menu}
                >
                    {!isMobile && (
                        buttons.map(({ text, content }, index) => (
                            <span
                                key={index}
                                className={s.button}
                                onClick={() => setModalContent(content)}
                            >
                                {text}
                            </span>
                        ))
                    )}
                </div>
            </Section>
        </span>
    )
}