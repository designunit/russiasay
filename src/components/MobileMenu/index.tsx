import { slide as Menu } from 'react-burger-menu'

export const MobileMenu: React.FC = () => {

   const buttons = [
      {
         text: 'почта',
         link: '',
      },
      {
         text: 'о проекте',
         link: '',
      },
      {
         text: 'карта идей',
         link: '',
      },
      {
         text: 'вопросы',
         link: '',
      },
   ]

   return (
      <Menu
         customBurgerIcon={(
            <img
               src='/static/menu.svg'
            />
         )}
         customCrossIcon={(
            <img
               src='/static/cross.svg'
            />
         )}
         right
         width='100%'
      >
         {buttons.map(({ text, link }, index) => (
            <div
               key={index}
               style={{
                  letterSpacing: '.25rem',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  textAlign: 'end',
                  color: 'white',

                  marginBottom: '2rem',
               }}
            >
               {text}
            </div>
         ))}
      </Menu>
   )
}