# Desafio Pokedex
Desafio de construção de uma Dashboard / Vitrine Interativa com Consumo de API Externa


## Sobre
O projeto foi desenvolvido com **React** e **Next.js**, consumindo a **PokéAPI** para exibir dados de Pokémons em uma aplicação web totalmente responsiva, adaptada a diferentes tamanhos de tela. Server Components e Client Components foram utilizados conforme a necessidade de cada parte do projeto, otimizando performance e interatividade.

A aplicação conta com uma landing page que apresenta o tema e guia o usuário até a vitrine, onde as informações consumidas da API são exibidas de forma organizada e fluida. Cada card da vitrine leva, por meio de uma rota dinâmica, a uma página individual com os detalhes e status do respectivo Pokémon.

### Instruções 
Como a PokéAPI não requer chave de acesso, basta ter o [Node](https://nodejs.org/pt-br) instalado em sua máquina e executá-lo corretamente no terminal de sua IDE.

Primeiro, clone o repositório com o seguinte comando:

> `git clone https://github.com/JoaoM11/Desafio-Seed-PokeAPI.git`

Em seguida, instale as dependências no terminal da sua IDE:

> `npm install`

Depois, rode o projeto com o comando:

> `npm run dev`

Por fim, acesse a aplicação em seu [LocalHost](http://localhost:3000).

#### API utilizada:

PokéAPI:https://pokeapi.co/docs/v2

#### Perguntas Teóricas de Reflexão

Por que a busca inicial dos dados na rota /vitrine foi feita em um Server Component em vez de um Client Component?

R: Por uma série de fatores, como por exemplo melhor performance inicial e carregamento rápido, segurança, menos latência, entre outras melhorias que impulsionam a experiência do usuário.

Se precisarmos adicionar um botão de "Curtir / Favoritar" dentro de cada Card da vitrine, como você estruturaria esse componente mantendo a performance da aplicação?

R: A melhor abordagem é utilizar o padrão de Componente Folha, mantendo o card no servidor e ativando o react client apenas no botão de reação, que seria um component novo.

Em sua implementação, como você usou o useState e useEffect? Como eles impactam as renderizações do sistema?

R: Sim, O impacto do useState e do useEffect no desempenho do React está diretamente ligado ao controle de quando a tela é desenhada. O useState atua como o gatilho principal de atualização: sempre que o seu valor muda através da sua função modificadora, o React agenda uma nova renderização do componente e de toda a sua árvore de filhos, garantindo que a interface reflita o novo dado. Já o useEffect entra em ação imediatamente após a renderização ser concluída no navegador. Por conta dessa dinâmica, o maior risco de performance ocorre quando o useEffect altera um useState sem as devidas condições ou com um array de dependências incorreto; isso força o componente a renderizar novamente logo após ter acabado de desenhar a tela, gerando renderizações em cascata desnecessárias ou até mesmo travando a aplicação em um loop infinito.

Quais métodos HTTP foram utilizados e por que o projeto utiliza principalmente o método GET?

R: O principal metódo é o GET, pois, como se trata de um desafio com uso de API externa, o GET é utilizado para buscar e ler as informações da API.

Foram usadas variáveis centralizadas no código? Como você implementou isso?

R: Sim, A implementação define um arquivo de declaração de tipos para o TypeScript no Next.js. Ele importa as referências de tipos globais do framework e da otimização de imagens, além de incluir os tipos das rotas geradas na versão de desenvolvimento . Adicionalmente, o arquivo exporta a constante API_BASE_URL, que configura a URL base da API utilizando a variável de ambiente NEXT_PUBLIC_API_URL ou, como alternativa padrão (fallback), o endereço da PokeAPI (https://pokeapi.co/api/v2).

Como a aplicação se adapta a telas de celular, tablet e desktop? Quais mecanismos você utilizou para isso?

R: Se adpta através do uso de classes utilitárias responsivas (Tailwind CSS), fazendo o elemento ocupar 100% da largura em telas pequenas, 50% em telas médias (md) e 33% em telas grandes (lg), e do uso de Props Responsivas de Bibliotecas de UI que permitem passar objetos ou arrays de valores diretamente nas props dos componentes dentro do tsx.

O filtro é aplicado apenas aos itens da página atual ou a todos os itens disponíveis na API?

R: A aplicação do filtro depende exclusivamente da forma como o código foi implementado no projeto. Caso o filtro utilize métodos JavaScript, como o .filter(), diretamente sobre o array de dados já carregados no estado atual da tela, ele será aplicado apenas aos itens da página visível, de modo que elementos presentes em outras páginas não aparecerão nos resultados. Por outro lado, se a ação de filtrar disparar uma nova requisição enviando parâmetros de busca para o servidor, ou se a aplicação realizar um carregamento prévio da lista completa de registros da API, o filtro passará a funcionar de forma global, alcançando todos os itens disponíveis.