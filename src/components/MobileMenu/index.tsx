import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react'
import { Cross } from '../Cross'
import { Burger } from '../Burger'
import { buttonsType, modalContentType } from '../../pages'

interface IMobileMenuProps {
   isBlue: boolean
   buttons: buttonsType
   setModalContent: (content: modalContentType) => void
}

export const MobileMenu: React.FC<IMobileMenuProps> = ({ isBlue, buttons, setModalContent }) => {
   const [menuIsOpen, setMenuIsOpen] = useState(false)

   return (
      <Menu
         isOpen={menuIsOpen}
         onStateChange={state => setMenuIsOpen(state.isOpen)}
         customBurgerIcon={(
            <Burger
                styles={{
                    fill: isBlue ? '#00C2FF' : 'white',
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
               style={{
                  letterSpacing: '.25rem',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  textAlign: 'end',
                  textDecoration: 'underline',
                  color: 'white',

                  marginBottom: '2rem',
               }}
               onClick={() => {
                  setModalContent(content)
                  setMenuIsOpen(false)
               }}
            >
               {text}
            </div>
         ))}
      </Menu>
   )
}