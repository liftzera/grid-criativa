/**
 * Grid Criativa — Landing Page institucional (React + Tailwind CSS + lucide-react)
 * ---------------------------------------------------------------------------------
 * Lovable:
 *   1. Salve em `src/components/GridCriativaLanding.jsx` (renomeie para .tsx se usar TS).
 *   2. import GridCriativaLanding from "@/components/GridCriativaLanding";
 *   3. Renderize <GridCriativaLanding /> em src/pages/Index.
 *
 * Dependências: react, lucide-react, tailwindcss. Nenhum plugin extra.
 * As imagens são as fotos reais enviadas (constante IMG).
 * Textos institucionais e claims são editáveis — revise antes de publicar.
 * ---------------------------------------------------------------------------------
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Frame,
  LayoutGrid,
  Lightbulb,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Navigation,
  Palette,
  Phone,
  Plus,
  Ruler,
  ShieldCheck,
  Signpost,
  Sparkles,
  Store,
  Wrench,
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Empresa                                                            */
/* ------------------------------------------------------------------ */

const COMPANY = {
  name: "Grid Criativa",
  phoneDisplay: "(48) 99167-6918",
  phoneHref: "tel:+5548991676918",
  whatsapp: "5548991676918",
  address:
    "R. Antônio José de Souza, 721 — Sertão do Maruim, São José — SC, 88122-013",
  reference: "Próximo ao CTG Os Praianos.",
};

const MAP_QUERY = encodeURIComponent(
  "R. Antônio José de Souza, 721 - Sertão do Maruim, São José - SC, 88122-013",
);
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&z=16&hl=pt-BR&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

const HOURS = [
  { days: "Segunda a quinta-feira", time: "08:00 — 18:00" },
  { days: "Sexta-feira", time: "08:00 — 17:00" },
  { days: "Sábado e domingo", time: "Fechado" },
];

const wa = (message) =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;

const WA_DEFAULT = wa(
  "Olá, Grid Criativa! Vim pelo site e quero um orçamento de comunicação visual.",
);

/* ------------------------------------------------------------------ */
/*  Imagens reais                                                      */
/* ------------------------------------------------------------------ */

const IMG = {
  missonit:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3LENbztfbRyLQnHlgGovrhzXP9u/fa2722dd-38d6-470c-b3f3-e6b266b83a8a.png",
  vlink:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3LENbztfbRyLQnHlgGovrhzXP9u/8799ba6f-e91e-4e2f-b940-e2b62961d719.png",
  ampliza:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3LENbztfbRyLQnHlgGovrhzXP9u/fe167387-ce6c-4506-8ce2-bb56e27acd24.png",
  sicoob:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3LENbztfbRyLQnHlgGovrhzXP9u/0dc14d19-9c44-4cba-9011-e2d22a25ba4b.png",
  cdl:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3LENbztfbRyLQnHlgGovrhzXP9u/493f7cab-d867-4403-b4e1-6ed90040d67f.png",
  barbearia:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3LENbztfbRyLQnHlgGovrhzXP9u/ac4ee297-ae8f-4d10-af2b-e62680699791.png",
  love:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3LENbztfbRyLQnHlgGovrhzXP9u/5be294f4-4fd5-4f9a-89b2-32e137ce66ab.png",
  gcPlaca:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3LENbztfbRyLQnHlgGovrhzXP9u/4df16dc4-bae8-4439-a8f9-ca0ed88dff6b.png",
  acessibilidade:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3LENbztfbRyLQnHlgGovrhzXP9u/0083cfc7-8c78-48fb-ade8-8f90507b0348.png",
  horario:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3LENbztfbRyLQnHlgGovrhzXP9u/10dade77-f155-4690-bfaa-f45ff562eb1d.png",
};

/* ------------------------------------------------------------------ */
/*  Conteúdo                                                           */
/* ------------------------------------------------------------------ */

