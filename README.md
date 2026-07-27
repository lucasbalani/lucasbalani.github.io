# Lucas Balani — Portfolio

Landing page estática (PT/EN), pensada para recrutadores, linkada no botão "Conheça meu portfólio" do LinkedIn.

## Rodar localmente

```bash
npm install
npm run build     # gera style.css a partir de src/input.css
```

Depois é só abrir `index.html` no navegador (ou servir a pasta com qualquer servidor estático).

Durante desenvolvimento, use `npm run watch` para recompilar o CSS automaticamente a cada mudança.

## Deploy no GitHub Pages

1. Criar o repositório `lucasbalani.github.io` no GitHub.
2. `git init`, `git add .`, `git commit`, e `git push` para o branch `main`.
3. Em Settings → Pages, confirmar que o Pages está servindo a partir do branch `main` / raiz (repositórios `usuario.github.io` costumam habilitar isso automaticamente).
4. Atualizar o link "Website" no perfil do LinkedIn para `https://lucasbalani.github.io`.
