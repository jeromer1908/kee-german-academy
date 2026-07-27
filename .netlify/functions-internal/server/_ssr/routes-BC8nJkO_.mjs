import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { i as AnimatePresence, n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { S as ArrowRight, _ as Globe, a as Send, b as BookOpen, c as MonitorPlay, d as Mic, f as MessageCircle, g as GraduationCap, h as Instagram, i as Star, l as Minus, m as Mail, n as Video, o as Quote, p as Menu, r as Users, s as Plus, t as X, u as Milestone, v as ChartLine, x as ArrowUpRight, y as Briefcase } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BC8nJkO_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Logo_default = "/assets/Logo-D48yC1xv.png";
var links = [
	{
		id: "home",
		key: "home"
	},
	{
		id: "about",
		key: "about"
	},
	{
		id: "courses",
		key: "courses"
	},
	{
		id: "features",
		key: "features"
	},
	{
		id: "reviews",
		key: "reviews"
	},
	{
		id: "faq",
		key: "faq"
	},
	{
		id: "contact",
		key: "contact"
	}
];
function Navbar() {
	const { t, i18n } = useTranslation();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const setLang = (l) => {
		i18n.changeLanguage(l);
		try {
			localStorage.setItem("kg-lang", l);
		} catch {}
	};
	const active = (i18n.language || "en").startsWith("de") ? "de" : "en";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-[#090909]/70 border-b border-[color:var(--color-line)]" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex items-center justify-between py-4 md:py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#home",
					className: "flex items-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: Logo_default,
						alt: "Kee German Academy logo",
						className: "h-16 w-16 rounded-lg object-cover"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-8",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${l.id}`,
						className: "relative text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white",
						children: t(`nav.${l.key}`)
					}, l.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center rounded-full border border-[color:var(--color-line)] bg-white/5 p-1 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									layout: true,
									transition: {
										type: "spring",
										stiffness: 300,
										damping: 26
									},
									className: `absolute top-1 bottom-1 w-1/2 rounded-full bg-gold-gradient`,
									style: { left: active === "en" ? 4 : "calc(50% - 4px)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setLang("en"),
									className: `relative z-10 rounded-full px-3 py-1.5 font-medium transition-colors ${active === "en" ? "text-black" : "text-white/70"}`,
									"aria-label": "Switch to English",
									children: "🇬🇧 EN"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setLang("de"),
									className: `relative z-10 rounded-full px-3 py-1.5 font-medium transition-colors ${active === "de" ? "text-black" : "text-white/70"}`,
									"aria-label": "Auf Deutsch umstellen",
									children: "🇩🇪 DE"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "hidden sm:inline-flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-2 text-xs font-semibold text-black transition-transform hover:scale-[1.03] hover:shadow-[0_0_40px_-5px_rgba(212,175,55,0.55)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 14 }),
								" ",
								t("nav.enroll")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "lg:hidden rounded-full border border-[color:var(--color-line)] p-2 text-white",
							onClick: () => setOpen((o) => !o),
							"aria-label": "Menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: -10
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -10
			},
			className: "lg:hidden border-t border-[color:var(--color-line)] bg-[#090909]/95 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x flex flex-col gap-4 py-6",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${l.id}`,
					onClick: () => setOpen(false),
					className: "text-sm uppercase tracking-[0.2em] text-white/80",
					children: t(`nav.${l.key}`)
				}, l.id))
			})
		}) })]
	});
}
var hero_default = "/assets/hero-CM0mh_bG.png";
function Hero() {
	const { t } = useTranslation();
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, .2]);
	const words = t("hero.words", { returnObjects: true });
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setIndex(0);
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % words.length);
		}, 2500);
		return () => clearInterval(interval);
	}, [words.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		ref,
		className: "relative isolate overflow-hidden hero-gradient min-h-[100svh]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y,
					opacity
				},
				className: "absolute inset-0 -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_default,
					alt: "",
					className: "h-full w-full object-cover opacity-45",
					width: 1920,
					height: 1080
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-[#090909]/40 via-[#090909]/60 to-[#090909]" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(212,175,55,0.25),transparent)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative flex min-h-[100svh] flex-col justify-center pt-24 pb-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .8 },
						className: "text-[11px] font-medium uppercase tracking-[0.4em] text-[color:var(--color-gold)]",
						children: t("hero.eyebrow")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 40
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: .1,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mt-4 font-display text-[clamp(2.25rem,6.5vw,6rem)] leading-[1.05] text-white min-h-[1.9em]",
						children: [
							t("hero.title1"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									initial: {
										opacity: 0,
										y: 16
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: {
										opacity: 0,
										y: -16
									},
									transition: {
										duration: .4,
										ease: "easeOut"
									},
									className: "inline-block italic text-gold-gradient",
									children: words[index]
								}, words[index])
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: 1,
							delay: .4
						},
						className: "mt-4 font-display italic text-lg md:text-xl text-[color:var(--color-gold-2)]",
						children: t("hero.tagline")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .55
						},
						className: "mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-[color:var(--color-paragraph)]",
						children: t("hero.sub")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .75
						},
						className: "mt-6 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-black transition-all hover:scale-[1.03] hover:shadow-[0_0_60px_-10px_rgba(212,175,55,0.7)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 16 }),
								" ",
								t("cta.enroll")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "group inline-flex items-center gap-2 rounded-full border border-[color:var(--color-gold)]/50 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-[color:var(--color-gold)] hover:bg-[color:var(--color-gold)]/10",
							children: [
								t("cta.demo"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 16,
									className: "transition-transform group-hover:translate-x-1"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: 1,
							delay: 1
						},
						className: "mt-6 text-xs uppercase tracking-[0.3em] text-white/40",
						children: t("hero.trust")
					})
				]
			})
		]
	});
}
var variants = {
	up: {
		hidden: {
			opacity: 0,
			y: 32
		},
		show: {
			opacity: 1,
			y: 0
		}
	},
	left: {
		hidden: {
			opacity: 0,
			x: -40
		},
		show: {
			opacity: 1,
			x: 0
		}
	},
	right: {
		hidden: {
			opacity: 0,
			x: 40
		},
		show: {
			opacity: 1,
			x: 0
		}
	},
	fade: {
		hidden: { opacity: 0 },
		show: { opacity: 1 }
	}
};
function Reveal({ children, as: _as, direction = "up", delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .8,
			ease: [
				.22,
				1,
				.36,
				1
			],
			delay
		},
		variants: variants[direction],
		children
	});
}
function SectionLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-[color:var(--color-gold)]",
		children
	});
}
var icons$2 = [
	MonitorPlay,
	Milestone,
	Briefcase
];
function About() {
	const { t } = useTranslation();
	const points = t("about.points", { returnObjects: true });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative section-glow py-28 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-16 lg:grid-cols-2 lg:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: t("about.label") }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-[clamp(2.75rem,5.5vw,5rem)] leading-[1.05] text-white",
						children: [
							"German,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[color:var(--color-gold)]",
								children: "made"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"practical."
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-white/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-4 rounded-full bg-[color:var(--color-gold)]" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-lg text-lg leading-relaxed text-[color:var(--color-paragraph)]",
						children: t("about.copy")
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-6",
				children: points.map((p, i) => {
					const Icon = icons$2[i] ?? Briefcase;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1 * i,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex items-center gap-6 rounded-3xl border border-[color:var(--color-gold)]/20 bg-black/30 p-8 transition-all hover:border-[color:var(--color-gold)]/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-20 w-20 shrink-0 place-items-center rounded-full border border-[color:var(--color-gold)]/50 text-[color:var(--color-gold)] shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-transform group-hover:scale-105",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 30 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 w-px shrink-0 bg-white/10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-2xl italic text-[color:var(--color-gold)]",
										children: ["0", i + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl md:text-3xl text-white",
										children: p.t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[color:var(--color-paragraph)]",
										children: p.d
									})
								] })
							]
						})
					}, i);
				})
			})]
		})
	});
}
var study_germany_default = "/assets/study-germany-BdedYjlJ.jpg";
var icons$1 = [
	GraduationCap,
	Briefcase,
	Globe
];
function WhyGerman() {
	const { t } = useTranslation();
	const cards = t("why.cards", { returnObjects: true });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why",
		className: "relative py-28 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: t("why.label") }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-4xl font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] text-white",
						children: t("why.heading")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-lg text-[color:var(--color-paragraph)]",
						children: t("why.intro")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-6 lg:grid-cols-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						direction: "left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-full min-h-[560px] overflow-hidden rounded-3xl border border-[color:var(--color-gold)]/25 group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: study_germany_default,
									alt: "Study in Germany",
									loading: "lazy",
									className: "absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-105",
									width: 1024,
									height: 1024
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/70 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10 flex h-full flex-col justify-between p-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-14 w-14 place-items-center rounded-full border border-[color:var(--color-gold)]/50 bg-black/50 text-[color:var(--color-gold)] shadow-[0_0_25px_rgba(212,175,55,0.35)] backdrop-blur-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { size: 24 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl md:text-4xl text-white",
											children: cards[0].t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "my-4 flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-white/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-4 rounded-full bg-[color:var(--color-gold)]" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "max-w-xs text-[color:var(--color-paragraph)]",
											children: cards[0].d
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "mt-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-gold)]/50 px-6 py-3 text-sm font-medium text-[color:var(--color-gold)] transition-all hover:bg-[color:var(--color-gold)] hover:text-black",
											children: [t("why.cta", "Learn More"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
										})
									] })]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 lg:col-span-2 lg:grid-cols-1",
						children: cards.slice(1).map((c, i) => {
							const Icon = icons$1[i + 1];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								direction: "right",
								delay: .1 * i,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "glass-card group relative flex h-full min-h-[260px] items-start gap-6 rounded-3xl border border-[color:var(--color-line)] p-8 md:p-10 transition-all hover:border-[color:var(--color-gold)]/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-16 w-16 shrink-0 place-items-center rounded-full border border-[color:var(--color-gold)]/40 bg-[color:var(--color-gold)]/5 text-[color:var(--color-gold)] shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-transform group-hover:scale-105",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 26 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 pr-16",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-2xl md:text-3xl text-white",
													children: c.t
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "my-3 flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-white/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-4 rounded-full bg-[color:var(--color-gold)]" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[color:var(--color-paragraph)]",
													children: c.d
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-label": `Learn more about ${c.t}`,
											className: "absolute bottom-8 right-8 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[color:var(--color-gold)]/40 text-[color:var(--color-gold)] transition-all hover:bg-[color:var(--color-gold)] hover:text-black",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })
										})
									]
								})
							}, c.t);
						})
					})]
				})
			]
		})
	});
}
function Courses() {
	const { t } = useTranslation();
	const list = t("courses.list", { returnObjects: true });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "courses",
		className: "relative py-28 md:py-36 bg-[color:var(--color-bg-2)]/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: t("courses.label") }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-white",
						children: [
							t("courses.heading1"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[color:var(--color-gold)]",
								children: t("courses.heading2")
							}),
							" ",
							t("courses.heading3")
						]
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xs text-sm text-[color:var(--color-paragraph)] md:text-right",
						children: t("courses.note")
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-6 lg:grid-cols-3",
				children: list.map((c, i) => {
					const popular = i === 1;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1 * i,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							whileHover: { y: -6 },
							transition: {
								type: "spring",
								stiffness: 200,
								damping: 20
							},
							className: `relative flex h-full flex-col rounded-3xl border p-8 md:p-10 transition-all ${popular ? "border-[color:var(--color-gold)]/60 bg-gradient-to-b from-[#1a1508] to-[#0d0a04] gold-glow" : "border-[color:var(--color-line)] bg-[color:var(--color-card)]/60 hover:border-[color:var(--color-gold)]/30"}`,
							children: [
								popular && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-black",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
											size: 12,
											fill: "currentColor"
										}),
										" ",
										t("courses.popular")
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-7xl italic text-gold-gradient",
										children: c.level
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-full bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-widest text-white/60",
										children: [
											c.duration,
											" ",
											t("courses.months")
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 mb-6 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-[color:var(--color-gold)]/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "min-h-[72px] text-[color:var(--color-paragraph)]",
									children: c.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 border-t border-dashed border-[color:var(--color-line)] pt-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-display text-4xl md:text-5xl text-white",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mr-1 align-top text-2xl md:text-3xl",
												children: "₹"
											}), c.price]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-white/50",
											children: t("courses.month")
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									className: `mt-8 inline-flex items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold transition-all ${popular ? "bg-gold-gradient text-black hover:shadow-[0_0_50px_-10px_rgba(212,175,55,0.7)]" : "border border-[color:var(--color-line)] text-white hover:border-[color:var(--color-gold)]/60"}`,
									children: [
										t("cta.enroll"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })
									]
								})
							]
						})
					}, c.level);
				})
			})]
		})
	});
}
var icons = [
	Video,
	BookOpen,
	Mic,
	ChartLine,
	Users,
	MessageCircle
];
function Features() {
	const { t } = useTranslation();
	const items = t("features.items", { returnObjects: true });
	const marqueeWords = [
		"Live Classes",
		"Speaking Practice",
		"Weekly Assessments",
		"Small Batch Size",
		"WhatsApp Support",
		"Study Materials"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "features",
		className: "relative py-28 md:py-36 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute top-8 left-0 right-0 overflow-hidden bg-[color:var(--color-gold)] py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track flex w-max whitespace-nowrap gap-16 font-display text-6xl italic text-black",
				children: [
					...marqueeWords,
					...marqueeWords,
					...marqueeWords
				].map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-16",
					children: [
						w,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white",
							children: "✦"
						})
					]
				}, i))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: t("features.label") }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-white",
							children: [
								t("features.heading1"),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[color:var(--color-gold)]",
									children: t("features.heading2")
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-[color:var(--color-paragraph)]",
							children: t("features.intro")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .25,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-10 h-px w-full bg-gradient-to-r from-[color:var(--color-gold)]/60 via-[color:var(--color-gold)]/10 to-transparent" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
						children: items.map((it, i) => {
							const Icon = icons[i] ?? Video;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .05 * i,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group flex items-start gap-5 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-card)]/50 p-7 h-full transition-all hover:border-[color:var(--color-gold)]/40 hover:bg-[color:var(--color-card)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-[color:var(--color-gold)]/30 bg-[color:var(--color-gold)]/5 text-[color:var(--color-gold)] transition-transform group-hover:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											size: 26,
											strokeWidth: 1.75
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-2xl text-white",
												children: it.t
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 mb-3 block h-[2px] w-8 rounded-full bg-[color:var(--color-gold)]" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm leading-relaxed text-[color:var(--color-paragraph)]",
												children: it.d
											})
										]
									})]
								})
							}, it.t);
						})
					})
				]
			})
		})]
	});
}
function Reviews() {
	const { t } = useTranslation();
	const list = t("reviews.list", { returnObjects: true });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "reviews",
		className: "relative py-28 md:py-36 bg-[color:var(--color-bg-2)]/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: t("reviews.label") }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-white",
						children: t("reviews.heading")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 lg:grid-cols-3",
					children: list.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1 * i,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-card flex h-full flex-col rounded-3xl p-8 transition-all hover:border-[color:var(--color-gold)]/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
									className: "text-[color:var(--color-gold)]/70",
									size: 28
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex gap-1 text-[color:var(--color-gold)]",
									children: [...Array(5)].map((_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										size: 14,
										fill: "currentColor"
									}, s))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-5 flex-1 font-display text-xl italic leading-snug text-white/90",
									children: [
										"\"",
										r.q,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex items-center gap-4 border-t border-[color:var(--color-line)] pt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-white/10 to-white/[0.02] font-display text-lg text-[color:var(--color-gold)]",
										children: r.n.split(" ").map((x) => x[0]).slice(0, 2).join("")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium text-white",
										children: r.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-gold)]/80",
										children: r.r
									})] })]
								})
							]
						})
					}, i))
				})
			]
		})
	});
}
function FAQ() {
	const { t } = useTranslation();
	const list = t("faq.list", { returnObjects: true });
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "relative py-28 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: t("faq.label") }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-white",
						children: [
							t("faq.heading1"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[color:var(--color-gold)]",
								children: t("faq.heading2")
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 space-y-4",
					children: list.map((f, i) => {
						const isOpen = open === i;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-2xl border px-6 md:px-8 transition-all ${isOpen ? "border-[color:var(--color-gold)]/60 bg-[color:var(--color-card)]/40 shadow-[0_0_40px_-10px_rgba(212,175,55,0.35)]" : "border-[color:var(--color-line)] bg-transparent"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpen(isOpen ? null : i),
								className: "flex w-full items-center gap-5 py-6 text-left",
								"aria-expanded": isOpen,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									className: `grid h-9 w-9 shrink-0 place-items-center rounded-full border text-[color:var(--color-gold)] ${isOpen ? "border-[color:var(--color-gold)]" : "border-[color:var(--color-line)]"}`,
									children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg md:text-2xl text-white",
									children: f.q
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								initial: false,
								children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										height: 0,
										opacity: 0
									},
									animate: {
										height: "auto",
										opacity: 1
									},
									exit: {
										height: 0,
										opacity: 0
									},
									transition: {
										duration: .35,
										ease: [
											.22,
											1,
											.36,
											1
										]
									},
									className: "overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-4 pb-7 pl-14",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-[2px] shrink-0 rounded-full bg-[color:var(--color-gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "max-w-3xl text-sm md:text-base text-[color:var(--color-paragraph)]",
											children: f.a
										})]
									})
								})
							})]
						}, i);
					})
				})
			]
		})
	});
}
function Contact() {
	const { t } = useTranslation();
	const [sending, setSending] = (0, import_react.useState)(false);
	const submit = (e) => {
		e.preventDefault();
		setSending(true);
		setTimeout(() => {
			toast.success(t("contact.sent"));
			e.target.reset();
			setSending(false);
		}, 700);
	};
	const inputCls = "w-full rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-card)]/60 px-5 py-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[color:var(--color-gold)]/60";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-28 md:py-36 bg-[color:var(--color-bg-2)]/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: t("contact.label") }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-white",
						children: t("contact.heading")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[color:var(--color-paragraph)]",
						children: t("contact.sub")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "glass-card rounded-3xl p-6 md:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									placeholder: t("contact.name"),
									className: inputCls
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "email",
									placeholder: t("contact.email"),
									className: inputCls
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									placeholder: t("contact.phone"),
									className: inputCls
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									placeholder: t("contact.profession"),
									className: inputCls
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									required: true,
									defaultValue: "",
									className: "w-full rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-card)]/60 px-5 py-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[color:var(--color-gold)]/60 md:col-span-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: t("contact.course")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "A1",
											children: "A1"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "A2",
											children: "A2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "B1",
											children: "B1"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 5,
									placeholder: t("contact.message"),
									className: "w-full rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-card)]/60 px-5 py-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[color:var(--color-gold)]/60 md:col-span-2 resize-none"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							disabled: sending,
							className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient py-4 text-sm font-semibold text-black transition-all hover:shadow-[0_0_60px_-10px_rgba(212,175,55,0.7)] disabled:opacity-60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 16 }),
								" ",
								t("cta.send")
							]
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								direction: "right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://wa.me/919876543210",
									target: "_blank",
									rel: "noreferrer",
									className: "glass-card group flex items-center gap-5 rounded-3xl p-6 transition-all hover:border-[color:var(--color-gold)]/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-14 w-14 place-items-center rounded-2xl bg-[color:var(--color-gold)]/10 text-[color:var(--color-gold)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 22 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-xl text-white",
											children: t("contact.whatsapp")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm text-[color:var(--color-paragraph)]",
											children: "+91 98765 43210"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-white/40 mt-1",
											children: t("contact.whatsappSub")
										})
									] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								direction: "right",
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://instagram.com",
									target: "_blank",
									rel: "noreferrer",
									className: "glass-card group flex items-center gap-5 rounded-3xl p-6 transition-all hover:border-[color:var(--color-gold)]/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-14 w-14 place-items-center rounded-2xl bg-[color:var(--color-gold)]/10 text-[color:var(--color-gold)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 22 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-xl text-white",
											children: "Instagram"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm text-[color:var(--color-paragraph)]",
											children: t("contact.instagram")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-white/40 mt-1",
											children: t("contact.instagramSub")
										})
									] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								direction: "right",
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:hello@keegermanacademy.com",
									className: "glass-card group flex items-center gap-5 rounded-3xl p-6 transition-all hover:border-[color:var(--color-gold)]/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-14 w-14 place-items-center rounded-2xl bg-[color:var(--color-gold)]/10 text-[color:var(--color-gold)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 22 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-xl text-white",
											children: "Email"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm text-[color:var(--color-paragraph)]",
											children: t("contact.email_card")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-white/40 mt-1",
											children: t("contact.emailSub")
										})
									] })]
								})
							})
						]
					})]
				})
			]
		})
	});
}
function Footer() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative border-t border-[color:var(--color-line)] bg-[#070707] py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: Logo_default,
							alt: "Kee German Academy logo",
							className: "h-11 w-11 rounded-lg object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-xl text-white",
								children: "Kee German"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] tracking-[0.32em] text-[color:var(--color-gold)]",
								children: "ACADEMY"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-display italic text-2xl text-gold-gradient",
						children: t("footer.tagline")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm text-[color:var(--color-paragraph)]",
						children: t("footer.desc")
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-gold)]",
					children: t("footer.navigate")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-3",
					children: [
						"about",
						"courses",
						"features",
						"faq",
						"contact"
					].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${k}`,
						className: "font-display text-xl text-white/80 transition-colors hover:text-[color:var(--color-gold-2)]",
						children: t(`nav.${k}`)
					}) }, k))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-gold)]",
						children: t("footer.connect")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex gap-3",
						children: [
							{
								Icon: MessageCircle,
								href: "https://wa.me/919876543210"
							},
							{
								Icon: Instagram,
								href: "https://instagram.com"
							},
							{
								Icon: Mail,
								href: "mailto:hello@keegermanacademy.com"
							}
						].map(({ Icon, href }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href,
							target: "_blank",
							rel: "noreferrer",
							className: "grid h-11 w-11 place-items-center rounded-full border border-[color:var(--color-line)] text-white/70 transition-all hover:border-[color:var(--color-gold)]/60 hover:text-[color:var(--color-gold)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 16 })
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-sm text-[color:var(--color-paragraph)]",
						children: "hello@keegermanacademy.com"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[color:var(--color-paragraph)]",
						children: "Chennai, India"
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mt-16 flex flex-col justify-between gap-3 border-t border-[color:var(--color-line)] pt-8 text-xs text-white/40 md:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Kee German Academy. ",
				t("footer.rights")
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: t("footer.made") })]
		})]
	});
}
var WHATSAPP_NUMBER = "911234567890";
var WHATSAPP_MESSAGE = "Hi! I'd like to know more about Kee German Academy courses.";
function FloatingWhatsApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
		href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
		target: "_blank",
		rel: "noopener noreferrer",
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			delay: 1.2,
			duration: .6
		},
		whileHover: { scale: 1.08 },
		whileTap: { scale: .95 },
		className: "fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-black shadow-[0_8px_30px_-6px_rgba(212,175,55,0.6)]",
		"aria-label": "Chat on WhatsApp",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-[color:var(--color-gold)]/40 animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
			size: 28,
			strokeWidth: 2,
			className: "relative z-10"
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-[color:var(--color-bg)] text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyGerman, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Courses, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reviews, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "bottom-right"
			})
		]
	});
}
//#endregion
export { Index as component };
