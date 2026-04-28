# Ax Agência — Site

## Como adicionar/editar um GIF e enviar as alterações para o GitHub

### 1. Baixar o arquivo do repositório

1. Acesse o repositório no GitHub: `https://github.com/Henry0liveira/site-ax-agencia`
2. Clique no botão verde **"Code"** e escolha **"Download ZIP"**, ou clone o projeto pelo terminal:
   ```bash
   git clone https://github.com/Henry0liveira/site-ax-agencia.git
   cd site-ax-agencia
   ```
3. Se clonou, instale as dependências:
   ```bash
   npm install
   ```

### 2. Adicionar o arquivo GIF ao projeto

1. Coloque o arquivo `.gif` dentro da pasta `public/` (ex.: `public/logo.gif`).
2. Inicie o servidor de desenvolvimento para visualizar as alterações em tempo real:
   ```bash
   npm run dev
   ```

### 3. Editar o HTML (estrutura do componente)

Abra o arquivo `src/App.jsx` e adicione uma tag `<img>` apontando para o GIF:

```jsx
function App() {
  return (
    <main id="app">
      <h1 className="app-title">Ax Agência</h1>
      <img src="/logo.gif" alt="Ax Agência" className="logo-gif" />
    </main>
  )
}
```

### 4. Editar o CSS (estilo do GIF)

Abra o arquivo `src/App.css` e adicione um estilo para a imagem:

```css
.logo-gif {
  width: 320px;
  max-width: 100%;
  margin-top: 24px;
}
```

### 5. Enviar as alterações de volta para o GitHub

1. Adicione os arquivos modificados ao Git:
   ```bash
   git add .
   ```
2. Crie um commit com uma mensagem descritiva:
   ```bash
   git commit -m "Adiciona GIF e atualiza layout"
   ```
3. Envie para o GitHub:
   ```bash
   git push origin main
   ```
4. Acesse o repositório no GitHub para confirmar que as alterações foram enviadas.
