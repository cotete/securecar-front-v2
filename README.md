# SecureCar

O projeto SecureCar é um sistema de diagnóstico que visa indicar soluções para problemas de origem veicular, junto à Porto Seguros. Este repositório contém a parte frontend do projeto, desenvolvido em Vite, TypeScript e Next.js.

**Acesse nosso site aqui: https://securecar-challenge.vercel.app/** 

[Nosso Repo Github original do projeto](https://github.com/securecar/securecar-front-v2)

[Nosso Repo Github com deploy](https://github.com/cotete/securecar-front-v2)*

*Nota: o deploy do projeto consta na branch build, na qual está programada para sempre subir suas atualizações para o ambiente de produção

## Veja o vídeo demonstrativo da nossa aplicação
[Protótipo de Youtube](https://youtu.be/PV4b3i0BW4s)

## Como rodar o projeto com a api java

Para rodar o projeto SecureCar em sua máquina local, siga as instruções abaixo:

1. Certifique-se de ter a jdk 21 instalada no seu pc, antes de tudo. É possível baixá-la [aqui](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)

2. Clone este repositório em sua máquina local utilizando o seguinte comando:

    ```bash
    git clone https://github.com/securecar/sc-api
    ```

3. Acesse o diretório do projeto:

    ```bash
    cd sc-api
    ```

4. Instale as dependências maven.

5. O projeto estará disponível no endereço [http://localhost:8080](http://localhost:8080).

O projeto ainda consta com integrações com ibm watson, que está interligada a uma api python, usando Flask e um modelo pickle (inteligência artificial) para fazer previsões. Além disso, também executa funções como cadastrar a parte de conserto, as peças utilizadas, gerar o pdf e também consultar o cpf. O projeto também pode ser consultado, caso queira [aqui](https://github.com/securecar/ia-sc)

## Contribuintes do projeto

<div style="display: flex; gap: 10px; align-items: center; margin: 20px 0">
    <img src="https://github.com/enricodelguerra.png" style="height: 50px; width: 50px; border-radius: 100%" />
    <span style="font-size: 1.5em;">Enrico Del Guerra</span>
</div>

<div style="display: flex; gap: 10px; align-items: center; margin: 20px 0">
    <img src="./src/assets/imgs/cotete.webp" style="height: 50px; width: 50px; border-radius: 100%" />
    <span style="font-size: 1.5em;">Felipe Ribeiro da Silva</span>
</div>
<div style="display: flex; gap: 10px; align-items: center; margin: 20px 0">
    <img src="https://github.com/gustavodscruz.png" style="height: 50px; width: 50px; border-radius: 100%" />
    <span style="font-size: 1.5em;">Gustavo Dias da Silva Cruz</span>
</div>

## Porto Seguro
<img src="./src/assets/imgs/porto-seguro.svg" height="100px"/>
<br>

A Porto Seguro é uma das maiores seguradoras do Brasil, com uma história de mais de 70 anos no mercado. Fundada em 1945, a empresa oferece uma ampla gama de produtos e serviços, incluindo seguros de automóveis, residenciais, de saúde, de vida, e muito mais. Além disso, a Porto Seguro é conhecida por seu compromisso com a inovação e a excelência no atendimento ao cliente, buscando sempre oferecer soluções que atendam às necessidades e expectativas de seus segurados.

Com uma rede de atendimento que abrange todo o território nacional, a Porto Seguro se destaca pela qualidade de seus serviços e pela confiança que transmite aos seus clientes. A empresa também investe em iniciativas sociais e ambientais, contribuindo para o desenvolvimento sustentável da sociedade.

Para mais informações, visite o site oficial da Porto Seguro: [Porto Seguro](https://www.portoseguro.com.br).
