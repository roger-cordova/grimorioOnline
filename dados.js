// Arquivo com a lista de magias para o grimório online

const magias = [
    {
        nome: "Chuva de Meteoros",
        nivel: 9,
        escola: "Evocação",
        alcance: "120 metros",
        componentes: { verbal: true, somatica: true },
        duracao: "Instântanea",
        descricao: "Você invoca uma chuva de meteoros flamejantes que caem do céu em uma área que você escolher.",
        dano: { tipo: "fogo", dado: "6d6 por meteoro", salvaguarda: "Destreza" },
        classes: "Mago, Feiticeiro",
        areaDeEfeito: "20 pés de raio",
        link: "https://dnd5e.wikidot.com/spells",
        tags: "Dano em Área, Feitiço de Nível Alto, Evocação, Desastre Natural"
      },
      {
        nome: "Destruição",
        nivel: 9,
        escola: "Evocação",
        alcance: "150 pés",
        componentes: { verbal: true, somatica: true, material: "Um diamante puro no valor de pelo menos 2.000 PO" },
        duracao: "Instântanea",
        descricao: "Uma onda de energia destrutiva emana de você.",
        dano: { tipo: "radiante ou necromântico", dado: "20d6" },
        classes: "Mago, Feiticeiro",
        areaDeEfeito: "Um cone de 120 pés",
        link: "https://dnd5e.wikidot.com/spells",
        tags: "Dano Massivo, Versátil, Feitiço Personalizado, Destruição"
      },
      {
        nome: "Fogo do Dragão",
        nivel: 5,
        escola: "Evocação",
        alcance: "Self",
        componentes: { verbal: true, somatica: true },
        duracao: "1 minuto",
        descricao: "Você exala fogo em um cone à sua frente.",
        dano: { tipo: "fogo", dado: "5d8" },
        classes: "Mago, Feiticeiro, Bardo, Paladino",
        areaDeEfeito: "Um cone de 60 pés",
        link: "https://dnd5e.wikidot.com/spells",
        tags: "Elemental, Fogo, Ataque à Distância, Magia Arcana"
      }
    ];