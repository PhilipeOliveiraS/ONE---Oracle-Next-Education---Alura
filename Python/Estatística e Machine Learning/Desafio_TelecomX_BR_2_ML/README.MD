# 🤖 Análise Preditiva de Churn - TelecomX (ML)

![Status](https://img.shields.io/badge/status-Concluído-brightgreen?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3.13-blue.svg?style=for-the-badge&logo=PYTHON&logoColor=BLUE)
![Libraries](https://img.shields.io/badge/Libraries-Pandas%20%7C%20Scikit--learn%20%7C%20Imblearn-orange?style=for-the-badge)

Este repositório contém um pipeline completo de Machine Learning para prever a evasão de clientes (churn) da empresa fictícia **Telecom X**, desde a preparação dos dados até a avaliação de um modelo de classificação de alta performance.

---
</h1><p align="center">

  <strong>Utilizando Machine Learning para prever e reduzir a evasão de clientes com 97% de acurácia.</strong></p>

  <p align="center">

  <img src="https://raw.githubusercontent.com/PhilipeOliveiraS/ONE---Oracle-Next-Education---Alura/main/Python/Estat%C3%ADstica%20e%20Machine%20Learning/Desafio_TelecomX_BR_2_ML/matriz_correlacao.png" alt="Matriz de Correlação" width="80%"></p>

## 🎯 O Problema e a Solução

No competitivo setor de telecomunicações, a **evasão de clientes (churn)** representa uma perda direta de receita e um alto custo de aquisição para substituir esses clientes. Empresas que não conseguem antecipar esse movimento perdem faturamento e participação de mercado. A análise exploratória inicial revelou que clientes com contratos mensais e sem serviços de segurança/suporte eram os mais propensos a sair.

Este projeto vai além da análise e implementa um **modelo de Machine Learning de alta performance** que analisa o perfil dos clientes para **prever com 97% de acurácia quais deles estão mais propensos a cancelar seus serviços**. A solução permite que a empresa saia de uma postura reativa para uma estratégia **proativa de retenção**, focando esforços e recursos nos clientes com maior risco de evasão.

## ✨ Funcionalidades do Projeto 
**Preparação e Balanceamento de Dados:** Tratamento de dados brutos, transformação de variáveis categóricas (One-Hot Encoding) e aplicação da técnica **SMOTE** para corrigir o desbalanceamento de classes, garantindo um modelo justo e preciso.* **Análise Exploratória e de Correlação:** Geração de insights visuais através de heatmaps para identificar as variáveis mais influentes no processo de churn.* **Benchmarking de Modelos:** Treinamento e avaliação de 6 algoritmos de classificação (Regressão Logística, Árvore de Decisão, Random Forest, AdaBoost, XGBoost e LightGBM) para identificar o de maior performance.* **Otimização de Hiperparâmetros:** Utilização de técnicas de tuning para extrair a máxima performance do modelo campeão (LightGBM), elevando sua precisão e confiabilidade.* **Análise de Viabilidade de Negócio:** Interpretação dos resultados para sugerir estratégias acionáveis, como a criação de "Pacotes de Tranquilidade" para perfis de clientes específicos.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com um stack de Data Science moderno e robusto.

| Categoria      | Tecnologia/Ferramenta                                           |

|----------------|-----------------------------------------------------------------|

| **Dados & ML** | `Pandas`, `NumPy`, `Scikit-learn`, `Imbalanced-learn (SMOTE)`     |

| **Modelagem** | `LightGBM`, `XGBoost`, `Random Forest`                          |

| **Visualização**| `Matplotlib`, `Seaborn`                                         |

| **Ambiente** | `Jupyter Notebook`, `Google Colab`                              |  
---

### 📖 **Índice Rápido**


1.  [**Contexto do Desafio**](#-contexto-do-desafio)
2.  [**Resultados de Negócio**](#-resultados-de-negócio)
3.  [**Pipeline do Projeto**](#-pipeline-do-projeto)
4.  [**Principais Insights da Análise**](#-principais-insights-da-análise)
5.  [**Desafios e Aprendizados**](#-desafios-e-aprendizados)
6.  [**Estrutura do Repositório**](#-estrutura-do-repositório)
7.  [**Como Executar o Projeto**](#-como-executar-o-projeto)
8.  [**Próximos Passos e Como Contribuir**](#-próximos-passos-e-como-contribuir)
9.  [**Licença**](#-licença)

---

### 🎯 **Contexto do Desafio**

Continuando o trabalho da Parte 1, esta fase do projeto avança da análise exploratória para a **modelagem preditiva**. O objetivo é utilizar técnicas de Machine Learning para construir um sistema capaz de prever quais clientes têm a maior probabilidade de cancelar seus serviços, permitindo que a Telecom X atue de forma proativa para retê-los.

### 📈 **Resultados de Negócio**

O modelo final (`LightGBM` otimizado) alcançou uma **Acurácia e F1-Score de 97%** no conjunto de teste. Isso significa uma altíssima capacidade de identificar corretamente tanto os clientes que irão evadir quanto os que permanecerão. Em termos de negócio, isso se traduz em uma **redução drástica de custos** com campanhas de retenção genéricas e um **aumento significativo no ROI**, ao focar os esforços apenas nos clientes com real risco de churn.

### 🔬 **Pipeline do Projeto**

O fluxo de trabalho foi estruturado em um pipeline completo de Machine Learning:

1.  **Preparação dos Dados:** Carregamento dos dados tratados, encoding de variáveis categóricas com `OneHotEncoder` e balanceamento de classes com a técnica **SMOTE**.
2.  **Análise de Correlação:** Geração de uma matriz de correlação para identificar as variáveis mais influentes no churn.
3.  **Treinamento e Avaliação de Modelos:** Separação dos dados em treino e teste, seguida pelo treinamento e avaliação de múltiplos algoritmos de classificação.
4.  **Otimização:** Seleção do melhor modelo e otimização de seus hiperparâmetros para máxima performance.

### 💡 **Principais Insights da Análise**

A análise de correlação revelou os fatores mais influentes na previsão do churn:

* **Correlação Negativa Forte:** O **`tenure` (tempo de contrato)** é o fator mais forte de retenção. Quanto mais tempo um cliente está na base, menor a sua chance de sair.
* **Correlação Positiva Forte:** O tipo de contrato **Mensal (`Month-to-month`)** é o principal indicador de risco de churn. Da mesma forma, o serviço de **Internet de Fibra Ótica** e **cobranças mensais mais altas** também estão positivamente correlacionados com a evasão.

### 🧠 **Desafios e Aprendizados**

Um dos maiores desafios foi lidar com o dataset desbalanceado. Superá-lo exigiu a aplicação da técnica **SMOTE**, o que me permitiu treinar o modelo de forma justa e evitar um viés para a classe majoritária. Este projeto foi uma grande oportunidade para aprofundar minhas habilidades em técnicas de pré-processamento, comparação de performance de diferentes algoritmos e, principalmente, em **traduzir os resultados de um modelo em recomendações estratégicas de negócio**.

### 📂 **Estrutura do Repositório**

└── Python/

└── Estatística e Machine Learning/

└── Desafio_TelecomX_BR_2_ML/

├── TelecomX_BR_2_ML.ipynb    # Notebook com o pipeline completo.

└── dados_tratados.csv        # Arquivo de dados limpos usado no projeto.

---

### 🚀 **Como Executar o Projeto**

Para replicar esta análise em seu ambiente, siga os passos abaixo.

#### **Pré-requisitos**

* Python (3.13, conforme seu padrão)
* pip
* Git

#### **Instalação**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/PhilipeOliveiraS/ONE---Oracle-Next-Education---Alura.git](https://github.com/PhilipeOliveiraS/ONE---Oracle-Next-Education---Alura.git)
    cd ONE---Oracle-Next-Education---Alura
    ```

2.  **Crie e ative um ambiente virtual:**
    * No macOS/Linux: `python3 -m venv venv && source venv/bin/activate`
    * No Windows: `python -m venv venv && .\venv\Scripts\activate`

3.  **Instale as dependências:**
    Crie um arquivo `requirements.txt` com o conteúdo abaixo e execute o comando de instalação.

    *Conteúdo do `requirements.txt`:*
    ```
    pandas>=1.5.0
    matplotlib>=3.7.0
    seaborn>=0.12.0
    scikit-learn>=1.3.0
    imbalanced-learn>=0.10.0
    lightgbm>=3.3.0
    notebook>=6.5.0
    ```
    *Comando de instalação:*
    ```bash
    pip install -r requirements.txt
    ```

#### **Execução**

1.  **Navegue até a pasta correta:**
    ```bash
    cd "Python/Estatística e Machine Learning/Desafio_TelecomX_BR_2_ML"
    ```
2.  **Inicie o Jupyter Notebook:** `jupyter notebook`
3.  **Abra o arquivo:** No seu navegador, clique em `TelecomX_BR_2_ML.ipynb` e execute as células em ordem.

---

### 🌐 **Próximos Passos e Como Contribuir**

* **Otimização de Hiperparâmetros:** Explorar técnicas como Grid Search ou Random Search para otimizar ainda mais o modelo.
* **Deploy do Modelo:** Empacotar o modelo treinado e implantá-lo como uma API para consumo em tempo real.
* **Monitoramento:** Criar um sistema para monitorar a performance do modelo em produção e identificar a necessidade de retreinamento.

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma *Issue* ou um *Pull Request*.

### 📜 **Licença**

Este projeto está sob a licença MIT.

---

## Github Stats
![PhilipeOliveiraS](https://github-readme-stats.vercel.app/api?username=PhilipeOliveiraS&show_icons=true&bg_color=0D1117&border_color=30A3DC&icon_color=30A3DC&title_color=0056B3&text_color=FFF)

---
## Minhas Contribuições
[![Repo Card](https://github-readme-stats.vercel.app/api/pin/?username=PhilipeOliveiraS&repo=ONE---Oracle-Next-Education---Alura&bg_color=0D1117&border_color=30A3DC&show_icons=true&icon_color=30A3DC&title_color=0056B3&text_color=FFF)](https://github.com/PhilipeOliveiraS/ONE---Oracle-Next-Education---Alura/tree/main/Python/Estat%C3%ADstica%20e%20Machine%20Learning/Desafio_TelecomX_BR_2_ML)
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