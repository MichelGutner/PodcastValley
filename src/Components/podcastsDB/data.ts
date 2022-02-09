const songs = [
    {
        title: "a importancia da contribuicao em open source",
        subtitle: "Faladev #30 | A importância da contribuição em Open Source",
        members: "Diego Fernandes, João Pedro, Diego Haz e Bruno Lemos",
        date: "22/01/2022 16:35:40",
        images: require('../../../assets/artWorks/opensource.jpg'),
        description: "Nesse episódio do Faladev, Diego Fernandes se reúne com João Pedro Schmitz, Bruno Lemos e Diego Haz, para discutir sobre a importância da contribuição open source e quais desafios circulam na comunidade",
        url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/opensource.m4a',
        id: '30',
        duration: 3981
    },
    {
        id: '29',
        title: "uma conversa sobre programacao funcional e orientacao a objetos",
        subtitle: "Faladev #29 | Duas perspectivas diferentes na mesa: uma conversa sobre PF e OOP",
        members: "Diego Fernandes, Dani Leão, Laura Beatris e Rafael Camarda",
        date: "15/01/2021 13:00:00",
        images: require('../../../assets/artWorks/funcional.jpg'),
        description: "Diego e Dani receberam Laura Beatris e Rafael Camarda na mesa do Faladev para conversarem sobre programação funcional e programação orientada a objetos.",
        url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/funcional.m4a',
        duration: 4237
    },

    {
        id: '28',
        title: "barreiras e solucoes propostas por micro servicos",
        subtitle: "Faladev #28 | Por trás de barreiras e soluções propostas por micro-serviços",
        members: "Diego Fernandes, Dani Leão, Wesley Williams e Lucas Santos",
        date: "08/01/2021 13:00:00",
        images: require('../../../assets/artWorks/microservicos.jpg'),
        description: "Os desenvolvedores Wesley Willians e Lucas Santos foram convidados para este Faladev para ter uma conversa sobre o que são micro-serviços e quais são os desafios e as barreiras de sua aplicação. Nessa edição, Diego Fernandes e Daniele Evangelista guiam a conversa levantando tópicos e questionamentos relevantes sobre o assunto.",
        url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/microservicos.m4a',
        duration: 5506
    },
    {
        id: '27',
        title: "aplicacao de arquiteturas mvc e clean architecture na pratica",
        subtitle: "Faladev #27 | Aplicação de arquiteturas MVC e CA na prática",
        members: "Diego Fernandes, Dani Leão, Otávio Lemos e Rodrigo Branas",
        date: "18/12/2020 14:00:00",
        images: require('../../../assets/artWorks/clean.jpg'),
        description: "Diego Fernandes e Daniele Evangelista receberam Otávio Lemos e Rodrigo Branas para bater um papo sobre arquiteturas modernas de desenvolvimento, aplicadas na indústria da tecnologia. Quais são os fundamentos, os princípios e a importância de debater arquiteturas neste ecossistema?",
        url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/clean.m4a',
        duration: 5044
    },
    {
        id: '26',
        title: "entrevista jose valim criador do elixir",
        subtitle: "Faladev #26 | Especial: entrevista exclusiva com José Valim, criador da linguagem Elixir",
        members: "Diego Fernandes e José Valim",
        date: "12/04/2020 15:00:00",
        images: require('../../../assets/artWorks/josevalim.jpg'),
        description: "Nesta edição especial de final de temporada tivemos a oportunidade de ter uma conversa com José Valim, dev brasileiro que criou a linguagem de programação Elixir — utilizada internacionalmente em diversas tecnologias, incluindo Discord e Pinterest. O assunto da semana girou em diversos processos envolvidos na criação de uma linguagem nova, que propõe ser uma alternativa eficiente no mercado da tecnologia.",
        url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/jose-valim.m4a',
        duration: 4396
    },
    {
        id: '25',
        title: "o que e ui ux",
        subtitle: "Faladev #25 | O que é UX/UI?",
        members: "Diego Fernandes, Tiago Luchtenberg e Thainan Librelon",
        date: "30/10/2020 14:00:00",
        images: require('../../../assets/artWorks/design.jpg'),
        description: "A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso. Toda semana reunimos três profissionais da tecnologia para discutir sobre tudo que circula na órbita da programação.</p><p>O Faladev é um podcast original Rocketseat onde conversamos sobre diversos assuntos que importam para a sua carreira dev. Nesse episódio, Diego Fernandes se reúne com Thainan Librelon e Tiago Luchtenberg para discutir sobre: Desenvolvedor pode fazer o trabalho do UI/UX, qual impacto? Qual é o momento ideal pra ter pessoas especializadas em UX e UI? E afinal, o que é UI e o que é UX?",
        url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/design.m4a',
        duration: 2715
    },
    {
        id: '24',
        title: "como virar lider desenvolvimento",
        subtitle: "Faladev #24 | Como virar líder de desenvolvimento?",
        members: "Diego Fernandes, João Paulo e Cleiton Souza",
        date: "23/10/2020 14:00:00",
        images: require('../../../assets/artWorks/lider-desenvolvimento.jpg'),
        description: "A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso. Toda semana reunimos três profissionais da tecnologia para discutir sobre tudo que circula na órbita da programação.</p><p>O Faladev é um podcast original Rocketseat onde conversamos sobre diversos assuntos que importam para a sua carreira dev. Nesse episódio, Diego Fernandes se reúne com Cleiton Souza e João Paulo de Magalhães para discutir sobre liderança, considerando aspectos profissionais, técnicos e até mesmo emocionais, o que envolve ser um líder de desenvolvimento? Afinal, o que é um líder de desenvolvimento?",
        url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/lider-desenvolvimento.m4a',
        duration: 2917
    },
    {
        id: '23',
        title: "comunidades e tecnologia",
        subtitle: "FalaDev #23 | O que comunidades têm a ver com tecnologia?",
        members: "Diego Fernandes, Isabela Castilho e João Inácio",
        date: "16/10/2020 13:00:00",
        images: require('../../../assets/artWorks/comunidade.jpg'),
        description: "A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso. Toda semana reunimos três profissionais da tecnologia para discutir sobre tudo que circula na órbita da programação.</p><p>O Faladev é um podcast original Rocketseat onde conversamos sobre diversos assuntos que importam para a sua carreira dev.</p><p>Nesse primeiro episódio da nova temporada, Diego Fernandes se reúne com Isabela Castilho e João Inácio Neto (Biro) para discutir sobre comunidades e o impacto que elas exercem na carreira de devs em busca do próximo nível. Afinal, O que é uma comunidade e o que tem a ver com tecnologia?",
        url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/comunidade.m4a',
        duration: 2677
    },
    {
        id: '22',
        title: "typescript vale a pena",
        subtitle: "FalaDev #22 - TypeScript vale a pena? JavaScript perde sentido?",
        members: "Diego Fernandes, Mayk Brito e João Pedro",
        date: "04/05/2020 14:49:35",
        images: require('../../../assets/artWorks/typescript.jpg'),
        description: "Três programadores conversam sobre TypeScript. Vamos discutir a usabilidade e as previsões da linguagem no cenário da programação. A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso.",
        url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/typescript.m4a',
        duration: 1772
    },
    {
        id: '21',
        title: "estrategias de autenticacao jwt oauth",
        subtitle: "FalaDev #21 - Estratégias de autenticação, JWT, OAuth, qual usar?",
        members: "Diego Fernandes, Higo Ribeiro e Guilherme Pellizzetti",
        date: "09/04/2020 20:00:00",
        images: require('../../../assets/artWorks/autenticacao.jpg'),
        description: "Três programadores conversam sobre estratégia de autenticação.</p><p>Vamos discutir quais aspectos você deve considerar na hora de fazer a sua escolha.</p><p>A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso.",
        url: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/autenticacao.m4a',
        duration: 1463
    },
]

export default songs;