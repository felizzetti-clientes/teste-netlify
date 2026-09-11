# TRG Fitness — Redesign Institucional

Redesign do site institucional da TRG Fitness (trgfitness.com.br), com nova
direção visual (grafite/industrial, tipografia forte, composição editorial)
sobre o conteúdo real da empresa: linhas de produtos, unidades, condomínios,
blog e assistência técnica.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

Outros comandos:

```bash
npm run build   # build de produção — gera o site estático em /out
npm run start   # serve o conteúdo de /out localmente (via `serve`, sem servidor Next)
npm run lint    # ESLint
```

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- Framer Motion (Hero com morph de scroll natural + flip cards 3D)
- Fontes IBM Plex Sans / IBM Plex Sans Condensed via `@fontsource`
  (self-hosted via npm — não depende da CDN do Google em build/runtime)

## Estrutura

- `app/` — páginas (App Router): Home, Empresa, Produtos (+ linhas dinâmicas),
  Condomínios, Clientes, Assistência Técnica, Catálogo, Blog, Contato, Orçamento
- `components/home/` — seções da Home, incluindo a Hero (`Hero.tsx` + `HeroFlipCard.tsx`)
- `components/layout/` — Header e Footer
- `components/contact/` — formulário de orçamento/contato (gera link de WhatsApp pré-preenchido, sem backend)
- `lib/content.ts` — todo o conteúdo real extraído do site atual (linhas, unidades, condomínios, blog)
- `lib/hero-images.ts` — seleção de imagens reais usadas na Hero

## Imagens

Todas as imagens do projeto hoje são **URLs públicas reais do site atual**
(`trgfitness.com.br/wp-content/...`), usadas como referência durante o
desenvolvimento — nenhum placeholder genérico ou banco de imagens.

Antes de publicar em produção, baixe essas imagens e sirva localmente
(`/public/images/...`), trocando as URLs em `lib/content.ts` e
`lib/hero-images.ts`. Isso evita depender do domínio antigo no ar. Como o
projeto usa `output: "export"`, as imagens continuam servidas como `<img>`
estático (a API de otimização do `next/image` não roda em export estático);
se quiser formatos modernos (WebP/AVIF), converta os arquivos manualmente
antes de colocá-los em `/public`.

## Loja Virtual

A Loja Virtual **não foi recriada** — o header e footer linkam diretamente
para https://loja.trgfitness.com.br/ (site separado, mantido como está).

## Arquitetura de deploy (Netlify)

O projeto usa **export estático do Next.js** (`output: "export"` em
`next.config.ts`) — não há rotas de API, Server Actions ou ISR, então o
`next build` gera um site 100% estático na pasta `/out` (HTML, CSS, JS e
os arquivos de `public/`).

- `netlify.toml`: `command = "npm run build"`, `publish = "out"`
- A Netlify serve `/out` como arquivos estáticos puros
- **Nenhuma dependência de `@netlify/plugin-nextjs`** nem de qualquer
  runtime serverless/edge da Netlify — não há Netlify Functions envolvidas
- `app/robots.ts` e `app/sitemap.ts` usam `export const dynamic =
  "force-static"`, exigido pelo export estático, e geram `robots.txt` e
  `sitemap.xml` como arquivos estáticos dentro de `/out`

## Segurança

- `.gitignore` ignora todos os arquivos `.env*`, com exceção explícita de
  `.env.example` (`!.env.example`), que é o único versionado
- `.env.example` não contém valores reais — nenhuma variável de ambiente é
  necessária hoje
- Nenhum segredo, chave ou credencial está no código-fonte
