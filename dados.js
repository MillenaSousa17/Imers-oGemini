let dados = [
    {
        // 2004
        imagem:  "img/gtaSan.jfif",
        titulo: "Grand Theft Auto: San Andrea",
        descricao: "Grand Theft Auto: San Andreas é um marco na história dos videogames um título que redefiniu o gênero de mundo aberto e se tornou um clássico cult. O jogo transportou os jogadores para o estado fictício de San Andreas, nos Estados Unidos, no início dos anos 90, onde gangues, drogas e corrupção eram a ordem do dia.",
        informacoes: "https://www.rockstargames.com/br/games/sanandreas",
        lancamento: "26 de outubro de 2004",
        genero: "ação, aventura, tiro",
        tags: "tiro, gta, Rockstar Games, rockstar games,"
    },
    {
        //
        imagem: "img/stardewValley.jfif",
        titulo: "Stardew Valley",
        descricao: "Escape para a vida rural em Stardew Valley! Cultive sua terra, crie animais, explore cavernas e construa relacionamentos com os moradores da cidade.",
        informacoes: "https://store.steampowered.com/app/413150/Stardew_Valley/",
        lancamento: "26 de fevereiro de 2016",
        genero: "simulação, rpg",
        tags: "fazenda, simulação, simulacao, simulaçao, rpg"
    },
    {
        imagem:"img/godofwar2018.jfif",
        titulo: "God of War (2018)",
        descricao: "Reviva a mitologia nórdica nesta reinvenção da franquia God of War.Acompanhe Kratos em uma jornada épica ao lado de seu filho, Atreus.",
        informacoes: "https://www.playstation.com/en-us/games/god-of-war/",
        lancamento: "20 de abril de 2018",
        genero: "ação, aventura, luta, rpg",
        tags: "luta, açao, acao"
    },
    {
        imagem:"img/redDeadRedemption2.jfif",
        titulo: "Red Dead Redemption 2",
        descricao: "Mergulhe no selvagem oeste em Red Dead Redemption 2. Viva como um fora da lei no final do século XIX, em uma aventura épica de vingança e redenção.",
        informacoes: "https://www.rockstargames.com/br/games/reddeadredemption2",
        lancamento: "26 de outubro de 2018",
        genero: "tiro, faroeste, ação, aventura ",
        tags: ""
    },
    {
        imagem: "img/thelastofus.jfif",
        titulo: "The Last of Us",
        descricao: "The Last of Us é uma franquia de jogos eletrônicos de ação-aventura, tiro em terceira pessoa e survival horror exclusiva da Sony para os consoles da PlayStation, criada por Neil Druckmann.",
        informacoes: "https://www.playstation.com/pt-br/games/the-last-of-us-part-i/",
        lancamento: "14 de junho de 2013",
        genero: "ação, aventura, survival horror",
        tags: "zumbi, apocalipse, survival"
    },
    {
        imagem: "img/thelastofus2.jfif",
        titulo: "The Last of Us Part II",
        descricao: "The Last of Us Part II é um jogo eletrônico de ação-aventura desenvolvido pela Naughty Dog e publicado pela Sony Interactive Entertainment. É o segundo jogo da franquia e foi lançado exclusivamente para PlayStation 4.",
        informacoes: "https://www.playstation.com/en-us/games/the-last-of-us-part-ii/",
        lancamento: "19 de junho de 2020",
        genero: "ação, aventura, survival horror",
        tags: "zumbi, apocalipse, survival"
    },
    {
        imagem: "img/minecraft.jfif", // Substitua pelo caminho da sua imagem
        titulo: "Minecraft",
        descricao: "Minecraft é um jogo eletrônico sandbox de sobrevivência criado pelo desenvolvedor sueco Markus Persson e posteriormente desenvolvido e publicado pela Mojang Studios, cuja propriedade intelectual foi obtida pela Microsoft em 2014",
        informacoes: "https://www.minecraft.net/",
        lancamento: "18 de novembro de 2011",
        genero: "aventura, sandbox, construção",
        tags: "blocos, mundo aberto, criativo"
    },
    {
        imagem: "img/sonic.jfif", // Substitua pelo caminho da sua imagem
        titulo: "Sonic the Hedgehog",
        descricao: "Sonic the Hedgehog é uma franquia de jogos eletrônicos de plataforma criada por Yuji Naka e Naoto Oshima da equipe Sonic Team, da Sega, sendo atualmente administrada por Takashi Iizuka.",
        informacoes: "https://www.sega.com/games/sonic-the-hedgehog",
        lancamento: " 23 de junho de 1991",
        genero: "plataforma, ação",
        tags: "corrida, sonic, clássico"
    },
    {
        imagem: "img/spiderMan.jfif", // Substitua pelo caminho da sua imagem
        titulo: "Marvel's Spider-Man",
        descricao: "Marvel's Spider-Man é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment.",
        informacoes: "https://www.playstation.com/en-us/games/marvels-spider-man/",
        lancamento: "7 de setembro de 2018",
        genero: "ação, aventura, mundo aberto",
        tags: "super-herói, nova york, aranha"
    },
    {
        imagem: "img/spiderManMiles.jfif", // Substitua pelo caminho da sua imagem
        titulo: "Marvel's Spider-Man: Miles Morales",
        descricao: "Marvel's Spider-Man: Miles Morales é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment para o PlayStation 4 e PlayStation 5",
        informacoes: "https://www.playstation.com/en-us/games/marvels-spider-man-miles-morales/",
        lancamento: "12 de novembro de 2020",
        genero: "ação, aventura, mundo aberto",
        tags: "super-herói, nova york, aranha"
    },
    {
        imagem: "img/resident4.jfif", // Substitua pelo caminho da sua imagem
        titulo: "Resident Evil 4",
        descricao: "Um agente especial é enviado para uma vila isolada para resgatar a filha do presidente, mas encontra horrores inimagináveis.",
        informacoes: "https://www.capcom.com/games/residentevil/",
        lancamento:"11 de janeiro de 2005",
        genero: "survival horror, ação",
        tags: "zumbi, terror, sobrevivência"
    }, {
        imagem: "img/codBlack.jfif", // Substitua pelo caminho da sua imagem
        titulo: "Call of Duty: Black Ops III",
        descricao: "Call of Duty: Black Ops III é um jogo eletrônico de tiro em primeira pessoa produzido pela Treyarch e lançado pela Activision para Microsoft Windows, PlayStation 4 e Xbox One.",
        informacoes: "https://www.callofduty.com/blackops3",
        lancamento: "6 de novembro de 2015",
        genero: "tiro em primeira pessoa, multiplayer",
        tags: "fps, multiplayer, zumbi"
    },
    {
        imagem: "img/csgo.jfif", // Substitua pelo caminho da sua imagem
        titulo: "Counter-Strike: Global Offensive",
        descricao: "Counter-Strike: Global Offensive foi um jogo online desenvolvido pela Valve Corporation e pela Hidden Path Entertainment, sendo uma sequência de Counter-Strike: Source. É o quarto título principal da franquia.",
        informacoes: "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
        lancamento: "21 de agosto de 2012",
        genero: "tiro em primeira pessoa, multiplayer",
        tags: "fps, multiplayer, competitivo"
    },
    

];



