import React from 'react'
import { FaqsContainer } from '../containers/accordion'
import { FooterContainer } from '../containers/footer'
import { JumbotronContainer } from '../containers/jumbotron'
import { HeaderContainer } from '../containers/header'
import { OptForm, Feature } from '../components'

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Фильмы и передачи без ограничений.</Feature.Title>
                    <Feature.SubTitle>Смотрите везде, отменяйте подписку в любое время.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Эл. почта" />
                        <OptForm.Button>Попробовать</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Готовы смотреть? Введите электронную почту для создания учётной записи!</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}