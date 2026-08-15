# Tutorial auto-guiado: Next.js para quem já sabe React

Este repositório organiza um tutorial prático de Next.js para estudantes que já conhecem React, mas ainda não tiveram contato com Next.js.

O objetivo é construir, ao longo das etapas, um currículo pessoal em formato de landing page estática, com foco em conceitos essenciais do framework e em um resultado final útil e apresentável.

## Objetivo do projeto

Ao final, você terá:

- um site pessoal com layout profissional
- um currículo em formato de landing page
- conhecimento prático de Next.js App Router
- familiaridade com TypeScript, Tailwind, metadata SEO e build estático

## Público-alvo

- estudantes de React que querem aprender Next.js
- devs que já entenderam componentes, props, estado e eventos
- pessoas que querem construir um portfólio ou currículo online com uma base sólida em frontend moderno

## Tecnologias principais

- Next.js 14/15
- React
- TypeScript
- Tailwind CSS
- static export para deploy em Cloudflare Pages
- lucide-react para ícones

## Estrutura do tutorial

Este repositório será executado em etapas sequenciais. Cada etapa introduz um conceito novo do Next.js e conclui com um checkpoint do projeto.

- Etapa 0: [Fundamentos do tutorial e visão geral do projeto](tutorial/00-introducao.md)
- Etapa 1: [Setup inicial do projeto Next.js](tutorial/01-setup.md)
- Etapa 2: [Layout raiz, fontes e base do Tailwind](tutorial/02-layout.md)
- Etapa 3: [Estrutura de dados do currículo](tutorial/03-dados.md)
- Etapa 4: [Componentização das seções](tutorial/04-componentes.md)
- Etapa 5: [Imagens e ícones](tutorial/05-imagens.md)
- Etapa 6: [Metadata e SEO](tutorial/06-seo.md)
- Etapa 7: [Interatividade mínima com Client Component](tutorial/07-client-component.md)
- Etapa 8: [Static export e deploy no Cloudflare Pages](tutorial/08-deploy.md)
- Etapa 9: [Polimento final e próximos passos](tutorial/09-polimento.md)

## Checkpoints por módulo

Cada etapa termina com uma tag git para registrar o progresso do projeto.

Exemplo:

```bash
git tag modulo-00
```

## Pré-requisitos

Antes de começar, você precisa ter instalado:

- Node.js LTS
- npm
- editor de código (VS Code recomendado)
- terminal básica para rodar comandos

## Fluxo recomendado

1. Leia a introdução da etapa atual
2. implemente o passo indicado
3. rode o projeto localmente
4. valide os resultados
5. finalize a etapa e marque o checkpoint

## Próxima etapa

A etapa atual é a base do tutorial. Antes de começar a implementação do projeto em Next.js, vamos compreender melhor o que esse framework oferece e por que ele é importante para quem já conhece React.

---

Consulte a introdução em [tutorial/00-introducao.md](tutorial/00-introducao.md).
