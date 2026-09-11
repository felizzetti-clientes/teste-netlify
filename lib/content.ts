// Conteúdo extraído do site atual da TRG Fitness (trgfitness.com.br)
// em setembro de 2026. Nenhuma informação institucional, número ou
// especificação foi inventada — apenas reorganizada e reescrita.
// Imagens: URLs públicas do site atual, usadas como referência durante
// o desenvolvimento (ver README > "Imagens" para o plano de substituição
// por assets locais antes do lançamento).

export const SITE = {
  name: "TRG Fitness",
  url: "https://trgfitness.com.br",
  description:
    "TRG Fitness é uma fabricante brasileira de equipamentos de musculação e cardiovasculares, com produção 100% nacional há 28 anos.",
  ogImage:
    "https://trgfitness.com.br/wp-content/uploads/2023/06/Aparelhos-para-Academias-Equipamentos-Cardiovasculares-TRG-Fitness-1.png",
};

export const SOCIAL = {
  facebook: "https://www.facebook.com/trgfitnessbr",
  instagram: "https://www.instagram.com/trgfitnessbr/",
  youtube: "https://www.youtube.com/channel/UC05bOCN64Bq88vr6Au9Go-Q",
  whatsapp: "https://wa.me/5547999188205",
};

export const STORE_URL = "https://loja.trgfitness.com.br/";

export const UNITS = [
  {
    label: "Blumenau (Matriz)",
    tag: "Novo Showroom",
    address: "Rua Bernardino José de Oliveira, 1111 — Badenfurt, Blumenau/SC",
    phones: [
      { label: "(47) 3334-1003", href: "tel:+554733341003" },
      {
        label: "(47) 99918-8205 — Vendas, Alexandre",
        href: "https://api.whatsapp.com/send/?phone=5547999188205",
      },
      {
        label: "(47) 99968-6374 — Vendas, Alcemir",
        href: "https://api.whatsapp.com/send/?phone=5547999686374",
      },
    ],
  },
  {
    label: "Curitiba",
    address: "Rua Comendador Franco, 5378 — Uberaba, Curitiba/PR",
    phones: [
      { label: "(41) 3016-1366", href: "tel:+554130161366" },
      {
        label: "(41) 99197-9098",
        href: "https://api.whatsapp.com/send/?phone=5541991979098",
      },
    ],
  },
];

