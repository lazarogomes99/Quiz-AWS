const perguntas = [
    {
        pergunta: "O que significa AWS?",
        respostas: [
            "Amazon Web System",
            "American Web Services",
            "Amazon Web Services",
        ],
        correta: 2
    },
    {
        pergunta: "Qual serviço da AWS é usado para armazenamento de objetos?",
        respostas: [
            "AWS S3",
            "AWS EC2",
            "AWS RDS",
        ],
        correta: 0
    },
    {
        pergunta: "Qual serviço da AWS é utilizado para implantar e escalar aplicações e serviços Web?",
        respostas: [
            "AWS Lambda",
            "AWS CloudFront",
            "AWS Elastic Beanstalk",
        ],
        correta: 2
    },
    {
        pergunta: "Qual serviço da AWS é utilizado para provisionar máquinas virtuais na nuvem?",
        respostas: [
            "AWS S3",
            "AWS EC2",
            "AWS Lambda",
        ],
        correta: 1
    },
    {
        pergunta: "Qual serviço AWS registra e monitora atividades de auditoria nas contas da AWS?",
        respostas: [
            "AWS CloudTrail",
            "AWS Route 53",
            "AWS IAM",
        ],
        correta: 0
    },
    {
        pergunta: "Qual serviço AWS é usado para criar um data warehouse na nuvem?",
        respostas: [
            "AWS Redshift",
            "AWS DynamoDB",
            "AWS Aurora",
        ],
        correta: 0
    },
    {
        pergunta: "Qual serviço AWS é uma plataforma de streaming de dados em tempo real?",
        respostas: [
            "AWS SQS",
            "AWS Kinesis",
            "AWS Glue",
        ],
        correta: 1
    },
    {
        pergunta: "Qual serviço AWS é uma solução de cache web e CDN?",
        respostas: [
            "AWS CloudFront",
            "AWS ElastiCache",
            "AWS API Gateway",
        ],
        correta: 0
    },
    {
        pergunta: "Qual serviço AWS fornece acesso gerenciado a bancos de dados relacionais?",
        respostas: [
            "AWS RDS",
            "AWS DynamoDB",
            "AWS Redshift",
        ],
        correta: 0
    },
    {
        pergunta: "Qual serviço AWS permite que você execute código sem provisionar ou gerenciar servidores?",
        respostas: [
            "AWS EC2",
            "AWS Lambda",
            "AWS ECS",
        ],
        correta: 1
    },
    {
        pergunta: "Qual serviço da AWS é usado para análise e reconhecimento de imagens e vídeos?",
        respostas: [
            "Amazon Rekognition",
            "Amazon Polly",
            "Amazon Lex",
        ],
        correta: 0
    },    
    {
        "pergunta": "Qual serviço da AWS é usado para monitorar recursos e aplicativos na nuvem, coletando e rastreando métricas em tempo real?",
        "respostas": [
            "AWS S3",
            "AWS EC2",
            "AWS CloudWatch"
        ],
        "correta": 2
    },
    {
        pergunta: "Qual serviço da AWS permite a criação de ambientes de trabalho virtuais baseados na nuvem?",
        respostas: [
            "Amazon WorkSpaces",
            "Amazon S3",
            "Amazon Glacier",
        ],
        correta: 0
    },
    {
        pergunta: "Qual serviço AWS fornece armazenamento de banco de dados NoSQL totalmente gerenciado?",
        respostas: [
            "Amazon Aurora",
            "Amazon DynamoDB",
            "Amazon RDS",
        ],
        correta: 1
    },
    {
        pergunta: "Qual serviço AWS oferece uma solução de análise de big data em tempo real e em lote?",
        respostas: [
            "Amazon EMR",
            "Amazon RDS",
            "Amazon Athena",
        ],
        correta: 0
    }
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const corretas = new Set()
const totalPerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    

    for(const resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (evento) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
            }   

            mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
        }
        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
}