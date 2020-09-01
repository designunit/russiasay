import { Hero } from "../Hero"
import { About } from "../About"
import s from './index.module.css'
import ScrollTrigger from 'react-scroll-trigger'
import { buttonsType, modalContentType } from "../../pages"

interface ILayoutProps {
    buttons: buttonsType
    setModalContent: (state: modalContentType) => void
    setMenuIsBlue: (state: boolean) => void
}

export const Layout: React.FC<ILayoutProps> = ({ buttons, setModalContent, setMenuIsBlue }) => {

    return (
        <main
            className={s.main}
        >
            <Hero
                buttons={buttons}
                setModalContent={setModalContent}
            />
            <About />
            {/* @ts-ignore */}
            <ScrollTrigger
                style={{
                    position: 'absolute',
                    bottom: '3%',
                }}
                onEnter={() => setMenuIsBlue(true)}
                onProgress={() => setMenuIsBlue(true)}
                onExit={() => setMenuIsBlue(false)}
            />
        </main>
    )
}