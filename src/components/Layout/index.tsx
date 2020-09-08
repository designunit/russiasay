import { Hero } from "../Hero"
import { About } from "../About"
import s from './index.module.css'
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
            <Hero />
            <About
                setMenuIsBlue={setMenuIsBlue}
                buttons={buttons}
                setModalContent={setModalContent}
            />
        </main>
    )
}