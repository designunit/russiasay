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