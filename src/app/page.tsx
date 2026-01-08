import Link from "next/link";
import {
  Search,
  Users,
  Megaphone,
  BarChart3,
  Check,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Star,
  Play,
  Sparkles,
  TrendingUp,
  Clock,
  Target,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Gradient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5">
        <div className="absolute inset-0 bg-[#0a0a0f]/80 backdrop-blur-xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">ReachMicro</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/login" className="text-sm text-gray-400 hover:text-white transition-colors px-4 py-2">
                Sign in
              </Link>
              <Link href="/register" className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200" />
                <span className="relative flex items-center gap-2 bg-[#0a0a0f] px-4 py-2 rounded-lg text-sm font-medium">
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-gray-300">Now with TikTok, Instagram & YouTube</span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Find micro-influencers
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                10x faster
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Stop paying $15K/year for enterprise tools. Discover creators, manage campaigns,
              and grow your brand for <span className="text-white font-semibold">$29/month</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/register" className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-200" />
                <span className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 rounded-xl text-lg font-semibold w-full">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <Link
                href="#demo"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold border border-white/10 hover:bg-white/5 transition-colors w-full sm:w-auto"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </div>

            <p className="text-sm text-gray-500">
              No credit card required &bull; 14-day free trial &bull; Cancel anytime
            </p>
          </div>

          {/* Social proof */}
          <div className="mt-20">
            <p className="text-center text-sm text-gray-500 mb-8">TRUSTED BY GROWING BRANDS</p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-50">
              {["Glow Labs", "FitTribe", "Urban Eats", "StyleCo", "TechStart", "GreenBox"].map((brand) => (
                <span key={brand} className="text-xl font-semibold text-gray-400">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10K+", label: "Creators Indexed", icon: Users },
              { value: "50+", label: "Niches Covered", icon: Target },
              { value: "3x", label: "Faster Outreach", icon: Zap },
              { value: "98%", label: "Happy Customers", icon: Star },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-white/10 mb-4">
                  <stat.icon className="w-6 h-6 text-violet-400" />
                </div>
                <p className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything you need to
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                scale influencer marketing
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built for small brands that punch above their weight
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Search,
                title: "Smart Discovery",
                description: "Find micro-influencers by niche, location, engagement rate, and follower count across all platforms.",
                gradient: "from-violet-500 to-purple-500",
              },
              {
                icon: Users,
                title: "Curated Lists",
                description: "Organize influencers into custom lists. Add notes, track status, and collaborate with your team.",
                gradient: "from-emerald-500 to-cyan-500",
              },
              {
                icon: Megaphone,
                title: "Campaign Management",
                description: "Create outreach campaigns with message templates. Track who you've contacted and their responses.",
                gradient: "from-orange-500 to-amber-500",
              },
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                description: "See response rates, conversion metrics, and campaign performance. Make data-driven decisions.",
                gradient: "from-fuchsia-500 to-pink-500",
              },
              {
                icon: Zap,
                title: "Quick Outreach",
                description: "Generate personalized messages with templates. Copy and send via DM in seconds.",
                gradient: "from-cyan-500 to-blue-500",
              },
              {
                icon: Globe,
                title: "Multi-Platform",
                description: "Search across TikTok, Instagram, and YouTube from one dashboard.",
                gradient: "from-rose-500 to-orange-500",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Launch campaigns in
              <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"> minutes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discover",
                description: "Search 10K+ creators by niche, platform, and engagement. Find your perfect match.",
                icon: Search,
              },
              {
                step: "02",
                title: "Organize",
                description: "Add influencers to lists, write notes, and plan your outreach strategy.",
                icon: Users,
              },
              {
                step: "03",
                title: "Reach Out",
                description: "Use templates to send personalized DMs. Track responses and conversions.",
                icon: Megaphone,
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}
                <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                  <span className="text-6xl font-bold text-white/5 absolute top-4 right-6">{item.step}</span>
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-white/10 mb-4">
                    <item.icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
              Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple pricing,
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> serious value</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              No hidden fees. No contracts. Just results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Plan */}
            <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Starter</h3>
                <p className="text-gray-400 mt-1">For solo entrepreneurs</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "100 influencer searches/month",
                  "3 active campaigns",
                  "5 influencer lists",
                  "Basic analytics",
                  "Email support",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className="block w-full py-3 rounded-xl border border-white/10 text-center font-semibold hover:bg-white/5 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="relative">
              <div className="absolute -inset-px bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-2xl" />
              <div className="relative p-8 rounded-2xl bg-[#0a0a0f]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-gray-400 mt-1">For growing brands</p>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-bold">$79</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    "Unlimited searches",
                    "Unlimited campaigns",
                    "Unlimited lists",
                    "Advanced analytics & reports",
                    "Priority support",
                    "Team collaboration (up to 3)",
                    "API access",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-violet-400" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/register" className="relative group block w-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-200" />
                  <span className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 rounded-xl font-semibold w-full">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8">
            Need a custom plan for your agency?{" "}
            <a href="mailto:hello@reachmicro.com" className="text-violet-400 hover:text-violet-300 transition-colors">
              Let&apos;s talk
            </a>
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Loved by
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"> marketers</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "ReachMicro helped us find 50+ micro-influencers in our niche within a week. The ROI has been incredible.",
                author: "Sarah Chen",
                role: "Founder, GlowLabs",
                avatar: "SC",
              },
              {
                quote: "We switched from an enterprise tool and saved $14K/year. The features we actually use are all here.",
                author: "Marcus Johnson",
                role: "Marketing Lead, FitTribe",
                avatar: "MJ",
              },
              {
                quote: "The campaign tracking alone is worth it. I can finally see which influencers actually drive sales.",
                author: "Emily Rodriguez",
                role: "Brand Manager, StyleCo",
                avatar: "ER",
              },
            ].map((testimonial) => (
              <div key={testimonial.author} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-sm font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Questions?
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"> Answers.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How is this different from other influencer platforms?",
                a: "Unlike enterprise tools that cost $15K+/year, ReachMicro is built for small brands that want to work with micro-influencers. Simple features, simple pricing.",
              },
              {
                q: "What platforms do you support?",
                a: "We currently index influencers from TikTok, Instagram, and YouTube. We're constantly adding more platforms and influencers.",
              },
              {
                q: "Can I try before I buy?",
                a: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start.",
              },
              {
                q: "How do I contact influencers?",
                a: "ReachMicro helps you find and organize influencers. For outreach, you'll send DMs directly through the platform (TikTok, Instagram, etc). We provide message templates to make this quick and easy.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Absolutely. No contracts, no commitments. Cancel your subscription anytime from your account settings.",
              },
            ].map((faq) => (
              <div key={faq.q} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLTEwIDMwaDYwdjJoLTYweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNhKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-50" />
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Ready to find your next brand ambassador?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join hundreds of brands using ReachMicro to discover micro-influencers and grow their business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/register"
                  className="flex items-center gap-2 bg-white text-violet-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center"
                >
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <p className="text-sm text-white/60 mt-4">
                No credit card required &bull; Setup in 2 minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold">ReachMicro</span>
              </Link>
              <p className="text-gray-500 max-w-xs">
                The affordable influencer outreach tool for brands that want to work with micro-creators.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-gray-500">
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="mailto:hello@reachmicro.com" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3 text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2026 ReachMicro. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Shield className="w-4 h-4" />
              <span>Secure payments via Stripe</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
