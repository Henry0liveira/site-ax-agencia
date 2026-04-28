import { useState } from 'react'
import './App.css'

const cards = [
  {
    id: 1,
    title: 'Branding',
    text: 'Criamos identidades visuais únicas que comunicam a essência da sua marca. Do logotipo ao manual de marca, cada detalhe é pensado para gerar reconhecimento e conexão com seu público.',
  },
  {
    id: 2,
    title: 'Marketing Digital',
    text: 'Estratégias de presença online que geram resultado. Gerenciamos suas redes sociais, campanhas pagas e produção de conteúdo com foco em crescimento e engajamento real.',
  },
  {
    id: 3,
    title: 'Desenvolvimento Web',
    text: 'Sites e landing pages modernos, rápidos e responsivos. Desenvolvemos soluções digitais sob medida para destacar sua empresa no ambiente online.',
  },
  {
    id: 4,
    title: 'Consultoria',
    text: 'Análise completa do seu negócio para traçar o melhor caminho estratégico. Nossa equipe identifica oportunidades e propõe ações práticas para impulsionar seus resultados.',
  },
]

const isMobile = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches

function Card({ title, text }) {
  const [expanded, setExpanded] = useState(() => isMobile())

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p
        className={`card-text${expanded ? ' card-text--expanded' : ''}`}
        onClick={() => setExpanded((prev) => !prev)}
        title={expanded ? 'Clique para fechar' : 'Clique para expandir'}
      >
        {text}
      </p>
    </div>
  )
}

function App() {
  return (
    <main id="app">
      <h1 className="app-title">Ax Agência</h1>
      <section id="cards">
        {cards.map((card) => (
          <Card key={card.id} title={card.title} text={card.text} />
        ))}
      </section>
    </main>
  )
}

export default App
