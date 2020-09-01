import Head from 'next/head'
import { NextPage } from 'next'
import { MobileMenu } from '../components/MobileMenu'
import { useState } from 'react'
import { Layout } from '../components/Layout'
import { useMobile } from '../hooks/useMobile'
import { Modal } from '../components/Modal'

export type modalContentType = JSX.Element | null
export type buttonsType = {
    text: string
    content: modalContentType
    href?: string
}[]

const Index: NextPage = () => {
    const isMobile = useMobile()
    const [menuIsBlue, setMenuIsBlue] = useState(false)
    const [modalContent, setModalContent] = useState<modalContentType>(null)

    const buttons: buttonsType = [
        {
            text: 'о проекте',
            content: <>ТЫ НАЖАЛ "О ПРОЕКТЕ"</>,
        },
        {
            text: 'карта идей',
            content: null,
            href: 'https://app.latl.ng/map/73RM6E47C2C3K5RT'
        },
        {
            text: 'вопросы',
            content: <>ТЫ НАЖАЛ "ВОПРОСЫ"</>,
        },
    ]

    return (
        <div className='root'>
            <Head>
                <title>скажи.рф</title>
            </Head>
            <Modal
                modalContent={modalContent}
                setModalContent={setModalContent}
            />
            {isMobile && (
                <MobileMenu
                    isBlue={menuIsBlue}
                    buttons={buttons}
                    setModalContent={setModalContent}
                />
            )}
            <Layout
                buttons={buttons}
                setModalContent={setModalContent}
                setMenuIsBlue={setMenuIsBlue}
            />
        </div>
    )
}

export default Index