export const NAV = [
  { label: "Empresa", href: "/empresa" },
  { label: "Produtos", href: "/produtos" },
  { label: "Condomínios / Hotéis", href: "/condominios" },
  { label: "Clientes", href: "/clientes" },
  { label: "Assistência Técnica", href: "/assistencia-tecnica" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export type ProductLine = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  products: { name: string; code: string; image: string; href: string }[];
};

export const PRODUCT_LINES: ProductLine[] = [
  {
    slug: "evoque",
    name: "Evoque",
    shortName: "EVOQUE",
    tagline: "Design e durabilidade consolidados no mercado nacional",
    description:
      "A linha Evoque já está consolidada no mercado nacional pelo seu design e durabilidade. Agora traz mais novidades em tecnologia e um novo design.",
    products: [
      {
        name: "Voador Dorsal / Crucifixo",
        code: "EV 332",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Voador-Dorsal-Crucifixo-qdpjocs8bhpsno0kbwvlzi5492g9t3w4uoi7l8zxfk.png",
        href: "https://trgfitness.com.br/produtos/voador-dorsal-crucifixo-evoque/",
      },
      {
        name: "Supino Sentado",
        code: "EV 331",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Supino-Sentado-2-qdpjocs8bhpsno0kbwvlzi5492g9t3w4uoi7l8zxfk.png",
        href: "https://trgfitness.com.br/produtos/supino-sentado-evoque/",
      },
      {
        name: "Remada Frontal",
        code: "EV 329",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Remada-Frontal-EVOQUE-GII-1-qdpjoenwp5sdavxu0xov4ho1fu708i3lixt6jsx534.png",
        href: "https://trgfitness.com.br/produtos/remada-frontal-evoque/",
      },
      {
        name: "Leg Press",
        code: "EV 316",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Leg-Press-Regulavel-qdpjoenwp5sdavxu0xov4ho1fu708i3lixt6jsx534.png",
        href: "https://trgfitness.com.br/produtos/leg-press-evoque/",
      },
      {
        name: "Graviton",
        code: "EV 322",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Graviton-qdpjoflqvztnmhwgvg3hozfi182dg77bv2go12vqww.png",
        href: "https://trgfitness.com.br/produtos/graviton-evoque/",
      },
      {
        name: "Glúteos",
        code: "EV 312",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Gluteos-qdpjoflqvztnmhwgvg3hozfi182dg77bv2go12vqww.png",
        href: "https://trgfitness.com.br/produtos/gluteos-evoque/",
      },
    ],
  },
  {
    slug: "infinity",
    name: "Infinity",
    shortName: "INFINITY",
    tagline: "Design, desempenho, resistência e biomecânica",
    description:
      "A linha Infinity foi desenvolvida sobre quatro pilares que definem sua construção: design, desempenho, resistência e biomecânica, pensados para o usuário exigente.",
    products: [
      {
        name: "Supino",
        code: "10.08.000831.0",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2026-09-01-at-10.20.31-rsv4kn9so4262s3y0k32aiz001ni65yxoxo43kh7gg.jpeg",
        href: "https://trgfitness.com.br/produtos/supino-infinity/",
      },
      {
        name: "Voador",
        code: "10.08.000832.0",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Voador-rrr4r5qqorx9u35368xfxiyuaub8t8mbwzt6tmi7eo.jpeg",
        href: "https://trgfitness.com.br/produtos/voador-infinity/",
      },
      {
        name: "Leg Press",
        code: "10.08.000817.0",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/LegPress-rrr4u9lja26e7omm13a1o8qozozx97ye0dfyxjwcu8.jpeg",
        href: "https://trgfitness.com.br/produtos/leg-press-infinity/",
      },
      {
        name: "Graviton",
        code: "10.08.000822.0",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Graviton-TRG-Fitness-Equipamentos-para-Academia-rrra803zwrdz6b7qqu1tlcqwqq3frd2pza2ruon6dc.png",
        href: "https://trgfitness.com.br/produtos/graviton-infinity/",
      },
      {
        name: "Flexo Extensora",
        code: "10.08.000807.0",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Cadeira-Flexo-Extensora-TRG-Fitness-Equipamentos-para-Academia-rrradax8g4n6n5iksmj35ilhbxyy5x48diic9us9a8.png",
        href: "https://trgfitness.com.br/produtos/flexo-extensora-infinity/",
      },
      {
        name: "Adutor e Abdutor",
        code: "10.08.000804.0",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Adutor-e-Abdutor-Infinity-TRG-Fitness-rs389rkzmmr68p394etz632aj0gelllo6w516foge8.png",
        href: "https://trgfitness.com.br/produtos/adutor-abdutor-infinity/",
      },
    ],
  },
  {
    slug: "e-line",
    name: "E-Line",
    shortName: "E-LINE",
    tagline: "Linha 100% nacional para academias de todos os portes",
    description:
      "A linha E-Line reúne equipamentos de musculação de fabricação 100% nacional, pensados para o dia a dia de academias que precisam de robustez e escala.",
    products: [
      {
        name: "Abdominal E-Line G2",
        code: "10.02.000201.0",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Abdominal-E-Line-G2-10.02.000201.0-Site-qdpjoenwp5srmi2u26rl3gr1pj3y4mhfcdnnyvhlvk.png",
        href: "https://trgfitness.com.br/categoria-de-produtos/linha-e-line/",
      },
    ],
  },
  {
    slug: "premium",
    name: "Premium",
    shortName: "PREMIUM",
    tagline: "Multifuncionais para academias, condomínios, hotéis e clubes",
    description:
      "A linha Premium e a linha TRG Fitness de equipamentos Cross Over são multifuncionais, recomendados para academias, condomínios, hotéis, clubes, estúdios de personal trainer e residências.",
    products: [
      {
        name: "Fit Cross Station 4",
        code: "TRG500-X",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Fit-Cross-Station-4-Site-2-ra72a6sinyb5mc5lwethmy056mgygicj2mnjwon4sg.png",
        href: "https://trgfitness.com.br/produtos/fit-cross-station-4/",
      },
      {
        name: "Hack Agachamento (Gaiola)",
        code: "EV 376",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Hack-Agachamento-Gaiola-qdpjogjl2tuxy3v3pyi49h6ymlxqnwb27745icucqo.png",
        href: "https://trgfitness.com.br/produtos/hack-agachamento-gaiola/",
      },
      {
        name: "Fit Cross Force Premium",
        code: "TRG438",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Fit-Cross-Force-Premium-10.03.000438.1-Site-3-qdpjogjl2tuxy3v3pyi49h6ymlxqnwb27745icucqo.png",
        href: "https://trgfitness.com.br/produtos/fit-cross-force-premium/",
      },
      {
        name: "Fit Cross Cable Premium",
        code: "TRG433",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Fit-Cross-Cable-Premium-10.03.000433.1-Site-4-qdpjoflqvztnmhwgvg3hozfi182dg77bv2go12vqww.png",
        href: "https://trgfitness.com.br/produtos/fit-cross-cable-premium/",
      },
      {
        name: "Estúdio Premium One",
        code: "TRG 8040",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Estudio-Premium-One-4-qdpjoflqvztnmhwgvg3hozfi182dg77bv2go12vqww.png",
        href: "https://trgfitness.com.br/produtos/estudio-premium-one/",
      },
      {
        name: "Estúdio Premium 3C",
        code: "TRG 8042",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Multi-Estacao-Site-4-qxkux86kzo9barm5e5qs4yjl889x7nrwcs3f56bpj4.png",
        href: "https://trgfitness.com.br/produtos/estudio-premium/",
      },
    ],
  },
  {
    slug: "cardio",
    name: "Cardio",
    shortName: "CARDIO",
    tagline: "Esteiras, bikes e elípticos de alta performance",
    description:
      "Uma linha inovadora de esteiras, bikes e elípticos de alta performance e com interatividade, para tornar o exercício físico muito mais agradável e confortável.",
    products: [
      {
        name: "Esteira Evoque Jet 7",
        code: "Cardio",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/EVOQUE-JET-7-qnm8roxc9bafzzmhpya2hwbqxjcrox79iei4chdv5s.png",
        href: "https://trgfitness.com.br/produtos/esteira-evoque-jet-7-cardio/",
      },
      {
        name: "Elíptico Eletromagnético EL-X700",
        code: "Cardio",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Eliptico-Eletromagnetico-TRG-Fitness-r6x1et48k8glpwbta4ou6oot68p74slhlfi955lwcg.png",
        href: "https://trgfitness.com.br/produtos/eliptico-eletromagnetico-el-x700/",
      },
      {
        name: "Vertical Climber CVC800",
        code: "Cardio",
        image:
          "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Escalada-r79d5zz7x7ajf5h0dzslnwh5270on1zuza6hs1181s.png",
        href: "https://trgfitness.com.br/produtos/vertical-climber-cvc800/",
      },
    ],
  },
];

export const SUPPORT_CATEGORIES = [
  {
    name: "Bancos e Pesos Livres",
    slug: "bancos-e-pesos-livres",
    image:
      "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Banco-Supino-Reto-e-Inclinado-qdpjpmubmdh8s6anw7v1unlpmn276ect6gbhivo3r4.png",
    href: "https://trgfitness.com.br/categoria-de-produtos/bancos-e-pesos-livres/",
  },
  {
    name: "Articulados Premium",
    slug: "articulados-premium",
    image:
      "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Categoria-Articulados-Premium-TRG-Fitness-Blumenau-SC-qm7tecm7bdhpgn00c3zcv33ncjnpinypxe5e27fpxc.png",
    href: "https://trgfitness.com.br/categoria-de-produtos/articulados-premium/",
  },
  {
    name: "Articulados",
    slug: "articulados",
    image:
      "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Extensor-qdpjpns5t7ij3s9aqq9of5d680xke3gjikyz05mpkw.png",
    href: "https://trgfitness.com.br/categoria-de-produtos/articulados/",
  },
  {
    name: "Suportes",
    slug: "suportes",
    image:
      "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Espaldar-Aluminio-Linha-Suportes-TRG-Fitness-qdtvoux34kapz5vaxfhb7o8n4ac24uenv8eimhx4w0.png",
    href: "https://trgfitness.com.br/categoria-de-produtos/suportes/",
  },
];

export const CONDO_PLANS = [
  {
    size: "48 m²",
    equipment: [
      "Fit Cross Cable Premium",
      "Estúdio Premium 3C",
      "Torre de Halteres",
      "Suporte para Anilhas",
      "Espaldar",
      "Banco Regulável",
      "Esteira Evoque Jet 6",
    ],
  },
  {
    size: "35 m²",
    equipment: [
      "Estúdio Premium 3C",
      "Torre de Halteres",
      "Suporte para Anilhas",
      "Espaldar",
      "Banco Regulável",
      "Bicicleta Vertical VE-M700",
      "Bicicleta Horizontal HL-M700",
      "Esteira Evoque Jet 4",
    ],
  },
  {
    size: "20 m²",
    equipment: [
      "Estúdio Premium One",
      "Torre de Halteres",
      "Suporte para Anilhas",
      "Espaldar",
      "Banco Regulável",
      "Bicicleta Vertical VE-M700",
      "Esteira Evoque Jet 4",
    ],
  },
];

export const BLOG_POSTS = [
  {
    title:
      "Fitness Brasil Expo 2026: a TRG Fitness apresenta ao mercado a nova Linha Infinity",
    date: "24 de agosto de 2026",
    excerpt:
      "De 27 a 29 de agosto de 2026, o Transamerica Expo Center recebeu um dos maiores encontros do setor fitness do país — e a TRG apresentou a nova Linha Infinity ao mercado.",
    image:
      "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/PostBlog-02-1-rs3320borssf4z93qe8mdyrt0otj1q29s0v6r3e5p6.png",
    href: "https://trgfitness.com.br/fitness-brasil-expo-2026-a-trg-fitness-apresenta-ao-mercado-a-nova-linha-infinity/",
  },
  {
    title:
      "12 de agosto de 2026: a TRG Fitness realiza o pré-lançamento da Linha Infinity",
    date: "18 de agosto de 2026",
    excerpt:
      "Uma tarde para dar as boas-vindas à Linha Infinity: no dia 12 de agosto de 2026, a TRG Fitness reuniu clientes e parceiros para o pré-lançamento.",
    image:
      "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/PostBlog-01-2-rs32rla30wj0gkdvke4h93evzy62qhpdcgkg9ou8nu.png",
    href: "https://trgfitness.com.br/12-de-agosto-de-2026-a-trg-fitness-realiza-o-pre-lancamento-da-linha-infinity/",
  },
  {
    title:
      "Produção Nacional: por que o equipamento fitness fabricado no Brasil faz a diferença",
    date: "28 de junho de 2026",
    excerpt:
      "A indústria brasileira mudou, e o mercado fitness também. Quando se fala em equipamentos para academia, muita gente ainda associa a fabricação nacional a um padrão inferior — não é o caso da TRG.",
    image:
      "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/PostBlog-02-rpc6s5els7wxzv4gorohzollufqnphlvq4eklo4cbe.png",
    href: "https://trgfitness.com.br/producao-nacional-por-que-o-equipamento-fitness-fabricado-no-brasil-faz-a-diferenca/",
  },
];

export const COMPANY_PILLARS = [
  {
    label: "Fabricação Nacional",
    image:
      "https://trgfitness.com.br/wp-content/uploads/2023/07/Fabricacao-Propria.png",
  },
  {
    label: "Assistência Técnica",
    image:
      "https://trgfitness.com.br/wp-content/uploads/2023/07/Assistencia-Tecnica-TRG-Fitness.png",
  },
  {
    label: "Frota Própria",
    image:
      "https://trgfitness.com.br/wp-content/uploads/2023/07/Frota-Propria.png",
  },
];

export const COMPANY_ABOUT = {
  years: 28,
  headline:
    "A TRG Fitness é uma empresa brasileira que está há 28 anos no mercado de equipamentos de musculação e cardiovasculares.",
  paragraphs: [
    "Nos destacamos pela produção 100% nacional. Possuímos parque fabril próprio e moderno, habilitado com sistemas de gestão e controle que otimizam nossa produção, e frota própria de veículos para entregar ao cliente sempre a melhor qualidade e agilidade no serviço.",
    "Nosso time comercial e técnico é altamente qualificado e aliado a um diverso portfólio de produtos, prontos para atender nossos exigentes clientes e parceiros a qualquer momento.",
    "Estamos preparados para atender a todas as necessidades do mercado: academias, residências, clubes, hotéis ou condomínios de qualquer porte.",
  ],
  heroImage:
    "https://trgfitness.com.br/wp-content/uploads/elementor/thumbs/Sede-TRG-Fitness-qdpjpfbu9j1ad4c2i94bq4wptvbwto7p0wckzk35um.jpg",
};
