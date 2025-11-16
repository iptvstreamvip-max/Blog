import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/utils";
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
import Link from "next/link";

const Home = () => {
  const services = [
    {
      icon: <Tv className="w-8 h-8" />,
      title: "9500+ Channels",
      description:
        "Access to premium live TV channels from around the world in multiple languages",
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "International Coverage",
      description:
        "Stream content from every corner of the globe with seamless connectivity",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "4K Ultra HD",
      description:
        "Crystal clear streaming quality with SD, HD, FHD, and 4K resolution options",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description:
        "99.9% uptime guarantee with enterprise-grade security and protection",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multiple Connections",
      description:
        "Flexible plans supporting from 50 to 500+ simultaneous connections",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Support",
      description:
        "24/7 dedicated customer support to ensure uninterrupted service",
    },
  ];

  const plans = [
    {
      name: "Starter Pack",
      connections: "50",
      price: "$99",
      features: [
        "50 Connections",
        "9500+ Channels",
        "International Channels",
        "M3U8 Playlist",
        "SD/HD/FHD/4K",
      ],
      popular: false,
    },
    {
      name: "Combo Pack",
      connections: "100",
      price: "$190",
      features: [
        "100 Connections",
        "9500+ Channels",
        "International Channels",
        "M3U8 Playlist",
        "SD/HD/FHD/4K",
      ],
      popular: true,
    },
    {
      name: "Premium Pack",
      connections: "200",
      price: "$370",
      features: [
        "200 Connections",
        "9500+ Channels",
        "International Channels",
        "M3U8 Playlist",
        "SD/HD/FHD/4K",
      ],
      popular: false,
    },
    {
      name: "Enterprise Pack",
      connections: "500",
      price: "$700",
      features: [
        "500 Connections",
        "9500+ Channels",
        "International Channels",
        "M3U8 Playlist",
        "SD/HD/FHD/4K",
      ],
      popular: false,
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-16"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div
            className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full blur-3xl animate-pulse-slow"
            style={{
              background:
                "radial-gradient(circle, hsl(217.2 91.2% 59.8% / 0.3), transparent)",
            }}
          ></div>
          <div
            className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full blur-3xl animate-pulse-slow"
            style={{
              background:
                "radial-gradient(circle, hsl(270.7 91.2% 65.1% / 0.3), transparent)",
              animationDelay: "1s",
            }}
          ></div>
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "14px 24px",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card backdrop-blur-sm border border-primary rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Best IPTV Service Provider Worldwide
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="linear">Stream the World</span>
            <br />
            <span>at Your Fingertips</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Access 9500+ premium channels, on-demand content, and live
            television from across the globe. Crystal-clear 4K streaming with
            enterprise-grade reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant={"default"} asChild>
              <Link href={WHATSAPP_LINK} className="group">
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant={"outline"} className="group">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
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
                className="bg-card backdrop-blur-sm border border-primary rounded-xl p-6 hover:bg-accent transition-all duration-300"
              >
                <div className="text-3xl font-bold gradient-text">
                  {stat.number}
                </div>
                <div className="text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">Our Service</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience premium IPTV streaming with unmatched quality and
              reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-hover bg-card backdrop-blur-sm border border-primary rounded-2xl p-8"
              >
                <div className="w-16 h-16 bg-card backdrop-blur-sm border border-primary rounded-xl flex items-center justify-center mb-6 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Choose Your <span className="gradient-text">Perfect Plan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options to match your streaming needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card backdrop-blur-sm border border-primary rounded-2xl p-8 card-hover ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 btn-primary rounded-full text-sm font-semibold">
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-5xl font-bold gradient-text">
                    {plan.price}
                  </div>
                  <div className="text-muted-foreground mt-2">per month</div>
                  <div className="text-primary font-semibold mt-1">
                    {plan.connections} Connections
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={plan.popular ? "default" : "outline"} asChild>
                  <Link
                    href={WHATSAPP_LINK}
                    className={`block w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? "btn-primary"
                        : "bg-card backdrop-blur-sm border border-primary hover:bg-accent"
                    }`}
                  >
                    Order Now
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                About <span className="gradient-text">Our Platform</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We are the world's leading IPTV restream service provider,
                delivering premium entertainment to millions of users across
                150+ countries. Our platform combines cutting-edge technology
                with an extensive content library to provide an unparalleled
                streaming experience.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over 9500 channels spanning news, sports, entertainment,
                and more, we offer something for everyone. Our infrastructure is
                built on enterprise-grade servers ensuring 99.9% uptime and
                lightning-fast content delivery.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card backdrop-blur-sm border border-primary rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    5+ Years
                  </div>
                  <div className="text-muted-foreground">
                    Industry Experience
                  </div>
                </div>
                <div className="bg-card backdrop-blur-sm border border-primary rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    10K+
                  </div>
                  <div className="text-muted-foreground">Happy Customers</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-card backdrop-blur-sm border border-primary rounded-3xl p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  {[
                    { icon: <Tv />, label: "Live TV" },
                    { icon: <Globe2 />, label: "Global" },
                    { icon: <Zap />, label: "Fast" },
                    { icon: <Shield />, label: "Secure" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-card backdrop-blur-sm border border-primary rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-accent transition-all duration-300 card-hover"
                    >
                      <div className="w-12 h-12 text-primary mb-3">
                        {item.icon}
                      </div>
                      <div className="text-sm font-semibold">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card backdrop-blur-sm border border-primary rounded-3xl p-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Start Streaming?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of satisfied customers enjoying premium IPTV
              service
            </p>
            <Button variant={"default"} asChild>
              <Link
                href={WHATSAPP_LINK}
                className="inline-flex items-center gap-2 px-8 py-4 btn-primary rounded-lg font-semibold text-lg"
              >
                Contact Us on WhatsApp
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
