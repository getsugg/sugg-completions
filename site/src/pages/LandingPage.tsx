import { For, createSignal } from "solid-js";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
import {
  ClipboardCopy,
  Check,
  Lightbulb,
  Zap,
  Download,
  Upload,
  FileCode,
  Package,
  Terminal,
  RefreshCw,
  Cpu,
  GitBranch,
  Languages,
  ArrowRightToLine,
  X,
  Server,
  Boxes,
  Cloud,
  TerminalSquare,
} from "lucide-solid";
import scripts from "~/generated/scripts.json";
import { ShimmerButton } from "~/components/magic-ui/shimmer-button";
import { BorderBeam } from "~/components/magic-ui/border-beam";
import { Meteors } from "~/components/magic-ui/meteors";
import { DemoTerminal } from "~/components/magic-ui/terminal";
import { AnimatedShinyText } from "~/components/magic-ui/animated-shiny-text";
import { aiDemoHtml, bunCodeHtml, gitCodeHtml, npmCodeHtml } from "~/generated/landing-code-html";
import "./LandingPage.css";

const shells = ["zsh", "fish", "bash", "nushell", "powershell"] as const;

export default function LandingPage() {
  const [codeTab, setCodeTab] = createSignal("bun");
  const [copiedIdx, setCopiedIdx] = createSignal(-1);
  function copyWithFeedback(text: string, idx: number) {
    void navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(-1), 1500);
  }
  function scrollTo(e: MouseEvent, id: string) {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div class="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav class="sticky top-0 z-50 flex h-13 items-center gap-6 px-6 border-b border-border bg-background/85 backdrop-blur-sm">
        <img src="/logo-horizontal.svg" alt="sugg" class="h-8 shrink-0" />
        <div class="flex items-center gap-5 ml-auto">
          <a
            href="#problem"
            onClick={(e) => scrollTo(e, "problem")}
            class="text-sm text-muted-foreground hover:text-amber-500 transition-colors no-underline"
          >
            Problem
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => scrollTo(e, "how-it-works")}
            class="text-sm text-muted-foreground hover:text-amber-500 transition-colors no-underline"
          >
            How
          </a>
          <a
            href="#features"
            onClick={(e) => scrollTo(e, "features")}
            class="text-sm text-muted-foreground hover:text-amber-500 transition-colors no-underline"
          >
            Features
          </a>
          <a
            href="#ai-workflow"
            onClick={(e) => scrollTo(e, "ai-workflow")}
            class="text-sm text-muted-foreground hover:text-amber-500 transition-colors no-underline"
          >
            AI
          </a>
          <a
            href="#comparison"
            onClick={(e) => scrollTo(e, "comparison")}
            class="text-sm text-muted-foreground hover:text-amber-500 transition-colors no-underline"
          >
            Compare
          </a>
          <a
            href="#install"
            onClick={(e) => scrollTo(e, "install")}
            class="text-sm text-muted-foreground hover:text-amber-500 transition-colors no-underline"
          >
            Install
          </a>
          <Button
            variant="ghost"
            size="sm"
            class="text-xs"
            as="a"
            href="https://github.com/getsugg/sugg"
            target="_blank"
          >
            GitHub
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section class="heroglow relative overflow-hidden flex flex-col items-center text-center px-6 pt-20 pb-14">
        <Meteors number={30} angle={215} />
        <div class="flex items-center justify-center mb-4">
          <img src="/logo-horizontal.svg" alt="sugg" class="h-14" />
        </div>
        <h1 class="text-[clamp(36px,6vw,64px)] font-extrabold leading-[1.1] max-w-180 tracking-[-0.03em]">
          Write <span class="text-amber-500">TypeScript</span>.<br />
          Complete <span class="text-amber-500">Everywhere</span>.
        </h1>
        <AnimatedShinyText class="mt-4 text-[17px] max-w-135 leading-7 text-muted-foreground dark:text-muted-foreground">
          A low-latency shell completion engine powered by Rust. Author completion scripts once in
          TypeScript — get instant, context-aware suggestions across Zsh, Fish, Bash, Nushell, and
          PowerShell.
        </AnimatedShinyText>

        <div class="flex flex-col items-center gap-3 mt-8">
          <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border font-mono text-xs text-muted-foreground">
            <span class="text-foreground">
              curl -fsSL https://raw.githubusercontent.com/getsugg/sugg/main/scripts/install.sh |
              bash
            </span>
            <button
              class="text-muted-foreground hover:text-amber-500 bg-transparent border-none cursor-pointer p-1 text-sm"
              onClick={() =>
                copyWithFeedback(
                  "curl -fsSL https://raw.githubusercontent.com/getsugg/sugg/main/scripts/install.sh | bash",
                  0,
                )
              }
            >
              {copiedIdx() === 0 ? (
                <Check class="w-3.5 h-3.5 text-success-foreground" />
              ) : (
                <ClipboardCopy class="w-3.5 h-3.5" />
              )}
            </button>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-3">
            <a href="#install" onClick={(e) => scrollTo(e, "install")}>
              <ShimmerButton
                shimmerColor="#f59e0b"
                background="rgba(245, 158, 11, 1)"
                borderRadius="8px"
                shimmerDuration="3s"
                class="text-primary-foreground font-semibold text-sm px-6 py-2.5"
              >
                Install
              </ShimmerButton>
            </a>
            <Button
              variant="ghost"
              class="text-muted-foreground border-border border"
              as="a"
              href="#features"
              onClick={(e) => scrollTo(e, "features")}
            >
              Learn More ↓
            </Button>
          </div>
        </div>

        <DemoTerminal
          class="mt-10 max-w-170 w-full text-left h-67.75 overflow-hidden"
          title="sugg — zsh"
          lines={[
            { type: "typing", text: "$ sugg init zsh" },
            { type: "span", text: "# Add this to ~/.zshrc:", class: "text-muted-foreground" },
            {
              type: "span",
              text: 'eval "$(sugg init zsh)"',
              class: "text-muted-foreground text-amber-300",
            },
            { type: "typing", text: "$ sugg reload" },
            {
              type: "span",
              text: `\u2713 Compiled ${scripts.length} completion scripts`,
              class: "text-muted-foreground",
            },
            {
              type: "span",
              text: "\u2713 Binary cache written (zero-copy ready)",
              class: "text-muted-foreground",
            },
            { type: "typing", text: "$ git checkout " },
            {
              type: "span",
              text: "main    develop    feature/*    release/*",
              class: "text-amber-500",
            },
          ]}
        />
      </section>

      {/* Shell strip */}
      <div class="flex justify-center items-center gap-8 px-6 pt-10 pb-6 flex-wrap">
        <span class="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
          Supported
        </span>
        <For each={shells}>
          {(s) => (
            <Badge variant="outline" class="font-mono text-sm">
              {s}
            </Badge>
          )}
        </For>
      </div>

      {/* Problem / Solution */}
      <section id="problem" class="px-6 py-16 max-w-275 mx-auto">
        <div class="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
          The Problem
        </div>
        <h2 class="text-[30px] font-bold tracking-[-0.02em] mb-3">
          4 shells, 4 completion systems, 4x the pain
        </h2>
        <p class="text-sm text-muted-foreground max-w-150 mb-10 leading-7">
          If you've ever maintained dotfiles across multiple shells — or tried to write a Fish
          completion function after years of Zsh — you know the pain.
        </p>
        <div class="grid grid-cols-[1fr_1fr] gap-6 max-md:grid-cols-1">
          <Card class="border-rose-500/30 bg-rose-500/10 shadow-none">
            <CardContent class="p-7">
              <div class="text-sm font-bold flex items-center gap-1.5 mb-2.5 text-rose-400">
                Before Sugg
              </div>
              <ul class="list-none space-y-1.5">
                <li class="flex items-start gap-2 text-sm text-muted-foreground">
                  <X class="w-4 h-4 text-rose-500/70 shrink-0 mt-1" /> Each shell has its own
                  completion syntax — none reusable
                </li>
                <li class="flex items-start gap-2 text-sm text-muted-foreground">
                  <X class="w-4 h-4 text-rose-500/70 shrink-0 mt-1" /> Maintaining 4+ completion
                  files for one CLI tool is unsustainable
                </li>
                <li class="flex items-start gap-2 text-sm text-muted-foreground">
                  <X class="w-4 h-4 text-rose-500/70 shrink-0 mt-1" /> Dynamic completions require
                  shell-specific wizardry
                </li>
                <li class="flex items-start gap-2 text-sm text-muted-foreground">
                  <X class="w-4 h-4 text-rose-500/70 shrink-0 mt-1" /> Every TAB re-runs the same
                  expensive commands
                </li>
                <li class="flex items-start gap-2 text-sm text-muted-foreground">
                  <X class="w-4 h-4 text-rose-500/70 shrink-0 mt-1" /> Alias support is fragmented
                  across shells
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card class="border-emerald-500/30 bg-emerald-500/10 shadow-none">
            <CardContent class="p-7">
              <div class="text-sm font-bold flex items-center gap-1.5 mb-2.5 text-emerald-400">
                After Sugg
              </div>
              <ul class="list-none space-y-1.5">
                <li class="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check class="w-4 h-4 text-emerald-500/70 shrink-0 mt-1" /> Write once in
                  TypeScript — compile to all 5 shells
                </li>
                <li class="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check class="w-4 h-4 text-emerald-500/70 shrink-0 mt-1" /> One file per CLI, not
                  one per shell per tool
                </li>
                <li class="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check class="w-4 h-4 text-emerald-500/70 shrink-0 mt-1" /> Dynamic callbacks use
                  async JS: execFile, scanPath, readJson
                </li>
                <li class="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check class="w-4 h-4 text-emerald-500/70 shrink-0 mt-1" /> Context-aware cache
                  eliminates redundant exec
                </li>
                <li class="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check class="w-4 h-4 text-emerald-500/70 shrink-0 mt-1" /> Native alias
                  resolution — alias g=git just works
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" class="px-6 py-16 max-w-275 mx-auto">
        <div class="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
          How It Works
        </div>
        <h2 class="text-[30px] font-bold tracking-[-0.02em] mb-3">
          Three steps from source to completions
        </h2>
        <p class="text-sm text-muted-foreground max-w-150 mb-10 leading-7">
          Sugg decouples compilation from runtime. You write once, it compiles once, and completions
          arrive at sub-millisecond speed.
        </p>
        <div class="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          <Card class="group relative overflow-hidden text-center hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all">
            <CardContent class="p-7">
              <div class="w-11 h-11 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-3.5">
                <FileCode class="w-5 h-5 text-amber-500" />
              </div>
              <h4 class="text-sm font-semibold mb-1.5">1. Write TypeScript</h4>
              <p class="text-xs text-muted-foreground leading-7">
                Export a createCompletion() config with subcommands, options, and dynamic callbacks.
                Full type safety.
              </p>
            </CardContent>
            <div class="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <BorderBeam size={60} duration={8} colorFrom="#f59e0b" colorTo="#ea580c" />
            </div>
          </Card>
          <Card class="group relative overflow-hidden text-center hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all">
            <CardContent class="p-7">
              <div class="w-11 h-11 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-3.5">
                <Package class="w-5 h-5 text-amber-500" />
              </div>
              <h4 class="text-sm font-semibold mb-1.5">2. Build &amp; Compile</h4>
              <p class="text-xs text-muted-foreground leading-7">
                sugg reload bundles via Rolldown, compiles to QuickJS bytecode, and serializes with
                rkyv.
              </p>
            </CardContent>
            <div class="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <BorderBeam size={60} duration={8} colorFrom="#f59e0b" colorTo="#ea580c" />
            </div>
          </Card>
          <Card class="group relative overflow-hidden text-center hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all">
            <CardContent class="p-7">
              <div class="w-11 h-11 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-3.5">
                <ArrowRightToLine class="w-5 h-5 text-amber-500" />
              </div>
              <h4 class="text-sm font-semibold mb-1.5">3. Tab. Instantly.</h4>
              <p class="text-xs text-muted-foreground leading-7">
                Runtime loads via mmap — zero-copy. State machine walks the tree, dynamic bytecode
                runs in microseconds.
              </p>
            </CardContent>
            <div class="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <BorderBeam size={60} duration={8} colorFrom="#f59e0b" colorTo="#ea580c" />
            </div>
          </Card>
        </div>
        <div class="mt-6 p-5 rounded-lg bg-muted/40 border border-border font-mono text-xs leading-8 text-muted-foreground">
          <span class="text-amber-300">TS source</span>
          <span class="text-amber-500"> → </span>
          <span class="text-amber-400/80">Oxc</span>
          <span class="text-amber-500"> AST split → </span>
          <span class="text-amber-400/80">Rolldown</span>
          <span class="text-amber-500"> bundle → </span>
          <span class="text-amber-400/80">QuickJS</span>
          <span class="text-amber-500"> bytecode + </span>
          <span class="text-amber-400/80">rkyv</span>
          <span class="text-amber-500"> → </span>
          <span class="text-amber-300">mmap</span>
          <span class="text-amber-500"> zero-copy → </span>
          <span class="text-amber-400/80">5 shells</span>
        </div>
      </section>

      {/* Features */}
      <section id="features" class="px-6 py-16 max-w-275 mx-auto">
        <div class="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
          Why Sugg
        </div>
        <h2 class="text-[30px] font-bold tracking-[-0.02em] mb-3">
          Built for speed, crafted for DX
        </h2>
        <p class="text-sm text-muted-foreground max-w-150 mb-10 leading-7">
          Unlike traditional shell completions, Sugg decouples compilation from runtime — delivering
          microsecond lookups via zero-copy memory mapping.
        </p>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
          <Card class="group relative overflow-hidden hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all">
            <CardContent class="p-6">
              <div class="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3.5">
                <Zap class="w-5 h-5 text-amber-500" />
              </div>
              <h3 class="text-sm font-semibold mb-1.5">Zero-Copy Runtime</h3>
              <p class="text-sm text-muted-foreground leading-relaxed">
                rkyv archives enable mmap-based lookups — no parsing overhead on TAB press.
              </p>
              <div class="mt-2 font-mono text-[11px] text-amber-500 px-2 py-1 rounded bg-amber-500/10 inline-block">
                &lt; 50µs lookup
              </div>
            </CardContent>
            <div class="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <BorderBeam size={60} duration={8} colorFrom="#f59e0b" colorTo="#ea580c" />
            </div>
          </Card>
          <Card class="group relative overflow-hidden hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all">
            <CardContent class="p-6">
              <div class="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3.5">
                <Terminal class="w-5 h-5 text-amber-500" />
              </div>
              <h3 class="text-sm font-semibold mb-1.5">5 Shells, 1 Source</h3>
              <p class="text-sm text-muted-foreground leading-relaxed">
                Write once in TypeScript. Works on Zsh, Fish, Bash, Nushell, and PowerShell.
              </p>
              <div class="mt-2 font-mono text-[11px] text-amber-500 px-2 py-1 rounded bg-amber-500/10 inline-block">
                100% coverage
              </div>
            </CardContent>
            <div class="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <BorderBeam size={60} duration={8} colorFrom="#f59e0b" colorTo="#ea580c" />
            </div>
          </Card>
          <Card class="group relative overflow-hidden hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all">
            <CardContent class="p-6">
              <div class="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3.5">
                <RefreshCw class="w-5 h-5 text-amber-500" />
              </div>
              <h3 class="text-sm font-semibold mb-1.5">Context-Aware Cache</h3>
              <p class="text-sm text-muted-foreground leading-relaxed">
                cache.get(ctx, ttl) suppresses redundant external calls during rapid keystrokes.
              </p>
            </CardContent>
            <div class="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <BorderBeam size={60} duration={8} colorFrom="#f59e0b" colorTo="#ea580c" />
            </div>
          </Card>
          <Card class="group relative overflow-hidden hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all">
            <CardContent class="p-6">
              <div class="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3.5">
                <Cpu class="w-5 h-5 text-amber-500" />
              </div>
              <h3 class="text-sm font-semibold mb-1.5">Native System APIs</h3>
              <p class="text-sm text-muted-foreground leading-relaxed">
                execFile bypasses shell fork. scanPath unifies filesystem scanning — all from JS
                callbacks.
              </p>
            </CardContent>
            <div class="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <BorderBeam size={60} duration={8} colorFrom="#f59e0b" colorTo="#ea580c" />
            </div>
          </Card>
          <Card class="group relative overflow-hidden hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all">
            <CardContent class="p-6">
              <div class="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3.5">
                <GitBranch class="w-5 h-5 text-amber-500" />
              </div>
              <h3 class="text-sm font-semibold mb-1.5">State-Aware Callbacks</h3>
              <p class="text-sm text-muted-foreground leading-relaxed">
                Dynamic functions receive parsed ctx.options and ctx.args — toggle suggestions based
                on flags.
              </p>
            </CardContent>
            <div class="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <BorderBeam size={60} duration={8} colorFrom="#f59e0b" colorTo="#ea580c" />
            </div>
          </Card>
          <Card class="group relative overflow-hidden hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all">
            <CardContent class="p-6">
              <div class="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3.5">
                <Languages class="w-5 h-5 text-amber-500" />
              </div>
              <h3 class="text-sm font-semibold mb-1.5">ICU4X i18n</h3>
              <p class="text-sm text-muted-foreground leading-relaxed">
                Multilingual descriptions with zero-overhead locale fallback. Ship one schema for
                all languages.
              </p>
            </CardContent>
            <div class="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <BorderBeam size={60} duration={8} colorFrom="#f59e0b" colorTo="#ea580c" />
            </div>
          </Card>
        </div>
      </section>

      {/* AI Workflow */}
      <section id="ai-workflow" class="ai-section px-6 py-16">
        <div class="max-w-275 mx-auto">
          <div class="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
            AI-Powered{" "}
            <Badge variant="warning" class="text-[10px] ml-2 align-middle">
              Exclusive
            </Badge>
          </div>
          <h2 class="text-[30px] font-bold tracking-[-0.02em] mb-3">
            Generate completions from <span class="font-mono">--help</span>
          </h2>
          <p class="text-sm text-muted-foreground max-w-150 mb-10 leading-7">
            A unique Sugg workflow: feed your CLI's help text to any LLM, get back a ready-to-use
            TypeScript completion script. No manual tree traversal.
          </p>
          <div class="grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
            <Card class="relative">
              <CardContent class="p-5">
                <div class="font-mono text-[11px] font-bold text-amber-500 mb-1.5">STEP 01</div>
                <h4 class="text-sm font-semibold mb-1.5">Collect</h4>
                <p class="text-xs text-muted-foreground leading-7">
                  sugg collect-cli-help recursively gathers all subcommand help texts.
                </p>
                <span class="hidden md:block absolute -right-4.5 top-1/2 -translate-y-1/2 text-muted-foreground text-lg">
                  →
                </span>
              </CardContent>
            </Card>
            <Card class="relative">
              <CardContent class="p-5">
                <div class="font-mono text-[11px] font-bold text-amber-500 mb-1.5">STEP 02</div>
                <h4 class="text-sm font-semibold mb-1.5">Prompt</h4>
                <p class="text-xs text-muted-foreground leading-7">
                  Send output to any LLM with Sugg's guide + type defs as context.
                </p>
                <span class="hidden md:block absolute -right-4.5 top-1/2 -translate-y-1/2 text-muted-foreground text-lg">
                  →
                </span>
              </CardContent>
            </Card>
            <Card class="relative">
              <CardContent class="p-5">
                <div class="font-mono text-[11px] font-bold text-amber-500 mb-1.5">STEP 03</div>
                <h4 class="text-sm font-semibold mb-1.5">Generate</h4>
                <p class="text-xs text-muted-foreground leading-7">
                  LLM produces a complete .ts script — subcommands, options, i18n, and dynamic
                  functions.
                </p>
                <span class="hidden md:block absolute -right-4.5 top-1/2 -translate-y-1/2 text-muted-foreground text-lg">
                  →
                </span>
              </CardContent>
            </Card>
            <Card class="relative">
              <CardContent class="p-5">
                <div class="font-mono text-[11px] font-bold text-amber-500 mb-1.5">STEP 04</div>
                <h4 class="text-sm font-semibold mb-1.5">Compile</h4>
                <p class="text-xs text-muted-foreground leading-7">
                  sugg reload to compile and cache — completions live immediately.
                </p>
              </CardContent>
            </Card>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-7 max-md:grid-cols-1">
            <div class="rounded-lg overflow-hidden border border-border bg-muted/40">
              <div class="px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground border-b border-border flex items-center gap-1.5">
                <span>
                  <Download class="w-3.5 h-3.5 inline" />
                </span>{" "}
                Input: <span class="font-mono text-[11px]">mycli deploy --help</span>
              </div>
              <pre class="p-3.5 font-mono text-xs leading-7 text-muted-foreground whitespace-pre-wrap">
                <span class="text-muted-foreground">$ mycli deploy --help</span>
                {"\n"}
                <span class="text-amber-500">Usage:</span> mycli deploy [options]{"\n"}
                <span class="text-muted-foreground">&lt;environment&gt;</span> Deploy your
                application to a target environment.{"\n"}
                {"\n"}
                <span class="text-amber-500">Options:</span>
                {"\n"}
                {"\u00a0\u00a0"}--config &lt;path&gt;{"\u00a0\u00a0"}Path to config file{"\n"}
                {"\u00a0\u00a0"}--no-build{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}Skip build
                step{"\n"}
                {"\u00a0\u00a0"}--tag &lt;name&gt;{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}Deployment
                tag{"\n"}
                {"\u00a0\u00a0"}--rollback{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}Rollback on
                failure{"\n"}
                {"\u00a0\u00a0"}--timeout &lt;secs&gt;{"\u00a0\u00a0"}Timeout (default: 120)
              </pre>
            </div>
            <div class="rounded-lg overflow-hidden border border-border bg-muted/40">
              <div class="px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wider text-amber-500 border-b border-border flex items-center gap-1.5">
                <span>
                  <Upload class="w-3.5 h-3.5 inline" />
                </span>{" "}
                Output: TypeScript completion
              </div>
              <div
                class="[&_pre]:m-0 [&_pre]:p-3.5 [&_pre]:text-xs [&_pre]:leading-7 [&_pre]:w-max overflow-x-auto"
                // oxlint-disable-next-line solid/no-innerhtml
                innerHTML={aiDemoHtml}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section id="code" class="px-6 py-16 max-w-275 mx-auto">
        <div class="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
          Real Code
        </div>
        <h2 class="text-[30px] font-bold tracking-[-0.02em] mb-3">See it in TypeScript</h2>
        <p class="text-sm text-muted-foreground max-w-150 mb-10 leading-7">
          Actual completion scripts from the community. Each file powers completions across all 5
          shells.
        </p>

        <div class="flex gap-1 p-1 bg-muted/40 border border-border rounded-lg w-max mb-4">
          <button
            onClick={() => setCodeTab("bun")}
            class={cn(
              "px-4 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer",
              codeTab() === "bun"
                ? "bg-amber-500 text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5",
            )}
          >
            bun
          </button>
          <button
            onClick={() => setCodeTab("git")}
            class={cn(
              "px-4 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer",
              codeTab() === "git"
                ? "bg-amber-500 text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5",
            )}
          >
            git
          </button>
          <button
            onClick={() => setCodeTab("npm")}
            class={cn(
              "px-4 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer",
              codeTab() === "npm"
                ? "bg-amber-500 text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5",
            )}
          >
            npm
          </button>
        </div>
        <div
          class="overflow-auto rounded-lg border border-border bg-muted/40 [&_pre]:m-0 [&_pre]:p-4 [&_pre]:text-xs [&_pre]:leading-7"
          // oxlint-disable-next-line solid/no-innerhtml
          innerHTML={
            {
              bun: bunCodeHtml,
              git: gitCodeHtml,
              npm: npmCodeHtml,
            }[codeTab()]
          }
        />

        <div class="mt-4 p-4 rounded-lg border border-border bg-muted/40 font-mono text-xs leading-7 text-muted-foreground">
          <span class="text-amber-500">$</span> bun run{" "}
          <span class="inline-block w-1 h-3.5 bg-amber-500 align-text-bottom ml-0.5 animate-pulse" />
          <br />
          <span class="text-amber-500">
            dev&nbsp;&nbsp;&nbsp;build&nbsp;&nbsp;&nbsp;test&nbsp;&nbsp;&nbsp;lint&nbsp;&nbsp;&nbsp;scripts/start.ts
          </span>
        </div>
      </section>

      {/* Developer Experience (DX) */}
      <section id="dx" class="px-6 py-16 max-w-275 mx-auto border-t border-border/50">
        <div class="grid grid-cols-[1fr_1fr] gap-10 items-center max-md:grid-cols-1">
          <div class="order-2 md:order-1">
            <div class="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
              Developer Experience
            </div>
            <h2 class="text-[30px] font-bold tracking-[-0.02em] mb-3">Vite-like hot reloading</h2>
            <p class="text-sm text-muted-foreground leading-7 mb-5">
              Writing shell completions used to mean constantly restarting your shell or re-sourcing
              scripts. Not anymore. Sugg provides a sub-second feedback loop for CLI authors.
            </p>
            <div class="p-3 mb-6 rounded-lg border border-border bg-muted/40 font-mono text-xs text-muted-foreground inline-block">
              <span class="text-amber-500">$</span> sugg dev watch
            </div>
            <ul class="space-y-2.5">
              <li class="flex items-center gap-2 text-sm text-muted-foreground">
                <span class="text-amber-500 font-bold">▸</span>{" "}
                <span class="text-foreground font-medium">~200ms</span> recompile on every keystroke
              </li>
              <li class="flex items-center gap-2 text-sm text-muted-foreground">
                <span class="text-amber-500 font-bold">▸</span> Auto-updates the zero-copy memory
                map
              </li>
              <li class="flex items-center gap-2 text-sm text-muted-foreground">
                <span class="text-amber-500 font-bold">▸</span> Instantly available in your active
                shell (no reload needed)
              </li>
            </ul>
          </div>

          <div class="order-1 md:order-2">
            <DemoTerminal
              class="w-full h-56 overflow-hidden shadow-2xl"
              title="sugg — watch"
              lines={[
                { type: "typing", text: "$ sugg dev watch" },
                { type: "span", text: "➜ Watching for file changes...", class: "text-sky-400" },
                {
                  type: "span",
                  text: "✓ File saved: src/index.ts",
                  class: "text-muted-foreground",
                },
                {
                  type: "span",
                  text: "✓ Compiled QuickJS bytecode    185ms",
                  class: "text-muted-foreground",
                },
                {
                  type: "span",
                  text: "✓ Zero-copy cache updated",
                  class: "text-muted-foreground",
                },
                {
                  type: "span",
                  text: "➜ Ready to test. Try pressing TAB.",
                  class: "text-amber-500",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" class="px-6 py-20 max-w-275 mx-auto relative">
        <div class="absolute inset-0 bg-amber-500/5 blur-[100px] -z-10 rounded-full w-3/4 mx-auto opacity-50" />

        <div class="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2 text-center">
          Use Cases
        </div>
        <h2 class="text-[30px] font-bold tracking-[-0.02em] mb-4 text-center">
          From DevOps to CLI authors
        </h2>
        <p class="text-sm text-muted-foreground max-w-150 mx-auto text-center mb-12 leading-relaxed">
          Real scenarios where Sugg shines. Built to handle complex environments and massive
          monorepos.
        </p>

        <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
          <Card class="group relative overflow-hidden bg-linear-to-b from-card to-black/20 hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all flex flex-col">
            <CardContent class="p-6 flex flex-col h-full">
              <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-colors">
                <Server class="w-5 h-5 text-muted-foreground group-hover:text-amber-500 transition-colors" />
              </div>
              <h4 class="text-sm font-semibold mb-2">DevOps Daily</h4>
              <p class="text-sm text-muted-foreground leading-relaxed mb-6">
                kubectl, docker, gh — jump between complex tools without memorizing flags.
              </p>
              <div class="mt-auto p-3 rounded-lg bg-black/40 border border-white/5 font-mono text-[11px] flex items-center gap-2">
                <span class="text-emerald-400">$</span>
                <span class="text-gray-300">kubectl logs</span>
                <kbd class="px-1.5 py-0.5 rounded bg-white/10 border border-white/20 text-gray-400 font-sans shadow-sm text-[10px]">
                  TAB
                </kbd>
                <span class="text-amber-400 ml-auto animate-pulse">pod-name-xyz</span>
              </div>
            </CardContent>
          </Card>

          <Card class="group relative overflow-hidden bg-linear-to-b from-card to-black/20 hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all flex flex-col">
            <CardContent class="p-6 flex flex-col h-full">
              <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-colors">
                <Boxes class="w-5 h-5 text-muted-foreground group-hover:text-amber-500 transition-colors" />
              </div>
              <h4 class="text-sm font-semibold mb-2">Monorepo Management</h4>
              <p class="text-sm text-muted-foreground leading-relaxed mb-6">
                Dynamically suggest workspace packages and local script names based on project
                context.
              </p>
              <div class="mt-auto p-3 rounded-lg bg-black/40 border border-white/5 font-mono text-[11px] flex items-center gap-2">
                <span class="text-emerald-400">$</span>
                <span class="text-gray-300">pnpm --filter</span>
                <kbd class="px-1.5 py-0.5 rounded bg-white/10 border border-white/20 text-gray-400 font-sans shadow-sm text-[10px]">
                  TAB
                </kbd>
                <span class="text-amber-400 ml-auto animate-pulse">@scope/pkg-a</span>
              </div>
            </CardContent>
          </Card>

          <Card class="group relative overflow-hidden bg-linear-to-b from-card to-black/20 hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all flex flex-col">
            <CardContent class="p-6 flex flex-col h-full">
              <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-colors">
                <Cloud class="w-5 h-5 text-muted-foreground group-hover:text-amber-500 transition-colors" />
              </div>
              <h4 class="text-sm font-semibold mb-2">Cloud CLIs</h4>
              <p class="text-sm text-muted-foreground leading-relaxed mb-6">
                Navigate complex resource hierarchies with Sugg's cache-backed API calls.
              </p>
              <div class="mt-auto p-3 rounded-lg bg-black/40 border border-white/5 font-mono text-[11px] flex items-center gap-2">
                <span class="text-emerald-400">$</span>
                <span class="text-gray-300">aws s3 ls s3://</span>
                <kbd class="px-1.5 py-0.5 rounded bg-white/10 border border-white/20 text-gray-400 font-sans shadow-sm text-[10px]">
                  TAB
                </kbd>
                <span class="text-amber-400 ml-auto animate-pulse">my-bucket</span>
              </div>
            </CardContent>
          </Card>

          <Card class="group relative overflow-hidden bg-linear-to-b from-card to-black/20 hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all flex flex-col">
            <CardContent class="p-6 flex flex-col h-full">
              <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-colors">
                <TerminalSquare class="w-5 h-5 text-muted-foreground group-hover:text-amber-500 transition-colors" />
              </div>
              <h4 class="text-sm font-semibold mb-2">CLI Tool Authors</h4>
              <p class="text-sm text-muted-foreground leading-relaxed mb-6">
                Ship one TypeScript file with your package. Users get 5-shell support on day one.
              </p>
              <div class="mt-auto p-3 rounded-lg bg-black/40 border border-white/5 font-mono text-[11px] flex items-center gap-2">
                <span class="text-emerald-400">$</span>
                <span class="text-gray-300">my-cli</span>
                <kbd class="px-1.5 py-0.5 rounded bg-white/10 border border-white/20 text-gray-400 font-sans shadow-sm text-[10px]">
                  TAB
                </kbd>
                <span class="text-amber-400 ml-auto animate-pulse">deploy</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" class="px-6 py-16 max-w-275 mx-auto">
        <div class="grid grid-cols-[1fr_1fr] gap-8 items-center max-md:grid-cols-1">
          <DemoTerminal
            class="w-full h-53.5 overflow-hidden"
            lines={[
              { type: "typing", text: "$ bun run " },
              {
                type: "span",
                text: "dev\u00a0\u00a0\u00a0build\u00a0\u00a0\u00a0test\u00a0\u00a0\u00a0lint",
                class: "text-amber-500",
              },
              { type: "typing", text: "$ git checkout " },
              {
                type: "span",
                text: "main\u00a0\u00a0\u00a0develop\u00a0\u00a0\u00a0feature/*\u00a0\u00a0\u00a0release/*",
                class: "text-amber-500",
              },
              { type: "typing", text: "$ docker ps --" },
              {
                type: "span",
                text: "--all\u00a0\u00a0--format\u00a0\u00a0--quiet\u00a0\u00a0--no-trunc",
                class: "text-amber-500",
              },
            ]}
          />
          <div>
            <h3 class="text-lg font-semibold mb-2">Dynamic completions in action</h3>
            <p class="text-sm text-muted-foreground leading-7">
              Your completion functions run as precompiled QuickJS bytecode. They access the full
              command context — prefix, path, options, positional args.
            </p>
            <ul class="mt-3 space-y-2">
              <li class="flex items-center gap-2 text-xs text-muted-foreground">
                <span class="text-amber-500 font-bold">▸</span> Async callbacks with execFile,
                scanPath, readJson
              </li>
              <li class="flex items-center gap-2 text-xs text-muted-foreground">
                <span class="text-amber-500 font-bold">▸</span> Inline UI logging with ui.log,
                ui.warn
              </li>
              <li class="flex items-center gap-2 text-xs text-muted-foreground">
                <span class="text-amber-500 font-bold">▸</span> Alias resolution — alias g=git just
                works
              </li>
              <li class="flex items-center gap-2 text-xs text-muted-foreground">
                <span class="text-amber-500 font-bold">▸</span> AI-assisted schema from --help
                output
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Scripts */}
      <section id="scripts" class="px-6 py-16 max-w-275 mx-auto">
        <div class="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
          Completion Scripts
        </div>
        <h2 class="text-[30px] font-bold tracking-[-0.02em] mb-3">Ready-to-use completions</h2>
        <p class="text-sm text-muted-foreground max-w-150 mb-10 leading-7">
          Community-maintained scripts. Each is audited for API usage and works across all 5 shells.
        </p>
        <div class="flex flex-wrap gap-2">
          <For each={scripts}>
            {(s) => (
              <a
                href={`#/scripts/${s.stem}`}
                class="px-3.5 py-1.5 rounded-md border border-border text-xs font-medium text-muted-foreground bg-card hover:border-amber-500 hover:text-amber-500 transition-all no-underline"
              >
                {s.title}
              </a>
            )}
          </For>
          <a
            href="#/scripts"
            class="px-3.5 py-1.5 rounded-md border border-amber-500 text-xs font-medium text-amber-500 bg-card transition-all no-underline"
          >
            Browse all →
          </a>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" class="px-6 py-16 max-w-275 mx-auto">
        <div class="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
          Decision
        </div>
        <h2 class="text-[30px] font-bold tracking-[-0.02em] mb-3">Why Sugg vs the alternatives</h2>
        <p class="text-sm text-muted-foreground max-w-150 mb-10 leading-7">
          The shell completion landscape has several options. Here's how Sugg stacks up.
        </p>
        <div class="overflow-x-auto">
          <table class="w-full text-xs border-collapse min-w-160">
            <thead>
              <tr class="text-muted-foreground uppercase tracking-wider text-[11px]">
                <th class="text-left p-3 border-b border-border font-semibold text-foreground" />
                <th class="text-left p-3 border-b font-semibold bg-amber-500/5 border-l border-r border-amber-500/20">
                  Sugg
                </th>
                <th class="text-left p-3 border-b border-border font-semibold">Carapace</th>
                <th class="text-left p-3 border-b border-border font-semibold">Fig</th>
                <th class="text-left p-3 border-b border-border font-semibold">Warp</th>
                <th class="text-left p-3 border-b border-border font-semibold">Native</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-border">
                <td class="p-3 font-medium">Script language</td>
                <td class="p-3 text-muted-foreground bg-amber-500/5 border-l border-r border-amber-500/20">
                  TypeScript
                </td>
                <td class="p-3 text-muted-foreground">Go</td>
                <td class="p-3 text-muted-foreground">JS (prop.)</td>
                <td class="p-3 text-muted-foreground">Rust (prop.)</td>
                <td class="p-3 text-muted-foreground">Shell-specific</td>
              </tr>
              <tr class="border-b border-border">
                <td class="p-3 font-medium">Cross-shell</td>
                <td class="p-3 bg-amber-500/5 border-l border-r border-amber-500/20">
                  <Badge variant="success">✅ 5 shells</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="success">✅ 5 shells</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="error">❌ zsh/bash</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="error">❌ Warp only</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="error">❌ One shell</Badge>
                </td>
              </tr>
              <tr class="border-b border-border">
                <td class="p-3 font-medium">Latency model</td>
                <td class="p-3 text-muted-foreground bg-amber-500/5 border-l border-r border-amber-500/20">
                  mmap zero-copy
                </td>
                <td class="p-3 text-muted-foreground">Go native</td>
                <td class="p-3 text-muted-foreground">HTTP IPC</td>
                <td class="p-3 text-muted-foreground">Process IPC</td>
                <td class="p-3 text-muted-foreground">Native</td>
              </tr>
              <tr class="border-b border-border">
                <td class="p-3 font-medium">Dynamic callbacks</td>
                <td class="p-3 bg-amber-500/5 border-l border-r border-amber-500/20">
                  <Badge variant="success">✅ QuickJS</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="warning">⚠️ Go plugins</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="success">✅ Fig spec</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="error">❌ Not ext.</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="warning">⚠️ Shell funcs</Badge>
                </td>
              </tr>
              <tr class="border-b border-border">
                <td class="p-3 font-medium">Context cache</td>
                <td class="p-3 bg-amber-500/5 border-l border-r border-amber-500/20">
                  <Badge variant="success">✅ Built-in</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="error">❌ None</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="success">✅ Cloud</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="error">❌ None</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="error">❌ None</Badge>
                </td>
              </tr>
              <tr class="border-b border-border">
                <td class="p-3 font-medium">AI workflow</td>
                <td class="p-3 bg-amber-500/5 border-l border-r border-amber-500/20">
                  <Badge variant="success">✅ --help→LLM</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="error">❌ None</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="success">✅ Fig AI</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="error">❌ None</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="error">❌ None</Badge>
                </td>
              </tr>
              <tr class="border-b border-border">
                <td class="p-3 font-medium">Offline</td>
                <td class="p-3 bg-amber-500/5 border-l border-r border-amber-500/20">
                  <Badge variant="success">✅ Fully</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="success">✅ Fully</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="error">❌ Required</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="success">✅ Fully</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="success">✅ Built-in</Badge>
                </td>
              </tr>
              <tr class="bg-accent/5">
                <td class="p-3 font-medium text-amber-500">Open source</td>
                <td class="p-3 bg-amber-500/5 border-l border-r border-amber-500/20">
                  <Badge variant="success">✅ MIT</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="success">✅ MIT</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="warning">⚠️ Partial</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="error">❌ Prop.</Badge>
                </td>
                <td class="p-3">
                  <Badge variant="success">✅ Built-in</Badge>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Get Involved */}
      <section id="get-involved" class="px-6 py-16 max-w-275 mx-auto">
        <div class="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
          Next Steps
        </div>
        <h2 class="text-[30px] font-bold tracking-[-0.02em] mb-3">Start using Sugg in 5 minutes</h2>
        <p class="text-sm text-muted-foreground max-w-150 mb-10 leading-7">
          You've seen what it can do. Here's what to do next.
        </p>
        <div class="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          <a
            href="https://github.com/getsugg/sugg#quick-start"
            target="_blank"
            class="hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all no-underline"
          >
            <Card class="relative overflow-hidden hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all h-full">
              <CardContent class="p-7">
                <h4 class="text-sm font-semibold mb-1.5 text-foreground">Read the Quick Start</h4>
                <p class="text-sm text-muted-foreground leading-relaxed">
                  Install Sugg, add one line to your shell config, and reload. Completions working
                  in under 2 minutes.
                </p>
              </CardContent>
            </Card>
          </a>
          <a
            href="https://github.com/getsugg/sugg-completions"
            target="_blank"
            class="hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all no-underline"
          >
            <Card class="relative overflow-hidden hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all h-full">
              <CardContent class="p-7">
                <h4 class="text-sm font-semibold mb-1.5 text-foreground">
                  Browse Completion Scripts
                </h4>
                <p class="text-sm text-muted-foreground leading-relaxed">
                  Community scripts for bun, git, npm, scoop, winget, vp, and sugg. Browse and
                  audit.
                </p>
              </CardContent>
            </Card>
          </a>
          <a
            href="https://github.com/getsugg/sugg/blob/main/CONTRIBUTING.md"
            target="_blank"
            class="hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all no-underline"
          >
            <Card class="relative overflow-hidden hover:border-amber-500 hover:shadow-[0_0_32px_rgba(245,158,11,0.12)] transition-all h-full">
              <CardContent class="p-7">
                <h4 class="text-sm font-semibold mb-1.5 text-foreground">Write Your Own Script</h4>
                <p class="text-sm text-muted-foreground leading-relaxed">
                  Author a completion for your CLI. TypeScript + one file = cross-shell completions
                  for every user.
                </p>
              </CardContent>
            </Card>
          </a>
        </div>
      </section>

      {/* Install */}
      <section id="install" class="px-6 py-16 max-w-275 mx-auto">
        <div class="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
          Get Started
        </div>
        <h2 class="text-[30px] font-bold tracking-[-0.02em] mb-3">
          One-line install, zero dependencies
        </h2>
        <p class="text-sm text-muted-foreground max-w-150 mb-10 leading-7">
          Completion binary under 2.5 MB. Works on Linux, macOS, and Windows.
        </p>
        <div class="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <Card>
            <CardContent class="p-5">
              <div class="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                Recommended
              </div>
              <div class="font-mono text-xs p-2.5 flex items-center justify-between overflow-hidden">
                <span class="min-w-0">
                  <span class="text-emerald-400">curl</span>{" "}
                  <span class="text-amber-400">-fsSL</span>{" "}
                  <span class="text-sky-400 break-all">
                    https://raw.githubusercontent.com/getsugg/sugg/main/scripts/install.sh
                  </span>{" "}
                  <span class="text-muted-foreground">|</span>{" "}
                  <span class="text-emerald-400">bash</span>
                </span>
                <button
                  class="bg-transparent border-none text-muted-foreground/50 hover:text-amber-500 cursor-pointer text-xs transition-colors ml-2 shrink-0"
                  onClick={() =>
                    copyWithFeedback(
                      "curl -fsSL https://raw.githubusercontent.com/getsugg/sugg/main/scripts/install.sh | bash",
                      1,
                    )
                  }
                >
                  {copiedIdx() === 1 ? (
                    <Check class="w-3.5 h-3.5 text-success-foreground" />
                  ) : (
                    <ClipboardCopy class="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="p-5">
              <div class="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                Windows
              </div>
              <div class="font-mono text-xs p-2.5 flex items-center justify-between overflow-hidden">
                <span class="min-w-0">
                  <span class="text-emerald-400">irm</span>{" "}
                  <span class="text-sky-400 break-all">
                    https://raw.githubusercontent.com/getsugg/sugg/main/scripts/install.sh
                  </span>{" "}
                  <span class="text-muted-foreground">|</span>{" "}
                  <span class="text-emerald-400">iex</span>
                </span>
                <button
                  class="bg-transparent border-none text-muted-foreground/50 hover:text-amber-500 cursor-pointer text-xs transition-colors ml-2 shrink-0"
                  onClick={() =>
                    copyWithFeedback(
                      "irm https://raw.githubusercontent.com/getsugg/sugg/main/scripts/install.ps1 | iex",
                      2,
                    )
                  }
                >
                  {copiedIdx() === 2 ? (
                    <Check class="w-3.5 h-3.5 text-success-foreground" />
                  ) : (
                    <ClipboardCopy class="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="p-5">
              <div class="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                Build from source
              </div>
              <div class="font-mono text-xs p-2.5 flex items-center justify-between">
                <span>
                  <span class="text-emerald-400">cargo</span>{" "}
                  <span class="text-foreground">run</span> <span class="text-amber-400">-p</span>{" "}
                  <span class="text-sky-300">sugg-deploy</span>{" "}
                  <span class="text-amber-400">--release</span>
                </span>
                <button
                  class="bg-transparent border-none text-muted-foreground/50 hover:text-amber-500 cursor-pointer text-xs transition-colors ml-2 shrink-0"
                  onClick={() =>
                    copyWithFeedback("cargo run -p sugg-deploy --release -- --add-path", 3)
                  }
                >
                  {copiedIdx() === 3 ? (
                    <Check class="w-3.5 h-3.5 text-success-foreground" />
                  ) : (
                    <ClipboardCopy class="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="p-5">
              <div class="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                Quick start
              </div>
              <div class="font-mono text-xs p-2.5 flex items-center justify-between">
                <span>
                  <span class="text-emerald-400">sugg</span>{" "}
                  <span class="text-foreground">init</span> <span class="text-sky-300">zsh</span>{" "}
                  <span class="text-muted-foreground">&&</span>{" "}
                  <span class="text-emerald-400">sugg</span>{" "}
                  <span class="text-foreground">reload</span>
                </span>
                <button
                  class="bg-transparent border-none text-muted-foreground/50 hover:text-amber-500 cursor-pointer text-xs transition-colors ml-2 shrink-0"
                  onClick={() => copyWithFeedback("sugg init zsh && sugg reload", 4)}
                >
                  {copiedIdx() === 4 ? (
                    <Check class="w-3.5 h-3.5 text-success-foreground" />
                  ) : (
                    <ClipboardCopy class="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div class="grid grid-cols-2 gap-2 mt-5 max-md:grid-cols-1">
          <div class="p-2.5 rounded-md font-mono text-[11px] leading-7">
            <span class="text-sky-300 font-semibold">Zsh</span>{" "}
            <span class="text-emerald-400">eval</span>{" "}
            <span class="text-amber-300">"$(sugg init zsh)"</span>
          </div>
          <div class="p-2.5 rounded-md font-mono text-[11px] leading-7">
            <span class="text-sky-300 font-semibold">Fish</span>{" "}
            <span class="text-emerald-400">sugg</span> <span class="text-foreground">init</span>{" "}
            <span class="text-sky-300">fish</span> <span class="text-muted-foreground">|</span>{" "}
            <span class="text-emerald-400">source</span>
          </div>
          <div class="p-2.5 rounded-md font-mono text-[11px] leading-7">
            <span class="text-sky-300 font-semibold">Bash</span>{" "}
            <span class="text-emerald-400">eval</span>{" "}
            <span class="text-amber-300">"$(sugg init bash)"</span>
          </div>
          <div class="p-2.5 rounded-md font-mono text-[11px] leading-7">
            <span class="text-sky-300 font-semibold">Nushell</span>{" "}
            <span class="text-emerald-400">sugg</span> <span class="text-foreground">init</span>{" "}
            <span class="text-sky-300">nushell</span> <span class="text-muted-foreground">|</span>{" "}
            <span class="text-emerald-400">save</span>{" "}
            <span class="text-muted-foreground">...</span>
          </div>
          <div class="p-2.5 rounded-md font-mono text-[11px] leading-7">
            <span class="text-sky-300 font-semibold">PowerShell</span>{" "}
            <span class="text-emerald-400">Invoke-Expression</span>{" "}
            <span class="text-amber-300">(sugg init powershell)</span>
          </div>
        </div>
        <div class="mt-4 p-3 rounded-lg border border-border bg-card text-xs text-muted-foreground flex items-center gap-2">
          <Lightbulb class="w-4 h-4 shrink-0" /> Developing a completion script? Run{" "}
          <span class="font-mono text-amber-500">sugg dev watch</span> — saves on every keystroke,
          recompiles in ~200ms.
        </div>
        <div class="mt-5 text-center text-xs text-muted-foreground">
          Already installed? →{" "}
          <a
            href="https://github.com/getsugg/sugg#quick-start"
            class="text-amber-500 no-underline hover:underline"
          >
            Quick Start Guide
          </a>{" "}
          ·{" "}
          <a
            href="https://github.com/getsugg/sugg-completions"
            class="text-amber-500 no-underline hover:underline"
          >
            Browse Scripts
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" class="px-6 py-16 max-w-275 mx-auto">
        <div class="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">FAQ</div>
        <h2 class="text-[30px] font-bold tracking-[-0.02em] mb-3">Common questions</h2>
        <p class="text-sm text-muted-foreground max-w-150 mb-10 leading-7">
          Everything you need to know before getting started.
        </p>
        <Accordion multiple={false} collapsible class="space-y-2">
          <AccordionItem
            value="fig"
            class="rounded-lg border border-border bg-card overflow-hidden"
          >
            <AccordionTrigger class="px-3.5 text-sm font-medium">
              How is Sugg different from Fig?
            </AccordionTrigger>
            <AccordionContent class="px-3.5 pb-3.5 text-xs text-muted-foreground leading-7">
              Fig is a closed-source desktop app requiring cloud services and only supports
              zsh/bash. Sugg is fully MIT, 100% offline, supports 5 shells, and uses zero-copy mmap.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="startup"
            class="rounded-lg border border-border bg-card overflow-hidden"
          >
            <AccordionTrigger class="px-3.5 text-sm font-medium">
              Does Sugg slow down my shell startup?
            </AccordionTrigger>
            <AccordionContent class="px-3.5 pb-3.5 text-xs text-muted-foreground leading-7">
              No. Completion data is loaded via mmap on demand. Adding eval "$(sugg init zsh)" adds
              ~5ms to shell init. Completions are zero-copy under 50µs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="language"
            class="rounded-lg border border-border bg-card overflow-hidden"
          >
            <AccordionTrigger class="px-3.5 text-sm font-medium">
              Do I need to learn a new language?
            </AccordionTrigger>
            <AccordionContent class="px-3.5 pb-3.5 text-xs text-muted-foreground leading-7">
              No. Standard TypeScript with async/await. The createCompletion API is a simple config
              with optional dynamic function callbacks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="production"
            class="rounded-lg border border-border bg-card overflow-hidden"
          >
            <AccordionTrigger class="px-3.5 text-sm font-medium">
              Is Sugg safe for production?
            </AccordionTrigger>
            <AccordionContent class="px-3.5 pb-3.5 text-xs text-muted-foreground leading-7">
              Yes. Dynamic functions run in a QuickJS sandbox — no fork, no eval. All I/O goes
              through explicit APIs with no shell interpolation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="contribute"
            class="rounded-lg border border-border bg-card overflow-hidden"
          >
            <AccordionTrigger class="px-3.5 text-sm font-medium">
              How do I contribute a script?
            </AccordionTrigger>
            <AccordionContent class="px-3.5 pb-3.5 text-xs text-muted-foreground leading-7">
              Submit a PR to{" "}
              <a href="https://github.com/getsugg/sugg-completions" class="text-amber-500">
                sugg-completions
              </a>
              . Each script goes through automated security audit. Once merged, available to all
              users.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Footer */}
      <footer class="border-t border-border px-6 py-8 max-w-275 mx-auto flex items-center justify-between text-xs text-muted-foreground max-md:flex-col max-md:gap-4">
        <span>© 2026 Sugg · MIT License</span>
        <div class="flex gap-4">
          <a
            href="https://github.com/getsugg/sugg"
            class="text-muted-foreground hover:text-amber-500 no-underline"
          >
            GitHub
          </a>
          <a
            href="https://github.com/getsugg/sugg-completions"
            class="text-muted-foreground hover:text-amber-500 no-underline"
          >
            Scripts
          </a>
          <a
            href="https://github.com/getsugg/sugg/blob/main/README.md"
            class="text-muted-foreground hover:text-amber-500 no-underline"
          >
            Docs
          </a>
        </div>
      </footer>
    </div>
  );
}
