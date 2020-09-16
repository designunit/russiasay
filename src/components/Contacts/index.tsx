import s from './index.module.css'
import Link from 'next/link'

export const Contacts: React.FC = () => (
    <div
        className={s.container}
    >
        <p
            className={s.container}
        >
            По вопросам предоставления результатов опросов, проведённых в вашем городе, обращайтесь:
            <Link 
                href='tel:+7-911-159-1070'
            >
                <a>
                    +7 911 159-10-70
                </a>
            </Link>
            <Link
                href='mailto:ap@unit4.io'
            >
                <a>
                    ap@unit4.io
                </a>
            </Link>
        </p>
        <p
            className={s.container}
        >
            Наша команда занимается разработкой социальных проектов.<br />
            Проведением массовых опросов и сбора мнений жителей.<br />
            Изысканиями на местах.<br />
            Проектированием социальных пространств (парки, набережные и другое)
            <Link
                href='https://unit4.io'
            >
                <a>
                    design : : unit4
                </a>
            </Link>
        </p>
    </div>
)