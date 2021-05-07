import React from 'react'
import { Accordion, OptForm } from '../components'
import faqsData from '../fixtures/faqs.json'

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Часто задаваемые вопросы</Accordion.Title>
            {
                faqsData.map(item => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))
            }
            <OptForm>
                <OptForm.Input placeholder="Эл. почта" />
                <OptForm.Button>Попробовать</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Готовы смотреть? Введите электронную почту для создания учётной записи!</OptForm.Text>
            </OptForm>
        </Accordion>
    )
}