
    // Criando um array de objetos para representar os jogadores
    let dados = [
      {
        nome: 'TGD',
        sobre: 'Especialista em estratégias de combate e controle de mapa.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/tgd',
          youtube: 'https://www.youtube.com/@TrueGameData'
        }
      },
      {
        nome: 'ninext',
        sobre: 'Jogador conhecido por suas jogadas estratégicas e consistência.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/ninext'
        }
      },
      {
        nome: 'sn4rfx',
        sobre: 'Jogador conhecido por suas jogadas criativas e imprevisíveis.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/sn4rfx'
        }
      },
      {
        nome: 'gepege',
        sobre: 'Jogador com um estilo de jogo mais calmo e estratégico.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/gepege'
        }
      },
      {
        nome: 'lukinas',
        sobre: 'Jogador conhecido por suas altas pontuações e habilidades com snipers.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/lukinas'
        }
      },
      {
        nome: 'Aydan',
        sobre: 'Conhecido por suas jogadas agressivas e altas pontuações.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/aydan'
        }
      },
      {
        nome: 'Swagg',
        sobre: 'Um dos streamers mais populares de Warzone, conhecido por suas análises e jogadas estratégicas.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/swagg'
        }
      },
      {
        nome: 'NICKMERCS',
        sobre: 'Um dos primeiros grandes nomes de Warzone, com uma comunidade de fãs gigante.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/nickmercs'
        }
      },
      {
        nome: 'Tommey',
        sobre: 'Jogador profissional britânico, conhecido por suas habilidades com snipers.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/tommyyfps'
        }
      },
      {
        nome: 'Symfuhny',
        sobre: 'Um dos jogadores mais consistentes de Warzone, conhecido por suas jogadas inteligentes.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/symfuhny'
        }
      },
      {
        nome: 'HusKerrs',
        sobre: 'Jogador profissional conhecido por suas altas pontuações e jogadas agressivas.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/huskerrs'
        }
      },
      {
        nome: 'IceManIsaac',
        sobre: 'Jogador profissional conhecido por suas habilidades com snipers e jogadas estratégicas.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/icemanisaac'
        }
      },
      {
        nome: 'Ferg',
        sobre: 'Jogador profissional conhecido por suas jogadas consistentes e habilidade com diversas armas.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/ferg'
        }
      },
      /*{
        nome: 'ZLaner',
        sobre: 'Jogador profissional conhecido por suas jogadas agressivas e habilidades com veículos.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/zlaner'
        }
      },
      */
      {
        nome: 'Crowder',
        sobre: 'Jogador profissional conhecido por suas jogadas inteligentes e habilidade com diversas armas.',
        redesSociais: {
          twitch: 'https://www.twitch.com/crowder'
        }
      },
      /*{
        nome: 'Breadman',
        sobre: 'Jogador agressivo, conhecido por suas jogadas rápidas e imprevisíveis.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/breadman'
        }
      },
      */
      {
        nome: 'TeePee',
        sobre: 'Jogador profissional e comentarista, conhecido por sua expertise tática.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/teepee'
        }
      },
      {
        nome: 'Scump',
        sobre: 'Campeão mundial de Call of Duty, conhecido por suas jogadas dominantes.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/scump'
        }
      },
      {
        nome: 'Envoy',
        sobre: 'Jogador estratégico, famoso por suas rotações e controle de mapa.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/envoy'
        }
      },
      {
        nome: 'Biffle',
        sobre: 'Jogador altamente habilidoso com precisão em combate de curta e longa distância.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/biffle'
        }
      },
      {
        nome: 'Booya',
        sobre: 'Conhecido por seu estilo estratégico e alta taxa de vitórias.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/booya'
        }
      },
      {
        nome: 'Recrent',
        sobre: 'Jogador profissional russo com jogadas agressivas e alta precisão.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/recrent'
        }
      },
      {
        nome: 'JoeWo',
        sobre: 'Conhecido por sua movimentação impressionante e jogadas rápidas.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/joewo'
        }
      },
      {
        nome: 'SuperEvan',
        sobre: 'Jogador agressivo com um estilo único de jogo em equipe.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/superevan'
        }
      },
      {
        nome: 'HyDra',
        sobre: 'Jogador profissional francês, com jogadas rápidas e precisas.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/hydra'
        }
      },
      {
        nome: 'Futives',
        sobre: 'Conhecido por sua precisão incrível com snipers.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/futives'
        }
      },
      {
        nome: 'Sebas',
        sobre: 'Jogador de Warzone que se destaca pelas altas killstreaks.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/sebas'
        }
      },
      {
        nome: 'Blazt',
        sobre: 'Jogador profissional com um estilo de jogo calculado e eficiente.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/blazt'
        }
      },
      {
        nome: 'Frosty',
        sobre: 'Conhecido por suas jogadas táticas e precisão com rifles de assalto.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/frosty'
        }
      },
      {
        nome: 'Jukeyz',
        sobre: 'Jogador europeu conhecido por seu estilo agressivo e alta taxa de vitórias.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/jukeyz'
        }
      },
      {
        nome: 'Rated',
        sobre: 'Jogador britânico com uma das melhores táticas defensivas.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/rated'
        }
      },
      {
        nome: 'UnRationaL',
        sobre: 'Jogador com uma precisão absurda e táticas inteligentes.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/unrational'
        }
      },
      {
        nome: 'OpTic Texas',
        sobre: 'Equipe altamente competitiva com vários campeonatos.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/optictexas'
        }
      },
      {
        nome: 'Tommy',
        sobre: 'Conhecido por seu estilo de jogo agressivo e precisão.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/tommy'
        }
      },
      {
        nome: 'Destroy',
        sobre: 'Jogador versátil, altamente conhecido por sua agilidade e movimentação.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/destroy'
        }
      },
      {
        nome: 'JGod',
        sobre: 'Criador de conteúdo famoso por suas análises profundas e guias detalhados.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/jgod'
        }
      },
      {
        nome: 'ClutchBelk',
        sobre: 'Jogador conhecido por suas jogadas intensas e imprevisíveis.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/clutchbelk'
        }
      },
      {
        nome: 'Gorilla',
        sobre: 'Jogador com uma precisão letal e jogadas calculadas.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/gorilla'
        }
      },
      {
        nome: 'Frozone',
        sobre: 'Jogador conhecido por sua movimentação fluida e combate corpo a corpo.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/frozone'
        }
      },
      {
        nome: 'Karma',
        sobre: 'Um dos jogadores mais condecorados da história do Call of Duty.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/karma'
        }
      },
      {
        nome: 'Blake',
        sobre: 'Conhecido por sua precisão com snipers e estratégias de longo alcance.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/blake'
        }
      },
      {
        nome: 'Mutekimaru',
        sobre: 'Jogador japonês com reflexos rápidos e jogadas precisas.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/mutekimaru'
        }
      },
      {
        nome: 'Dirty',
        sobre: 'Famoso por suas habilidades em combate à distância com snipers.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/dirty'
        }
      },
      {
        nome: 'MerK',
        sobre: 'Analista e ex-jogador profissional com vasto conhecimento do jogo.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/merk'
        }
      },
      {
        nome: 'DougisRaw',
        sobre: 'Jogador conhecido por sua movimentação agressiva e habilidades com armas de curto alcance.',
        redesSociais: {
          twitch: 'https://www.twitch.tv/dougisraw'
        }
      },
      
    ];

