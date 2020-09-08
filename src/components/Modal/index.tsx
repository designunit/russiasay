import ReactModal from 'react-modal'
import s from './index.module.css'
import { modalContentType } from '../../pages'
import { Cross } from '../Cross'

interface IModalProps {
    modalContent: modalContentType | null
    setModalContent: (state: modalContentType | null) => void
}

ReactModal.setAppElement('.root')

export const Modal: React.FC<IModalProps> = ({ modalContent, setModalContent }) => {

    return (
        <ReactModal
            isOpen={Boolean(modalContent)}
            style={{
                overlay: {
                    zIndex: 1001, // above mobile menu
                    background: 'linear-gradient(180deg, #00c2ff88, #c8fff488)',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                content: {
                    zIndex: 1001, // above mobile menu
                    position: 'absolute',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '24px',
                    border: '1px solid #00C2FF',

                    maxWidth: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                }
            }}
            className='string to drop default styles'
            onRequestClose={() => setModalContent(null)}
        >
            <span
                className={s.top}
            >
                <span>
                    {modalContent?.text}
                </span>
                <button
                    className={s.closeButton}
                    onClick={() => setModalContent(null)}
                >
                    <Cross
                        styles={{
                            fill: '#00C2FF',
                        }}
                    />
                </button>
            </span>
            {modalContent?.content}
        </ReactModal>
    )
}