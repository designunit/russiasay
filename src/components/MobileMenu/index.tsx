import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react'
import { Cross } from '../Cross'
import { Burger } from '../Burger'
import { buttonsType, modalContentType } from '../../pages'
import s from './index.module.css'

interface IMobileMenuProps {
    buttons: buttonsType
    setModalContent: (content: modalContentType) => void
}

export const MobileMenu: React.FC<IMobileMenuProps> = ({ buttons, setModalContent }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <Menu
            isOpen={menuIsOpen}
            onStateChange={state => setMenuIsOpen(state.isOpen)}
            customBurgerIcon={(
                <Burger
                    styles={{
                        fill: '#00C2FF',
                        transition: 'fill .5s'
                    }}
                />
            )}
            customCrossIcon={(
                <Cross />
            )}
            right
            width='100%'
            disableAutoFocus
        >
            {buttons.map(({ text, content }, index) => (
                <div
                    key={index}
                    className={s.button}
                    onClick={() => {
                        setModalContent({ text, content })
                        setMenuIsOpen(false)
                    }}
                >
                    {text}
                </div>
            ))}
        </Menu>
    )
}