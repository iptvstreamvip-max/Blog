import {
  Tv,
  Globe2,
  Zap,
  Shield,
  Users,
  Star,
  Check,
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-linear-to-tl from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-size-[14px_24px]"></div>

      <div
        className={`relative z-10 max-w-7xl mx-auto text-center transition-all duration-1000 opacity-100 translate-y-0`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-300">
            Best IPTV Service Provider Worldwide
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 leading-tight">
          Stream the World
          <br />
          <span className="text-white">at Your Fingertips</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Access 9500+ premium channels, on-demand content, and live television
          from across the globe. Crystal-clear 4K streaming with
          enterprise-grade reliability.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://api.whatsapp.com/send/?phone=923070494471&text=need_iptv_restream&type=phone_number&app_absent=0"
            className="group px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { number: "9500+", label: "Channels" },
            { number: "99.9%", label: "Uptime" },
            { number: "150+", label: "Countries" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-400">
                {stat.number}
              </div>
              <div className="text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
