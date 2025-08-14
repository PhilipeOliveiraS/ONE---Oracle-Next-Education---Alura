# 📊 Análise de Evasão de Clientes (Churn) - Telecom X

![Status](https://img.shields.io/badge/status-Concluído-brightgreen?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3.13-blue.svg?style=for-the-badge&logo=PYTHON&logoColor=BLUE)
![Libraries](https://img.shields.io/badge/Libraries-Pandas%20%7C%20Matplotlib%20%7C%20Seaborn-orange?style=for-the-badge)

Análise Exploratória de Dados (EDA) para identificar os principais fatores que levam à evasão de clientes (churn) em uma empresa de telecomunicações fictícia, a Telecom X.

---

### 📖 **Índice**

1.  [**Contexto do Projeto**](#-contexto-do-projeto)
2.  [**Metodologia da Análise**](#-metodologia-da-análise)
3.  [**Principais Insights e Conclusões**](#-principais-insights-e-conclusões)
4.  [**Estrutura do Projeto**](#-estrutura-do-projeto)
5.  [**Primeiros Passos (Como Executar)**](#-primeiros-passos-como-executar)
    * [Pré-requisitos](#pré-requisitos)
    * [Instalação](#instalação)
    * [Execução](#execução)
6.  [**Possíveis Problemas e Soluções**](#-possíveis-problemas-e-soluções)
7.  [**Como Contribuir**](#-como-contribuir)
8.  [**Licença**](#-licença)

---

### 🎯 **Contexto do Projeto**

A Telecom X está enfrentando uma alta taxa de evasão de clientes, um desafio que impacta diretamente seu crescimento. Para combater este problema de forma eficaz, a empresa precisa primeiro entender *por que* os clientes estão cancelando seus serviços. Este projeto realiza uma imersão nos dados para descobrir os perfis, comportamentos e características mais associados ao churn, fornecendo uma base sólida para futuras estratégias de retenção e a criação de modelos preditivos.

### 🔬 **Metodologia da Análise**

O trabalho foi estruturado em um fluxo de ETL (Extração, Transformação e Carga) seguido por uma Análise Exploratória de Dados (EDA), contido no notebook `TelecomX_BR_Final.ipynb`.

1.  **Extração (E):** Os dados brutos foram extraídos de uma fonte JSON hospedada remotamente.
2.  **Transformação (T):** Esta foi a etapa mais crítica, envolvendo:
    * **Normalização de Dados:** A estrutura JSON aninhada foi "achatada" para um formato tabular utilizando `pandas.json_normalize`.
    * **Limpeza de Dados:** Correção de inconsistências, como na coluna de cobranças totais (`TotalCharges`), que foi convertida para o formato numérico, com tratamento de valores ausentes.
    * **Engenharia de Atributos:** Criação da coluna `Contas_Diarias` para permitir análises mais granulares.
    * **Padronização:** Simplificação dos nomes das colunas e conversão de valores categóricos (ex: "Yes"/"No") para o formato numérico (1/0).
3.  **Análise (L):** Com os dados limpos, a análise exploratória foi conduzida para identificar padrões através de:
    * Estatísticas descritivas com `.describe()`.
    * Visualização da distribuição de churn e sua relação com variáveis categóricas (`Contract`, `PaymentMethod`) e numéricas (`tenure`, `MonthlyCharges`).
    * Criação de uma matriz de correlação para entender a interação entre as variáveis.

### 💡 **Principais Insights e Conclusões**

A análise revelou padrões claros sobre o perfil de evasão:

* **Tipo de Contrato é Crucial:** Clientes com contrato **Mensal (`Month-to-month`)** possuem uma taxa de churn drasticamente superior aos de contratos de 1 ou 2 anos.
* **Tempo de Contrato (Tenure) é um Fator Protetor:** Há uma forte correlação negativa entre o tempo de permanência do cliente e a probabilidade de churn. Clientes mais novos são muito mais propensos a sair.
* **Cobranças Mensais Influenciam:** Cobranças mensais mais altas (`MonthlyCharges`) estão positivamente correlacionadas com o churn, sugerindo sensibilidade ao preço.
* **Serviços Adicionais:** Clientes sem serviços de proteção como `OnlineSecurity` e `TechSupport` tendem a ter maior churn.

### 📂 **Estrutura do Projeto**

├── TelecomX_BR_Final.ipynb    # Notebook Jupyter com o código completo da análise (E, T e L).

└── README.md                  # Este arquivo de documentação.

---

### 🚀 **Primeiros Passos (Como Executar)**

Para replicar esta análise em seu ambiente local, siga os passos abaixo.

#### **Pré-requisitos**

* **Python** (versão 3.13, conforme seu padrão)
* **pip** (gerenciador de pacotes do Python)
* **Git** (para clonar o repositório)

#### **Instalação**

É altamente recomendado o uso de um ambiente virtual (`venv`) para isolar as dependências.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/PhilipeOliveiraS/ONE---Oracle-Next-Education---Alura.git](https://github.com/PhilipeOliveiraS/ONE---Oracle-Next-Education---Alura.git)
    cd ONE---Oracle-Next-Education---Alura
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
    Crie um arquivo `requirements.txt` com o seguinte conteúdo e execute o comando de instalação.

    *Conteúdo do `requirements.txt`:*
    ```
    pandas>=1.5.0
    matplotlib>=3.7.0
    seaborn>=0.12.0
    notebook>=6.5.0
    ```
    *Comando de instalação:*
    ```bash
    pip install -r requirements.txt
    ```

#### **Execução**

1.  **Inicie o Jupyter Notebook:**
    ```bash
    jupyter notebook
    ```
2.  **Abra o arquivo:** No seu navegador, navegue até a pasta `Python/Modelagem de dados/Desafio-TelecomX_BR` e abra o arquivo `TelecomX_BR_Final.ipynb`.
3.  **Execute as células:** Execute as células em ordem para replicar todo o fluxo.

---

### 🛠️ **Possíveis Problemas e Soluções**

* **Problema:** Erro ao carregar os dados da URL (`HTTPError`, `URLError`).
    * **Solução:** O notebook carrega os dados de um link no GitHub. Verifique sua conexão com a internet. Se o problema persistir, o link pode estar temporariamente offline.

* **Problema:** Bibliotecas não encontradas (`ModuleNotFoundError`).
    * **Solução:** Certifique-se de que seu ambiente virtual está ativado e que você executou `pip install -r requirements.txt` com sucesso.

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

Este projeto está sob a licença MIT.

---

## Github Stats
![PhilipeOliveiraS](https://github-readme-stats.vercel.app/api?username=PhilipeOliveiraS&show_icons=true&bg_color=0D1117&border_color=30A3DC&icon_color=30A3DC&title_color=0056B3&text_color=FFF)

---
## Minhas Contribuições
[![Repo Card](https://github-readme-stats.vercel.app/api/pin/?username=PhilipeOliveiraS&repo=ONE---Oracle-Next-Education---Alura&bg_color=0D1117&border_color=30A3DC&show_icons=true&icon_color=30A3DC&title_color=0056B3&text_color=FFF)](https://github.com/PhilipeOliveiraS/ONE---Oracle-Next-Education---Alura/tree/main/Python/Modelagem%20de%20dados/Desafio-TelecomX_BR)
---

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=PhilipeOliveiraS&layout=compact&bg_color=0D1117&border_color=30A3DC&show_icons=true&icon_color=30A3DC&title_color=0056B3&text_color=FFF)

---

## 📈 Estatísticas do Repositório
![Repo Size](https://img.shields.io/github/repo-size/PhilipeOliveiraS/ONE---Oracle-Next-Education---Alura?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/PhilipeOliveiraS/ONE---Oracle-Next-Education---Alura?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/PhilipeOliveiraS/ONE---Oracle-Next-Education---Alura?style=social&style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/PhilipeOliveiraS/ONE---Oracle-Next-Education---Alura?style=social&style=for-the-badge)

---

### Estatísticas do Projeto
![Commit Activity](https://img.shields.io/github/commit-activity/y/PhilipeOliveiraS/ONE---Oracle-Next-Education---Alura?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/PhilipeOliveiraS/ONE---Oracle-Next-Education---Alura?style=for-the-badge)
---
![Animation](https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif)
---

Este projeto é mantido por [PhilipeOliveiraS](https://github.com/PhilipeOliveiraS). Contribuições são bem-vindas!

> "Cada linha de código é um passo na jornada de transformar o simples em algo mágico." – PhilipeOliveiraS