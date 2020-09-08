import s from './index.module.css'
import { buttonsType, modalContentType } from "../../pages"
import { useMobile } from '../../hooks/useMobile'
import Link from 'next/link'

interface IMenuProps {
    buttons: buttonsType
    setModalContent: (content: modalContentType) => void
}

export const Menu: React.FC<IMenuProps> = ({ buttons, setModalContent }) => {
    const isMobile = useMobile()

    return (
        <div
            className={s.menu}
        >
            {!isMobile && (
                buttons.map(({ text, content }, index) => (
                    <span
                        key={index}
                        className={s.button}
                        onClick={() => setModalContent({ text, content })}
                    >
                        {text}
                    </span>
                ))
            )}
        </div>
    )
}