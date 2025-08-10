# 📊 Análise de Desempenho da Rede Alura Store

![Status](https://img.shields.io/badge/status-Concluído-brightgreen?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3.13-blue.svg?style=for-the-badge&logo=PYTHON&logoColor=BLUE)
![Libraries](https://img.shields.io/badge/Libraries-Pandas%20%7C%20Matplotlib%20%7C%20Seaborn-orange?style=for-the-badge)

Análise de dados exploratória para apoiar uma decisão de negócios estratégica, identificando a loja de menor performance em uma rede de varejo fictícia.

---

### 📖 **Índice**

1.  [**Contexto do Projeto**](#-contexto-do-projeto)
2.  [**Metodologia da Análise**](#-metodologia-da-análise)
3.  [**Resultados e Insights Chave**](#-resultados-e-insights-chave)
4.  [**Estrutura do Projeto**](#-estrutura-do-projeto)
5.  [**Primeiros Passos (Como Executar)**](#-primeiros-passos-como-executar)
    * [Pré-requisitos](#pré-requisitos)
    * [Instalação](#instalação)
    * [Executando a Análise](#executando-a-análise)
6.  [**Possíveis Problemas e Soluções**](#-possíveis-problemas-e-soluções)
7.  [**Como Contribuir**](#-como-contribuir)
8.  [**Licença**](#-licença)

---

### 🎯 **Contexto do Projeto**

O projeto nasceu de uma necessidade de negócios apresentada pelo "Senhor João", proprietário da rede fictícia **Alura Store**. Com o objetivo de iniciar um novo empreendimento, ele precisa de capital e, para isso, decidiu vender uma de suas quatro lojas. A tarefa deste projeto é utilizar a Ciência de Dados para analisar o desempenho de cada unidade e fornecer uma recomendação clara e fundamentada sobre qual loja representa o ativo de menor eficiência e, portanto, a candidata ideal para a venda.

### 🔬 **Metodologia da Análise**

A análise foi conduzida de forma estruturada dentro do notebook Jupyter `AluraStoreBr.ipynb`, seguindo as seguintes etapas:

1.  **Extração dos Dados**: Carregamento dos dados de vendas de cada uma das 4 lojas a partir de arquivos CSV hospedados remotamente.
2.  **Análise de Faturamento**: Cálculo da receita total gerada por cada loja para entender a performance financeira.
3.  **Análise de Vendas por Categoria**: Contagem de unidades vendidas por categoria para identificar o perfil de consumo e o foco de cada loja.
4.  **Análise de Avaliações**: Cálculo da média de satisfação dos clientes (escala 1-5) para medir a reputação e a qualidade percebida.
5.  **Análise de Produtos**: Identificação dos produtos mais e menos vendidos para avaliar a eficiência do catálogo e da gestão de estoque.
6.  **Análise de Frete**: Cálculo do custo médio de frete, um importante indicador de eficiência operacional e potencial fator de conversão de vendas.
7.  **Visualização de Dados**: Geração de gráficos e mapas de calor para consolidar os achados e facilitar a interpretação dos resultados.

### 💡 **Resultados e Insights Chave**

A análise revelou um cenário claro e, em alguns pontos, contraintuitivo:

* **Financeiramente, a Loja 4 é a de menor desempenho**, com um faturamento significativamente inferior às outras três.
* **A satisfação do cliente é um ponto forte de TODA a rede**. Todas as lojas possuem uma avaliação média excelente (próxima de 4.0), indicando que a qualidade não é um problema.
* **Operacionalmente, a Loja 4 é a mais eficiente em frete**, oferecendo os custos de envio mais baixos. No entanto, este benefício não se traduziu em maior volume de vendas.

**Recomendação Final:** Com base nas evidências, a **Loja 4** foi recomendada para a venda. Apesar de seus pontos positivos operacionais, seu baixo desempenho financeiro a torna o ativo menos estratégico para a rede no momento.

### 📂 **Estrutura do Projeto**

O repositório está organizado da seguinte forma:



├── AluraStoreBr.ipynb    # O notebook principal com toda a análise de dados.

└── README.md             # Este arquivo.

---

### 🚀 **Primeiros Passos (Como Executar)**

Para replicar esta análise em seu ambiente local, siga os passos abaixo.

#### **Pré-requisitos**

* **Python** (versão 3.9 ou superior)
* **pip** (gerenciador de pacotes do Python)
* **Git** (para clonar o repositório)

#### **Instalação**

É altamente recomendado o uso de um ambiente virtual (`venv`) para isolar as dependências do projeto.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    cd nome-do-repositorio
    ```

2.  **Crie e ative o ambiente virtual:**
    * No macOS/Linux:
        ```bash
        python3 -m venv venv
        source venv/bin/activate
        ```
    * No Windows:
        ```bash
        python -m venv venv
        .\venv\Scripts\activate
        ```

3.  **Instale as dependências:**
    Crie um arquivo `requirements.txt` com o seguinte conteúdo:
    ```
    pandas>=1.5.0
    matplotlib>=3.7.0
    seaborn>=0.12.0
    notebook>=6.5.0
    ```
    Em seguida, instale as bibliotecas:
    ```bash
    pip install -r requirements.txt
    ```

#### **Executando a Análise**

1.  **Inicie o Jupyter Notebook:**
    ```bash
    jupyter notebook
    ```
2.  **Abra o arquivo:** No seu navegador, abra o arquivo `AluraStoreBr.ipynb`.
3.  **Execute as células:** Você pode executar cada célula sequencialmente para replicar a análise passo a passo.

---

### 🛠️ **Possíveis Problemas e Soluções**

* **Problema:** Erro ao carregar os dados (`HTTPError`).
    * **Solução:** O notebook carrega os dados diretamente de um repositório no GitHub. Verifique sua conexão com a internet. Se o problema persistir, os links no arquivo podem estar offline; neste caso, os datasets podem ser baixados manualmente e o código ajustado para leitura local.

* **Problema:** Bibliotecas não encontradas (`ModuleNotFoundError`).
    * **Solução:** Certifique-se de que seu ambiente virtual está ativado e que você executou `pip install -r requirements.txt` com sucesso.

* **Problema:** Gráficos não aparecem no notebook.
    * **Solução:** A primeira célula do notebook deve conter `%matplotlib inline` para garantir que os gráficos sejam renderizados diretamente na saída da célula. Se mesmo assim não funcionar, tente reiniciar o kernel do Jupyter.

---

### 🤝 **Como Contribuir**

Contribuições são sempre bem-vindas! Se você tem sugestões para melhorar esta análise, adicionar novas visualizações ou otimizar o código, sinta-se à vontade para:

1.  Fazer um **Fork** deste repositório.
2.  Criar uma nova **Branch** (`git checkout -b feature/sua-feature`).
3.  Fazer o **Commit** das suas alterações (`git commit -m 'Adiciona sua feature'`).
4.  Fazer o **Push** para a Branch (`git push origin feature/sua-feature`).
5.  Abrir um **Pull Request**.

---

### 📜 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes. (Nota: você pode adicionar um arquivo de licença MIT ao seu repositório).


---

## Github Stats
![PhilipeOliveiraS](https://github-readme-stats.vercel.app/api?username=PhilipeOliveiraS&show_icons=true&bg_color=0D1117&border_color=30A3DC&icon_color=30A3DC&title_color=0056B3&text_color=FFF)

---
## Minhas Contribuições
[![Repo Card](https://github-readme-stats.vercel.app/api/pin/?username=PhilipeOliveiraS&repo=ONE---Oracle-Next-Education---Alura&bg_color=0D1117&border_color=30A3DC&show_icons=true&icon_color=30A3DC&title_color=0056B3&text_color=FFF)](https://github.com/PhilipeOliveiraS/ONE---Oracle-Next-Education---Alura/tree/main/Desafio-Alura-Store)
---

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=PhilipeOliveiraS&layout=compact&bg_color=0D1117&border_color=30A3DC&show_icons=true&icon_color=30A3DC&title_color=0056B3&text_color=FFF)

---

## 📈 Estatísticas do Repositório

![Repo Size](https://img.shields.io/github/repo-size/PhilipeOliveiraS/web-coding?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/PhilipeOliveiraS/web-coding?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/PhilipeOliveiraS/web-coding?style=social?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/PhilipeOliveiraS/web-coding?style=social?style=for-the-badge)

---

### Estatísticas do Projeto


![Commit Activity](https://img.shields.io/github/commit-activity/y/PhilipeOliveiraS/web-coding?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/PhilipeOliveiraS/web-coding?style=for-the-badge)
---
![Animation](https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif)
---

Este projeto é mantido por [PhilipeOliveiraS](https://github.com/PhilipeOliveiraS). Contribuições são bem-vindas!

> "Cada linha de código é um passo na jornada de transformar o simples em algo mágico." – PhilipeOliveiraS