const NAV = [
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

const SERVICES = [
  {
    tag: "Luminosos",
    icon: Lightbulb,
    title: "Letra caixa & luminosos LED",
    text: "Letras tridimensionais com iluminação interna para a marca aparecer de dia e de noite.",
    bullets: [
      "Acrílico, PVC, metal e perfis slim",
      "LED de baixo consumo e luz uniforme",
      "Conferência de cor antes da entrega",
    ],
    image: IMG.vlink,
    alt: "Letreiro luminoso da Vlink com letras brancas e detalhe vermelho iluminado",
  },
  {
    tag: "Fachadas",
    icon: Frame,
    title: "Fachadas comerciais",
    text: "A primeira impressão do seu negócio: fachada alinhada à marca, com acabamento impecável.",
    bullets: [
      "ACM, acrílico, vidro e painéis compostos",
      "Medição no local e projeto técnico",
      "Fixação segura e manutenção simples",
    ],
    image: IMG.missonit,
    alt: "Fachada da loja Missonit com letra caixa branca e vitrine iluminada",
  },
  {
    tag: "Sinalização",
    icon: LayoutGrid,
    title: "Sinalização & acessibilidade",
    text: "Informação clara dentro do seu espaço, com placas que orientam e reforçam a marca.",
    bullets: [
      "Pictogramas conforme a NBR 9050",
      "Acrílico, PVC e adesivo de alta durabilidade",
      "Salas, setores e wayfinding",
    ],
    image: IMG.acessibilidade,
    alt: "Placa preta com pictogramas de acessibilidade, banheiros e seta de orientação",
  },
  {
    tag: "Vitrines",
    icon: Store,
    title: "Adesivação de vitrines",
    text: "Comunicação aplicada no vidro: horários, serviços, campanhas e identidade visual.",
    bullets: [
      "Vinil recortado, impressão digital e jateado",
      "Aplicação sem bolhas e acabamento limpo",
      "Lojas, clínicas, escritórios e restaurantes",
    ],
    image: IMG.horario,
    alt: "Adesivo branco com horário de funcionamento aplicado em porta de vidro",
  },
  {
    tag: "Totens",
    icon: Signpost,
    title: "Totens & painéis",
    text: "Estruturas verticais e painéis de grande formato para identificação e campanhas.",
    bullets: [
      "Totens de identificação e wayfinding",
      "Painéis curvos, retos e para eventos",
      "Estrutura metálica com pintura de acabamento",
    ],
    image: IMG.sicoob,
    alt: "Totem vertical azul da Sicoob instalado em área externa",
  },
  {
    tag: "Ambientação",
    icon: Sparkles,
    title: "Placas em acrílico & ambientação",
    text: "Do detalhe da recepção à parede de letras: peças que dão personalidade ao ambiente.",
    bullets: [
      "Placas com standoffs e corte a laser",
      "Letras decorativas e cenografia",
      "Identidade visual aplicada ao espaço",
    ],
    image: IMG.gcPlaca,
    alt: "Placa em acrílico com logotipo laranja sobre grade de linhas azuis fixada na parede",
  },
];

const PORTFOLIO = [
  {
    title: "Missonit",
    category: "Fachadas",
    desc: "Fachada em ACM com letra caixa iluminada e vitrine em vidro.",
    image: IMG.missonit,
    alt: "Fachada da loja Missonit com letra caixa branca sobre fundo escuro",
  },
  {
    title: "Vlink",
    category: "Luminosos",
    desc: "Letra caixa 3D com iluminação interna em LED.",
    image: IMG.vlink,
    alt: "Letreiro luminoso da Vlink com letras brancas e detalhe vermelho",
  },
  {
    title: "Ampliza Arquitetura",
    category: "Fachadas",
    desc: "Placa de fachada clássica com lettering aplicado.",
    image: IMG.ampliza,
    alt: "Placa branca da Ampliza Arquitetura com letras azuis e detalhe vermelho",
  },
  {
    title: "Sicoob",
    category: "Totens",
    desc: "Totem vertical de identificação em estrutura metálica.",
    image: IMG.sicoob,
    alt: "Totem azul da Sicoob com letras verticais brancas",
  },
  {
    title: "CDL — Baile Tradicional",
    category: "Painéis",
    desc: "Painel curvo iluminado para campanha e evento.",
    image: IMG.cdl,
    alt: "Painel azul curvo da CDL anunciando baile tradicional com banda",
  },
  {
    title: "Barbearia Central",
    category: "Fachadas",
    desc: "Placa oval personalizada com acabamento em ACM.",
    image: IMG.barbearia,
    alt: "Placa oval da Barbearia Central Café e Bar com tesoura e xícara",
  },
  {
    title: "Letras LOVE",
    category: "Ambientação",
    desc: "Letras decorativas para ambientação de interiores.",
    image: IMG.love,
    alt: "Letras brancas formando a palavra LOVE sobre prateleira de madeira",
  },
  {
    title: "Grid Criativa · recepção",
    category: "Sinalização",
    desc: "Placa em acrílico com standoffs e recorte a laser.",
    image: IMG.gcPlaca,
    alt: "Placa de acrílico com logotipo GC da Grid Criativa ao lado de um interfone",
  },
  {
    title: "Acessibilidade",
    category: "Sinalização",
    desc: "Sinalização de acessibilidade e orientação interna.",
    image: IMG.acessibilidade,
    alt: "Placa preta com ícones de acessibilidade e seta indicativa",
  },
  {
    title: "Open · Close",
    category: "Vitrines",
    desc: "Comunicação de horário em vinil aplicado no vidro.",
    image: IMG.horario,
    alt: "Texto Open-Close com horário aplicado em vidro de porta",
  },
];

const CATEGORIES = ["Todos", ...Array.from(new Set(PORTFOLIO.map((p) => p.category)))];

const PROCESS = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Briefing",
    text: "Você conta o objetivo e envia fotos e medidas. Alinhamos escopo, prazo e investimento.",
  },
  {
    icon: Ruler,
    step: "02",
    title: "Projeto",
    text: "Desenhamos a peça e definimos materiais, cores e iluminação. Você aprova antes.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Produção",
    text: "Corte, impressão, pintura e montagem, com conferência de qualidade peça por peça.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Instalação",
    text: "Fixação correta, acabamento limpo e local organizado. Sua marca pronta para receber.",
  },
];

