import Head from 'next/head'
import { NextPage } from 'next'
import { MobileMenu } from '../components/MobileMenu'
import { useState } from 'react'
import { Layout } from '../components/Layout'
import { useMobile } from '../hooks/useMobile'
import { Modal } from '../components/Modal'
import { Contacts } from '../components/Contacts'
import { YaMetrika } from '../components/YaMetrika'
import { AboutText } from '../components/AboutText'
import Link from 'next/link'

export type modalContentType = {
    text: string | JSX.Element
    content: JSX.Element | null
}

export type buttonsType = modalContentType[]

const Index: NextPage = () => {
    const isMobile = useMobile()
    const [modalContent, setModalContent] = useState<modalContentType | null>(null)

    const buttons: buttonsType = [
        {
            text: 'о проекте',
            content: <AboutText />,
        },
        {
            text: 'контакты',
            content: <Contacts />,
        },
        {
            text: (
                <Link
                    href='https://youtu.be/mOnchN3hQSk'
                >
                    <a style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        Видео
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 1024 1024" style={{
                            height: '1.5rem',
                            marginLeft: '.5rem',
                            fill: isMobile ? 'white' : 'black'
                        }}>
                            <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
                        </svg>
                    </a>
                </Link>
            ),
            content: null
        },
    ]

    return (
        <div className='root'>
            <Head>
                <title>скажи-всем.рф</title>
                <YaMetrika />
            </Head>
            <Modal
                modalContent={modalContent}
                setModalContent={setModalContent}
            />
            {isMobile && (
                <MobileMenu
                    buttons={buttons}
                    setModalContent={setModalContent}
                />
            )}
            <Layout
                buttons={buttons}
                setModalContent={setModalContent}
            />
        </div>
    )
}

export default Index