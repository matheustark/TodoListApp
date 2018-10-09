import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

export default props => (
    <div>
        <PageHeader name='Sobre' small='Matheus' />

        <h2>Bio</h2>
        <p>Solteiro, 21 anos, Estudante de Sistemas de informação</p>
        <h2>Carreira</h2>
        <p>Desenvolvedor de soltware web e mobile usando reactJs e react native</p>
        <h2>Idiomas</h2>
        <p>Português e inglês fluente</p>
    </div>
)