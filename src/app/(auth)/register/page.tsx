"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Sparkles, ArrowRight, Loader2, Check } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      router.push("/login?registered=true");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-md w-full relative">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">ReachMicro</span>
        </Link>

        {/* Card */}
        <div className="relative">
          <div className="absolute -inset-px bg-gradient-to-b from-cyan-500/10 to-teal-500/10 rounded-2xl" />
          <div className="relative bg-[#0a0a0f]/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">Start your free trial</h1>
              <p className="text-gray-400">No credit card required</p>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {["14-day trial", "Full access", "Cancel anytime"].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-emerald-400" />
                  </div>
                  {benefit}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password (min 8 characters)"
                  minLength={8}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="relative group w-full"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl opacity-40 group-hover:opacity-60 transition duration-200" />
                <span className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 rounded-xl text-white font-semibold w-full">
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Create free account
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </span>
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
