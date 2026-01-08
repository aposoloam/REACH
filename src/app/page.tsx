import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-indigo-600">
              ReachMicro
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="#faq" className="text-gray-600 hover:text-gray-900">
                FAQ
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost">Sign in</Button>
              </Link>
              <Link href="/register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="info" className="mb-4">
            The affordable influencer outreach tool
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
            Find and connect with micro-influencers{" "}
            <span className="text-indigo-600">without the enterprise price tag</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover niche creators, manage outreach campaigns, and grow your brand.
            Starting at just $29/month — not $2,000.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="text-base">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" size="lg" className="text-base">
                See How It Works
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-indigo-600">10K+</p>
              <p className="text-gray-600">Influencers indexed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-600">50+</p>
              <p className="text-gray-600">Niches covered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-600">3</p>
              <p className="text-gray-600">Platforms supported</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-600">98%</p>
              <p className="text-gray-600">Customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need to run influencer campaigns
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple tools for small brands that want to work with micro-influencers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg w-fit mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Smart Discovery
              </h3>
              <p className="text-gray-600">
                Find micro-influencers by niche, location, engagement rate, and follower
                count. Filter by TikTok, Instagram, or YouTube.
              </p>
            </Card>

            <Card className="p-6">
              <div className="p-3 bg-green-100 text-green-600 rounded-lg w-fit mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Curated Lists
              </h3>
              <p className="text-gray-600">
                Organize influencers into custom lists. Add notes, track status, and
                collaborate with your team.
              </p>
            </Card>

            <Card className="p-6">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-lg w-fit mb-4">
                <Megaphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Campaign Management
              </h3>
              <p className="text-gray-600">
                Create outreach campaigns with message templates. Track who you&apos;ve
                contacted and their response status.
              </p>
            </Card>

            <Card className="p-6">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-lg w-fit mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Analytics Dashboard
              </h3>
              <p className="text-gray-600">
                See response rates, conversion metrics, and campaign performance at a
                glance. Make data-driven decisions.
              </p>
            </Card>

            <Card className="p-6">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quick Outreach
              </h3>
              <p className="text-gray-600">
                Generate personalized messages with templates. Copy to clipboard and
                send via DM. No complicated integrations.
              </p>
            </Card>

            <Card className="p-6">
              <div className="p-3 bg-pink-100 text-pink-600 rounded-lg w-fit mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Multi-Platform
              </h3>
              <p className="text-gray-600">
                Search across TikTok, Instagram, and YouTube from one dashboard. Find
                creators wherever your audience is.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No hidden fees. No contracts. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Plan */}
            <Card className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
                <p className="text-gray-600 mt-1">For solo entrepreneurs</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$29</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>100 influencer searches/month</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>3 active campaigns</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>5 influencer lists</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Email support</span>
                </li>
              </ul>
              <Link href="/register">
                <Button variant="outline" className="w-full">
                  Start Free Trial
                </Button>
              </Link>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 border-2 border-indigo-500 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white">
                Most Popular
              </Badge>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
                <p className="text-gray-600 mt-1">For growing brands</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$79</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Unlimited searches</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Unlimited campaigns</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Unlimited lists</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Advanced analytics & reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Team collaboration (up to 3)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>API access</span>
                </li>
              </ul>
              <Link href="/register">
                <Button className="w-full">Start Free Trial</Button>
              </Link>
            </Card>
          </div>

          <p className="text-center text-gray-600 mt-8">
            Need a custom plan for your agency?{" "}
            <a href="mailto:hello@reachmicro.com" className="text-indigo-600 hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                How is this different from other influencer platforms?
              </h3>
              <p className="text-gray-600">
                Unlike enterprise tools that cost $15K+/year, ReachMicro is built for
                small brands that want to work with micro-influencers. Simple features,
                simple pricing.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                What platforms do you support?
              </h3>
              <p className="text-gray-600">
                We currently index influencers from TikTok, Instagram, and YouTube. We&apos;re
                constantly adding more platforms and influencers.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I try before I buy?
              </h3>
              <p className="text-gray-600">
                Yes! We offer a 14-day free trial with full access to all features. No
                credit card required to start.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                How do I contact influencers?
              </h3>
              <p className="text-gray-600">
                ReachMicro helps you find and organize influencers. For outreach, you&apos;ll
                send DMs directly through the platform (TikTok, Instagram, etc). We provide
                message templates to make this quick and easy.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-600">
                Absolutely. No contracts, no commitments. Cancel your subscription anytime
                from your account settings.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to find your perfect influencers?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join hundreds of brands using ReachMicro to grow their business.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
              Start Your Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">ReachMicro</h3>
              <p className="text-gray-400">
                The affordable influencer outreach tool for small brands.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#features" className="hover:text-white">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="#faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="mailto:hello@reachmicro.com" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              &copy; 2026 ReachMicro. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Shield className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 text-sm">Secure payments via Stripe</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
