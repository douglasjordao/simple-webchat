# Simple Webchat

Este projeto demonstra uma pequena interface de chat construída com [Vue 3](https://vuejs.org/), [TypeScript](https://www.typescriptlang.org/) e [Vite](https://vitejs.dev/). A aplicação simula uma conversa simples entre o usuário e um agente, incluindo suporte a mensagens de áudio.

Se preferir apenas testar rapidamente, veja uma prévia do webchat em [https://douglasjordao.github.io/simple-webchat/](https://douglasjordao.github.io/simple-webchat/).

## Funcionalidades

- Listagem de mensagens pré-carregadas a partir de `public/mocks/messages.json`;
- Envio de mensagens de texto e gravação de áudio pelo microfone (via [RecordRTC](https://github.com/muaz-khan/RecordRTC));
- Reprodução de mensagens de áudio com visualização usando [WaveSurfer.js](https://wavesurfer-js.org/);
- Scroll automático para a última mensagem e botão para rolar até o final do chat;
- Gerenciamento de estado global com [Pinia](https://pinia.vuejs.org/);
- Estilização com [Tailwind CSS](https://tailwindcss.com/) e ícones da [PrimeIcons](https://primefaces.org/primeicons/).

## Instalação

1. Tenha o Node.js instalado (versão 18 ou superior é recomendada).
2. Instale as dependências:
   ```bash
   yarn install
   ```

## Comandos úteis

- `yarn dev` &mdash; inicia o servidor de desenvolvimento do Vite.
- `yarn build` &mdash; gera a versão de produção em `dist/`.
- `yarn preview` &mdash; serve a build de produção para testes locais.
- `yarn lint` &mdash; executa o ESLint.

## Estrutura

- `src/` &mdash; componentes Vue, stores Pinia e estilos.
- `public/mocks/messages.json` &mdash; arquivo com mensagens de exemplo carregadas ao iniciar a aplicação.
- `index.html` &mdash; ponto de entrada da aplicação.

## Licença

Este projeto está licenciado sob os termos da [MIT License](LICENSE) (se aplicável).