const DIFFERENTIALS = [
  { icon: Palette, title: "Projeto sob medida", text: "Cada peça nasce da identidade e do ponto de venda do cliente." },
  { icon: ShieldCheck, title: "Materiais duráveis", text: "Escolha técnica de substrato, tinta e fixação para sol e chuva." },
  { icon: Ruler, title: "Medição no local", text: "Conferência de medidas e estrutura antes de produzir." },
  { icon: Wrench, title: "Instalação cuidada", text: "Equipe orientada e acabamento revisado na entrega." },
];

const FAQ = [
  {
    q: "Como peço um orçamento?",
    a: "Envie uma mensagem no WhatsApp com fotos do local, medidas aproximadas e o que você precisa. Em horário comercial respondemos com os próximos passos — e, quando necessário, agendamos visita técnica.",
  },
  {
    q: "Vocês atendem fora de São José?",
    a: "Atendemos São José e a Grande Florianópolis. Mande o endereço do projeto pelo WhatsApp para confirmarmos deslocamento e agenda.",
  },
  {
    q: "Qual é o prazo de produção?",
    a: "Depende do tipo de peça, do material e da agenda. O prazo é informado no orçamento, antes de qualquer aprovação, e acompanha cada etapa do projeto.",
  },
  {
    q: "A instalação está incluída?",
    a: "A instalação é combinada junto ao orçamento, conforme o local e o tipo de fixação. Você recebe tudo detalhado antes de fechar.",
  },
];

/* ------------------------------------------------------------------ */
/*  Utilitários                                                        */
/* ------------------------------------------------------------------ */

const cn = (...classes) => classes.filter(Boolean).join(" ");

function Reveal({ children, className, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children, tone = "dark" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em]",
        tone === "dark" ? "text-[#FF7A33]" : "text-[#C2410C]",
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#FF5C00]" aria-hidden="true" />
      {children}
    </span>
  );
}

function useOpenStatus() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const compute = () => {
      try {
        const parts = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Sao_Paulo",
          weekday: "short",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).formatToParts(new Date());
        const get = (type) => parts.find((p) => p.type === type)?.value ?? "";
        const minutes = (Number(get("hour")) % 24) * 60 + Number(get("minute"));
        const ranges = {
          Mon: [480, 1080],
          Tue: [480, 1080],
          Wed: [480, 1080],
          Thu: [480, 1080],
          Fri: [480, 1020],
        };
        const range = ranges[get("weekday")];
        if (!range) return setStatus({ open: false, label: "Fechado hoje" });
        const open = minutes >= range[0] && minutes < range[1];
        setStatus({ open, label: open ? "Aberto agora" : "Fechado agora" });
      } catch {
        setStatus({ open: false, label: "Horário de atendimento" });
      }
    };
    compute();
    const timer = setInterval(compute, 60000);
    return () => clearInterval(timer);
  }, []);

  return status;
}

/* ------------------------------------------------------------------ */
/*  Logo                                                               */
/* ------------------------------------------------------------------ */

function Logo({ onClick }) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className="group flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F]"
      aria-label="Grid Criativa — início"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#FF5C00] text-white shadow-[0_8px_24px_-8px_rgba(255,92,0,0.85)] transition group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="7.2" height="7.2" rx="1.6" stroke="currentColor" strokeWidth="1.7" />
          <rect x="13.8" y="3" width="7.2" height="7.2" rx="1.6" stroke="currentColor" strokeWidth="1.7" />
          <rect x="3" y="13.8" width="7.2" height="7.2" rx="1.6" stroke="currentColor" strokeWidth="1.7" />
          <rect x="13.8" y="13.8" width="7.2" height="7.2" rx="1.6" fill="currentColor" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="gc-display block text-[15px] font-extrabold tracking-tight text-white sm:text-base">
          GRID <span className="text-[#FF5C00]">CRIATIVA</span>
        </span>
        <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.3em] text-white/60">
          Comunicação Visual
        </span>
      </span>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Header                                                             */
