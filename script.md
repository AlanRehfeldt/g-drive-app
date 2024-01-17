Script do projetos

# Inicialização
- npm create vite@latest
    - React
    - Typescript
- Limpeza de pastas e arquivos
    - Na pasta src
        - Deixar apenas App.tsx, main.tsx, vite-env.d.ts e pasta assets
        - No arquivo main.tsx
            - Limpar importações
        - No arquivo app.tsx
            - exportar função App() retornando <div>Hello World</div>
        - Na pasta assests
            - apagar todos os arquivos
    - No arquivo index.html
        - Remover links
        - Substituir title
- npm i
- npm run dev

# Estlização global do projeto e temas
- npm i styled-components
- npm i @types/styled-components -D
- Na pasta src
    - Criar pasta styles
        - Criar pasta theme
            - Criar arquivo default.ts
                - Exportar defaultTheme com os valores de estilo do tema padrão
            - Criar arquivo global.ts
                - Importar createGlobalStyle
                - Exportar GlobalStyle com a estilização global da aplicação
    - No arquivo App.tsx
        - Importar ThemeProvider, defaultTheme e GlobalStyle
        - Exportar App com ThemeProvider e GlobalStyle
    - Criar pasta @types
        - Criar arquivo srtyled.d.ts
            * Arquivo de definição de tipos do typescript
- No arquivo index.html
    - Criar link de importação da fonte do Google Fonts
    
# Páginas e Rotas da aplicação
- npm i react-router-dom
- Na pasta src
    - Criar pasta layouts
        - Criar pasta DefaultLayout
            - Criar arquivo index.txs
            - Criar arquivo styles.ts
    - Criar pasta components
        - Criar pasta Header
            - Criar arquivo index.tsx
            - Criar arquivo styles.ts
    - Criar pasta pages
        - Criar arquivo Home.tsx

# Consumindo requisições HTTP
- Instalar Axios
    - npm install axios
- Na pasta src
    - criar pasta services
        - criar arquivo api.js
            - importar axios
            - const api para inserir configurações e exportar
                - axios.create({baseUrl: "http://localhost:3334"})

https://www.youtube.com/watch?v=Jh1DIoES_5c