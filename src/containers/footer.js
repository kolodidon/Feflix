import React from 'react'
import { Footer } from '../components'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Остались вопросы? Свяжитесь с нами!</Footer.Title>
            <Footer.Break />
            <Footer.Row>

                <Footer.Column>
                    <Footer.Link href='#'>FAQ</Footer.Link>
                    <Footer.Link href='#'>Инвесторам</Footer.Link>
                    <Footer.Link href='#'>Способы просмотра</Footer.Link>
                    <Footer.Link href='#'>Корпоративная информация</Footer.Link>
                    <Footer.Link href='#'>Feflix Original</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href='#'>Помощь</Footer.Link>
                    <Footer.Link href='#'>Работа</Footer.Link>
                    <Footer.Link href='#'>Соглашения</Footer.Link>
                    <Footer.Link href='#'>Контакты</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href='#'>Учетная запись</Footer.Link>
                    <Footer.Link href='#'>Подарочные сертификаты</Footer.Link>
                    <Footer.Link href='#'>Приватность данных</Footer.Link>
                    <Footer.Link href='#'>Тест скорости</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href='#'>Медиа-центр</Footer.Link>
                    <Footer.Link href='#'>Покупка подарочных сертификатов</Footer.Link>
                    <Footer.Link href='#'>Информация о Cookies</Footer.Link>
                    <Footer.Link href='#'>Правила пользования</Footer.Link>
                </Footer.Column>

            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Feflix Россия</Footer.Text>
        </Footer>
    )
}