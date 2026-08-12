# Estudos de React + TypeScript

Este repositório foi criado para registrar minha evolução nos estudos de **React**, **TypeScript** e **Bootstrap**.

A proposta é reunir exercícios práticos desenvolvidos durante meu aprendizado, acompanhando desde conceitos básicos até conteúdos mais avançados conforme eu evoluo.

## Objetivo do projeto

O principal objetivo deste repositório é colocar em prática os fundamentos do React e consolidar o aprendizado através de pequenos exercícios.

Também utilizo este projeto como forma de acompanhar minha evolução e demonstrar no GitHub os conceitos que estou estudando e aplicando na prática.

## Tecnologias utilizadas

* React
* TypeScript
* Bootstrap
* Vite
* HTML5
* CSS3

## Conceitos praticados

Até o momento, foram trabalhados os seguintes conceitos:

* Componentização
* Componentes pai e filho
* Props
* Tipagem de Props com TypeScript
* Desestruturação de Props
* Reutilização de componentes
* `useState`
* Estados com `string`
* Estados com `number`
* Estados com `boolean`
* Eventos com `onClick`
* Eventos com `onChange`
* Inputs controlados
* Formulários
* Renderização condicional
* Operador ternário
* Operador `&&`
* Arrays
* Objetos
* Renderização de listas com `map()`
* Uso de `key`
* Estilização com Bootstrap
* Flexbox com Bootstrap
* Espaçamento
* Responsividade básica

## Exercícios desenvolvidos

### Componente de usuário

Exercício voltado para o aprendizado de Props e componentização.

Foram utilizados dados como:

* Nome
* Idade
* Profissão

O objetivo foi compreender como um componente pai pode passar informações para um componente filho.

### Componente de produto

Exercício criado para praticar:

* Props
* `string`
* `number`
* `boolean`
* Renderização condicional

A disponibilidade de um produto é controlada através de um valor booleano.

### Contador

Componente desenvolvido para praticar o `useState`.

Funcionalidades:

* Adicionar valor
* Remover valor
* Zerar contador

Esse exercício ajudou a compreender como alterações no estado provocam uma nova renderização do componente.

### Campo de nome em tempo real

Exercício utilizando:

* `useState`
* `onChange`
* Input controlado
* Renderização condicional

O texto exibido na interface é atualizado conforme o usuário digita.

### Cadastro de usuário

Formulário simples contendo:

* Nome
* Idade
* Profissão

O exercício utiliza múltiplos estados para armazenar os valores dos campos e um estado booleano para controlar a exibição das informações após o cadastro.

### Lista de usuários

Exercício criado para praticar arrays e renderização dinâmica através do método:

```tsx
map()
```

Também foi utilizado o atributo:

```tsx
key
```

para identificar cada elemento renderizado pelo React.

## Conceitos que estou consolidando

Durante o desenvolvimento dos exercícios, estou buscando compreender principalmente o fluxo:

```text
Componente
   ↓
Props
   ↓
Estado
   ↓
Eventos
   ↓
Atualização
   ↓
Renderização
```

A intenção é entender não apenas a sintaxe, mas também como esses conceitos trabalham juntos na construção de interfaces dinâmicas e reutilizáveis.

## Próximos estudos

Os próximos conteúdos que pretendo adicionar ao projeto incluem:

* Renderização de componentes com `map()`
* Manipulação de arrays com estado
* Adição e remoção de itens em listas
* `filter()`
* Formulários mais completos
* `useEffect`
* Consumo de APIs
* Loading e tratamento de erros
* Custom Hooks
* Context API

## Evolução

Este repositório será atualizado continuamente conforme avanço nos estudos.

Cada exercício representa uma etapa do meu aprendizado e tem como objetivo reforçar os conceitos fundamentais do React através da prática.