/* ------------------------------------------------------------------ */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const status = useOpenStatus();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-[#0B0B0F]/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
          <Logo onClick={closeMenu} />

          <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {status && (
              <span className="hidden items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[11px] font-medium text-white/60 xl:inline-flex">
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    status.open ? "bg-emerald-400" : "bg-white/35",
                  )}
                  aria-hidden="true"
                />
                {status.label}
              </span>
            )}

            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[#FF5C00] px-5 py-2.5 text-sm font-semibold text-[#180900] transition hover:bg-[#FF7A33] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F] sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-white transition hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C00] lg:hidden"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={cn("fixed inset-0 z-50 lg:hidden", menuOpen ? "" : "pointer-events-none")}
        aria-hidden={!menuOpen}
      >
        <div
          onClick={closeMenu}
          className={cn(
            "absolute inset-0 bg-[#0B0B0F]/90 backdrop-blur-md transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-x-0 top-0 border-b border-white/10 bg-[#0B0B0F] px-5 pb-8 pt-5 transition-all duration-300",
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          )}
        >
          <div className="flex items-center justify-between">
            <Logo onClick={closeMenu} />
            <button
              type="button"
              onClick={closeMenu}
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-white transition hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C00]"
              aria-label="Fechar menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Navegação mobile" className="mt-8 flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="gc-display flex items-center justify-between border-b border-white/10 py-4 text-xl font-semibold text-white/90 transition hover:text-[#FF7A33]"
              >
                {item.label}
                <ArrowUpRight className="h-5 w-5 text-white/30" aria-hidden="true" />
              </a>
            ))}
          </nav>

          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF5C00] px-5 py-4 text-base font-semibold text-[#180900]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Pedir orçamento no WhatsApp
          </a>

          <div className="mt-6 space-y-3 text-sm text-white/55">
            <a href={COMPANY.phoneHref} className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#FF7A33]" aria-hidden="true" />
              {COMPANY.phoneDisplay}
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FF7A33]" aria-hidden="true" />
              {COMPANY.address}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0B0B0F]">
      <div className="pointer-events-none absolute inset-0 gc-grid opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-[#FF5C00]/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/3 h-[26rem] w-[26rem] rounded-full bg-[#1D4ED8]/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-5 pb-20 pt-28 sm:px-8 sm:pt-32 md:pt-36 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-28">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-[#FF7A33]" aria-hidden="true" />
              Comunicação visual em São José · SC
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="gc-display mt-6 text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4.1rem]">
              Sua marca vista de longe.
              <span className="mt-2 block text-[#FF5C00]">Lembrada depois.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              Fachadas, luminosos e sinalização de alto impacto para empresas que não podem
              passar despercebidas. A Grid Criativa projeta, produz e instala — do primeiro
              esboço à placa na parede.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={wa(
                  "Olá, Grid Criativa! Quero um orçamento para comunicação visual. Meu projeto é:",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#FF5C00] px-7 py-4 text-sm font-semibold text-[#180900] shadow-[0_18px_40px_-18px_rgba(255,92,0,0.9)] transition hover:-translate-y-0.5 hover:bg-[#FF7A33] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F]"
              >
                <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
                Pedir orçamento no WhatsApp
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white/85 transition hover:border-white/35 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C00]"
              >
                Ver projetos
              </a>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 grid max-w-lg grid-cols-1 gap-3 text-sm text-white/60 sm:grid-cols-3 sm:gap-4">
              {["Atendimento consultivo", "Do projeto à instalação", "Acabamento premium"].map(
                (item) => (
                  <span key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FF7A33]" aria-hidden="true" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={180} className="relative mx-auto max-w-md lg:max-w-none">
            <div
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-[#FF5C00]/12 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src={IMG.missonit}
                alt="Fachada comercial com letra caixa iluminada e vitrine de vidro"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/10 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-black/45 px-4 py-3 backdrop-blur">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">Projeto</p>
                  <p className="gc-display text-sm font-semibold text-white">Fachada + letra caixa</p>
                </div>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-3 w-36 overflow-hidden rounded-xl border border-white/15 shadow-2xl sm:w-44 lg:-left-8">
              <img
                src={IMG.vlink}
                alt="Letreiro luminoso de LED instalado em ambiente interno"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -right-2 top-6 hidden items-center gap-2 rounded-full border border-white/15 bg-[#0B0B0F]/80 px-3 py-2 text-[11px] font-medium text-white/75 backdrop-blur sm:flex">
              <MapPin className="h-3.5 w-3.5 text-[#FF7A33]" aria-hidden="true" />
              São José · Grande Florianópolis
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-6 border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 divide-y divide-white/10 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
          {[
            { label: "Atendimento", value: "Seg a sex · 08h às 18h", icon: Clock },
            { label: "Base operacional", value: "Sertão do Maruim, São José", icon: MapPin },
            { label: "Orçamento", value: "Sem custo, pelo WhatsApp", icon: MessageCircle },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 py-5 sm:px-6 sm:first:pl-0">
              <item.icon className="h-[18px] w-[18px] shrink-0 text-[#FF7A33]" aria-hidden="true" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">{item.label}</p>
                <p className="mt-0.5 text-sm font-medium text-white/80">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Faixa de projetos                                                  */
/* ------------------------------------------------------------------ */

function BrandMarquee() {
  const names = ["MISSONIT", "VLINK", "AMPLIZA", "SICOOB", "CDL", "BARBEARIA CENTRAL"];
  const row = [...names, ...names];

  return (
    <section
      aria-label="Marcas com projetos realizados"
      className="overflow-hidden border-b border-white/10 bg-[#0B0B0F] py-6"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center gap-6 px-5 sm:px-8">
        <span className="hidden shrink-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60 sm:block">
          Projetos realizados
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="gc-marquee flex w-max items-center gap-10 pr-10">
            {row.map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="gc-display whitespace-nowrap text-sm font-semibold tracking-[0.18em] text-white/60"
              >
                {name}
              </span>
            ))}
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#0B0B0F] to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#0B0B0F] to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Serviços                                                           */
/* ------------------------------------------------------------------ */

function Services() {
  return (
    <section id="servicos" className="relative scroll-mt-24 bg-[#0B0B0F] py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>O que fazemos</Eyebrow>
            <h2 className="gc-display mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Comunicação visual completa,
              <span className="text-white/45"> do desenho à instalação.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
              Cada peça é pensada para o seu ponto de venda: leitura à distância, materiais
              duráveis e acabamento que valoriza a marca.
            </p>
          </div>

          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/85 transition hover:border-[#FF5C00]/60 hover:text-white"
          >
            Solicitar orçamento
            <ArrowUpRight
              className="h-4 w-4 text-[#FF7A33] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(index % 3) * 90}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#FF5C00]/35 hover:bg-white/[0.05] hover:shadow-[0_30px_60px_-40px_rgba(255,92,0,0.6)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/20 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
                      {service.tag}
                    </span>
                    <span className="absolute bottom-4 left-4 grid h-10 w-10 place-items-center rounded-xl bg-[#FF5C00] text-white shadow-lg shadow-black/40">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="gc-display text-lg font-bold tracking-tight text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{service.text}</p>

                    <ul className="mt-5 space-y-2.5">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-[13px] text-white/65">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FF7A33]" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={wa(
                        `Olá, Grid Criativa! Quero um orçamento de ${service.title.toLowerCase()}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-1.5 border-t border-white/10 pt-4 text-[13px] font-semibold text-[#FF7A33] transition hover:text-[#FFA26B]"
                    >
                      Falar sobre este serviço
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Portfólio                                                          */
/* ------------------------------------------------------------------ */

function Portfolio() {
  const [filter, setFilter] = useState("Todos");
  const [lightbox, setLightbox] = useState(null);

  const items = useMemo(
    () => (filter === "Todos" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter)),
    [filter],
  );

  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    setLightbox(null);
  }, [filter]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") setLightbox((i) => (i + 1) % items.length);
      if (event.key === "ArrowLeft") setLightbox((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [lightbox, items.length, close]);

  const current = lightbox !== null ? items[lightbox] : null;

  return (
    <section id="portfolio" className="relative scroll-mt-24 overflow-hidden bg-[#0B0B0F] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 gc-grid opacity-30" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Portfólio</Eyebrow>
          <h2 className="gc-display mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Projetos que já estão
            <span className="text-white/45"> na rua.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
            Fachadas, letras caixa, totens e sinalização produzidos para marcas de diferentes
            segmentos. Toque em um projeto para ampliar.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar portfólio">
          {CATEGORIES.map((category) => {
            const active = filter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={active}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C00]",
                  active
                    ? "border-[#FF5C00] bg-[#FF5C00] text-[#180900]"
                    : "border-white/10 text-white/60 hover:border-white/30 hover:text-white",
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={`${item.title}-${index}`} delay={(index % 3) * 70}>
              <button
                type="button"
                onClick={() => setLightbox(index)}
                aria-label={`Ampliar projeto ${item.title}`}
                className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/10 to-transparent opacity-90 transition group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur">
                    {item.category}
                  </span>
                  <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                  <div>
                    <h3 className="gc-display text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-1 line-clamp-1 text-xs text-white/55">{item.desc}</p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center">
          <p className="max-w-lg text-sm text-white/60">
            Quer ver um projeto parecido com o seu? Peça referências e orçamento no WhatsApp.
          </p>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF5C00] px-5 py-3 text-sm font-semibold text-[#180900] transition hover:bg-[#FF7A33]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Falar com a Grid
          </a>
        </div>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Projeto ${current.title}`}
          className="fixed inset-0 z-[60] flex flex-col bg-[#050507]/95 p-4 backdrop-blur sm:p-6"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
              {(lightbox ?? 0) + 1} / {items.length}
            </span>
            <button
              type="button"
              onClick={close}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C00]"
              aria-label="Fechar projeto"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center py-4">
            <button
              type="button"
              onClick={() => setLightbox((i) => (i - 1 + items.length) % items.length)}
              className="absolute left-0 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/40 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C00] sm:left-2"
              aria-label="Projeto anterior"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <img
              src={current.image}
              alt={current.alt}
              className="max-h-[62vh] w-auto max-w-[82vw] rounded-xl object-contain shadow-2xl sm:max-h-[68vh]"
            />

            <button
              type="button"
              onClick={() => setLightbox((i) => (i + 1) % items.length)}
              className="absolute right-0 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/40 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C00] sm:right-2"
              aria-label="Próximo projeto"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mx-auto w-full max-w-2xl pb-2 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FF7A33]">
              {current.category}
            </p>
            <h3 className="gc-display mt-2 text-xl font-bold text-white sm:text-2xl">
              {current.title}
            </h3>
            <p className="mt-1 text-sm text-white/60">{current.desc}</p>
            <a
              href={wa(
                `Olá, Grid Criativa! Gostei do projeto ${current.title} no site e quero algo parecido.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#FF5C00] px-5 py-3 text-sm font-semibold text-[#180900] transition hover:bg-[#FF7A33]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Quero algo assim
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Sobre                                                              */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-[#F7F4EF] py-20 text-[#0B0B0F] md:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-28 w-28 gc-grid-light rounded-2xl sm:block" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <img
                src={IMG.gcPlaca}
                alt="Placa em acrílico com identidade Grid Criativa instalada na recepção"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div className="mt-3 grid grid-cols-5 gap-3">
              <div className="col-span-3 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                <img
                  src={IMG.love}
                  alt="Letras decorativas LOVE em ambiente de interiores"
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="col-span-2 flex flex-col justify-between rounded-2xl bg-[#0B0B0F] p-4 sm:p-5">
                <LayoutGrid className="h-5 w-5 text-[#FF7A33]" aria-hidden="true" />
                <div>
                  <p className="gc-display text-base font-bold leading-tight text-white sm:text-lg">
                    Projeto, produção e instalação
                  </p>
                  <p className="mt-2 text-[11px] leading-relaxed text-white/50">
                    Um único contato do briefing à entrega.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Eyebrow tone="light">Sobre a Grid</Eyebrow>
          <h2 className="gc-display mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.9rem]">
            Não é só uma placa.
            <span className="block text-[#0B0B0F]/50">É a sua marca no mundo.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#0B0B0F]/65">
            A Grid Criativa é uma agência de comunicação visual de São José, em Santa Catarina.
            Nasceu da ideia de que a comunicação de uma empresa precisa ser clara, consistente e
            bem executada — do letreiro na fachada ao adesivo no vidro da porta.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#0B0B0F]/65">
            Unimos criação, produção e instalação para que você tenha um único ponto de contato e
            um resultado coerente em todos os lugares onde a marca aparece.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {DIFFERENTIALS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#FF5C00]/25 bg-[#FF5C00]/10 text-[#C2410C]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0B0B0F]">{item.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#0B0B0F]/65">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#0B0B0F] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1A1A22] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F4EF]"
          >
            Conversar sobre meu projeto
            <ArrowUpRight className="h-4 w-4 text-[#FF7A33] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Processo                                                           */
/* ------------------------------------------------------------------ */

function Process() {
  return (
    <section className="border-t border-black/5 bg-[#F7F4EF] py-20 text-[#0B0B0F] md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow tone="light">Como funciona</Eyebrow>
          <h2 className="gc-display mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Um processo claro, sem surpresa no final.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#0B0B0F]/60">
            Quatro etapas objetivas para você saber exatamente o que acontece em cada momento.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.step} delay={index * 80}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#FF5C00]/40 hover:shadow-[0_24px_50px_-35px_rgba(11,11,15,0.5)]">
                  <span className="gc-display absolute right-5 top-4 text-4xl font-extrabold text-[#0B0B0F]/[0.06]">
                    {step.step}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#FF5C00]/10 text-[#C2410C]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="gc-display mt-5 text-base font-bold">{step.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#0B0B0F]/65">{step.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Localização & horários                                             */
/* ------------------------------------------------------------------ */

function Location() {
  const status = useOpenStatus();

  return (
    <section id="contato" className="scroll-mt-24 bg-[#F7F4EF] pb-20 text-[#0B0B0F] md:pb-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 rounded-3xl border border-black/10 bg-white p-5 shadow-[0_30px_80px_-60px_rgba(11,11,15,0.45)] sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
          <div>
            <Eyebrow tone="light">Onde estamos</Eyebrow>
            <h2 className="gc-display mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Venha conhecer a Grid.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#0B0B0F]/60">
              Atendimento no Sertão do Maruim, em São José — pertinho do CTG Os Praianos. Se
              preferir, resolvemos tudo pelo WhatsApp.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-3 rounded-2xl border border-black/10 p-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#C2410C]" aria-hidden="true" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0B0B0F]/60">
                    Endereço
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#0B0B0F]/75">{COMPANY.address}</p>
                  <p className="mt-1 text-xs text-[#0B0B0F]/60">{COMPANY.reference}</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      href={MAP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C2410C] hover:text-[#FF5C00]"
                    >
                      Ver no Google Maps
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                    <a
                      href={MAP_DIRECTIONS}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B0B0F]/60 hover:text-[#0B0B0F]"
                    >
                      <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                      Como chegar
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-black/10 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#C2410C]" aria-hidden="true" />
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0B0B0F]/60">
                        Horário de atendimento
                      </p>
                      <dl className="mt-2 space-y-1.5 text-sm">
                        {HOURS.map((row) => (
                          <div key={row.days} className="flex items-baseline justify-between gap-4">
                            <dt className="text-[#0B0B0F]/65">{row.days}</dt>
                            <dd
                              className={cn(
                                "font-medium",
                                row.time === "Fechado" ? "text-[#0B0B0F]/60" : "text-[#0B0B0F]",
                              )}
                            >
                              {row.time}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                  {status && (
                    <span
                      className={cn(
                        "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide",
                        status.open
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-[#0B0B0F]/5 text-[#0B0B0F]/60",
                      )}
                    >
                      {status.label}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#FF5C00] px-4 py-3.5 text-sm font-semibold text-[#180900] transition hover:bg-[#FF7A33]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-xl border border-black/10 px-4 py-3.5 text-sm font-semibold text-[#0B0B0F]/80 transition hover:border-black/25"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {COMPANY.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-[#EDEAE3]">
            <div className="flex items-center justify-between gap-3 border-b border-black/10 bg-white px-4 py-3">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0B0B0F]/60">
                  Grid Criativa
                </p>
                <p className="truncate text-xs text-[#0B0B0F]/70">
                  Sertão do Maruim · São José — SC
                </p>
              </div>
              <a
                href={MAP_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#0B0B0F] px-3 py-2 text-[11px] font-semibold text-white transition hover:bg-[#1A1A22]"
              >
                <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                Traçar rota
              </a>
            </div>
            <iframe
              title="Mapa da Grid Criativa — R. Antônio José de Souza, 721, São José/SC"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full flex-1 border-0 sm:h-[420px] lg:h-auto lg:min-h-[430px]"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#0B0B0F] py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 className="gc-display mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Antes de pedir seu orçamento.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
            Não achou sua dúvida? Chame no WhatsApp — respondemos em horário comercial.
          </p>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FF7A33] hover:text-[#FFA26B]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Tirar dúvida no WhatsApp
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {FAQ.map((item, index) => {
              const expanded = open === index;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(expanded ? -1 : index)}
                    aria-expanded={expanded}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C00]"
                  >
                    <span className="gc-display text-base font-semibold text-white/90">{item.q}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/15 text-white/70">
                      {expanded ? (
                        <Minus className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      expanded ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <p className="overflow-hidden text-sm leading-relaxed text-white/60">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA final                                                          */
/* ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0F] pb-20 md:pb-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#FF5C00] px-6 py-12 sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute inset-0 gc-grid opacity-30" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/20 blur-[90px]"
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1A0B00]/80">
                Vamos começar
              </p>
              <h2 className="gc-display mt-3 text-3xl font-extrabold leading-[1.05] tracking-tight text-[#1A0B00] sm:text-4xl lg:text-[2.9rem]">
                Sua marca não pode passar despercebida.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#1A0B00]/85 sm:text-base">
                Mande uma foto do local e conte o que você precisa. A Grid devolve uma proposta
                clara, com material, prazo e investimento.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:max-w-xs">
              <a
                href={wa(
                  "Olá, Grid Criativa! Quero tirar meu projeto de comunicação visual do papel.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B0B0F] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#16161D]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Pedir orçamento agora
              </a>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1A0B00]/30 px-6 py-4 text-sm font-semibold text-[#1A0B00] transition hover:bg-[#1A0B00]/5"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {COMPANY.phoneDisplay}
              </a>
              <p className="text-center text-[11px] text-[#1A0B00]/80">
                Seg a sex · 08h às 18h · São José/SC
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="bg-[#07070A] pt-16">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Comunicação visual com projeto, produção e instalação. Sua marca vista de longe,
              lembrada depois.
            </p>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FF5C00] px-5 py-3 text-sm font-semibold text-[#180900] transition hover:bg-[#FF7A33]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#top" className="transition hover:text-white">
                  Início
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
              Serviços
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <a href="#servicos" className="transition hover:text-white">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
              Contato
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-white/60">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FF7A33]" aria-hidden="true" />
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed transition hover:text-white"
                >
                  {COMPANY.address}
                  <span className="mt-1 block text-xs text-white/55">{COMPANY.reference}</span>
                </a>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#FF7A33]" aria-hidden="true" />
                <a href={COMPANY.phoneHref} className="transition hover:text-white">
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#FF7A33]" aria-hidden="true" />
                <div className="space-y-1 leading-relaxed">
                  <p>Segunda a quinta: 08:00 — 18:00</p>
                  <p>Sexta-feira: 08:00 — 17:00</p>
                  <p className="text-white/55">Sábados e domingos: fechado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Grid Criativa · Comunicação Visual · São José — SC
          </p>
          <p className="flex items-center gap-4">
            <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white/70">
              Como chegar
            </a>
            <a href="#top" className="hover:text-white/70">
              Voltar ao topo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  CTAs flutuantes                                                    */
/* ------------------------------------------------------------------ */

function FloatingActions() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-end px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6">
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        <a
          href={COMPANY.phoneHref}
          aria-label={`Ligar para ${COMPANY.name} no número ${COMPANY.phoneDisplay}`}
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0B0B0F]/90 text-white shadow-lg backdrop-blur transition hover:border-white/35 hover:bg-[#16161D] focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:flex"
        >
          <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
        </a>

        <a
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a Grid Criativa no WhatsApp"
          className="group relative flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-[#052E16] shadow-[0_16px_35px_-14px_rgba(37,211,102,0.9)] transition hover:-translate-y-0.5 hover:bg-[#1FBE5A] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F] sm:px-5"
        >
          <span className="gc-ping absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
          <MessageCircle className="relative h-5 w-5" aria-hidden="true" />
          <span className="relative hidden sm:block">Fale no WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Página                                                             */
/* ------------------------------------------------------------------ */

export default function GridCriativaLanding() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
        body { margin: 0; background: #0B0B0F; font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif; }
        ::selection { background: #FF5C00; color: #fff; }

        .gc-display { font-family: 'Sora', 'Inter', ui-sans-serif, system-ui, sans-serif; letter-spacing: -0.02em; }

        .gc-grid {
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px);
          background-size: 64px 64px;
        }
        .gc-grid-light {
          background-image:
            linear-gradient(to right, rgba(11,11,15,0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11,11,15,0.07) 1px, transparent 1px);
          background-size: 22px 22px;
        }

        .gc-marquee { animation: gc-marquee 34s linear infinite; }
        @keyframes gc-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        .gc-ping { animation: gc-ping 2.6s cubic-bezier(0, 0, 0.2, 1) infinite; }
        @keyframes gc-ping {
          0% { transform: scale(1); opacity: 0.45; }
          70%, 100% { transform: scale(1.55); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .gc-marquee, .gc-ping { animation: none; }
        }
      `}</style>

      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#0B0B0F]"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <BrandMarquee />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Location />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
