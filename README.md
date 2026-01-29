# 🌭 Dogão do Léo - O Gigante do Ibura

Esta é a Landing Page oficial do **Dogão do Léo**, desenvolvida para transformar a presença digital da lanchonete, saindo de um simples link de menu para uma plataforma completa de conversão e prova social.

## Funcionalidades

- **Design Responsivo:** Otimizado para dispositivos móveis, garantindo que o cliente peça seu lanche com facilidade pelo celular.
- **Sistema de Avaliações Inteligente:** Integração em tempo real com Google Forms e Google Sheets.
- **Filtro de Segurança (Regex):** Sistema automático que bloqueia comentários com palavras de baixo calão e termos ofensivos antes mesmo de chegarem ao site.
- **Curadoria de Notas:** Filtro configurado para exibir apenas avaliações positivas (4 e 5 estrelas), preservando a imagem da marca no mural "A voz de quem escolhe o Gigante".
- **Otimização de Carregamento:** Scripts leves e imagens organizadas para um carregamento rápido em redes 3G/4G.

## Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3 (com animações de interseção) e JavaScript (ES6+).
- **Backend/API:** Google Apps Script como engine de processamento de dados.
- **Banco de Dados:** Google Sheets para armazenamento das respostas.
- **Integração:** Google Forms para coleta simplificada de feedbacks.

## Estrutura do Projeto

```text
├── index.html          # Estrutura principal do site
├── style.css           # Estilização e design visual
├── script.js           # Lógica do frontend e consumo da API
├── images/             # Pasta de recursos visuais (otimizados)
└── README.md           # Documentação do projeto
```

## Como funciona o Sistema de Depoimentos

1. O cliente faz o pedido e recebe o link do **Google Forms**.
2. Ao enviar a avaliação, os dados são registrados automaticamente em uma planilha do **Google Sheets**.
3. O **Google Apps Script** processa os dados, aplica o filtro de segurança e valida a nota.
4. O site consome essa API via `fetch` e renderiza apenas os depoimentos aprovados no mural de clientes.

---

## Licença

Este projeto foi desenvolvido como uma solução personalizada para o **Dogão do Léo**.  
Desenvolvido com foco em resultados por **Andrey Silva** 🚀
