import GlobeRenderer from "@/components/globe-renderer";
import { Testimonials } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const pricingCards = [
  {
    name: "Starter Pack",
    desc: "50 Connections",
    price: 99,
    features: [
      "50 Connections",
      "9500+ Channels",
      "International Channels",
      "M3 U8 Playlis",
      "SD /HD /FHD /4K",
    ],
  },
  {
    name: "Combo Pack",
    desc: "100 Connections",
    price: 190,
    features: [
      "100 Connections",
      "9500+ Channels",
      "International Channels",
      "M3 U8 Playlis",
      "SD /HD /FHD /4K",
    ],
  },
  {
    name: "Premium Pack",
    desc: "200 Connections",
    price: 370,
    features: [
      "200 Connections",
      "9500+ Channels",
      "International Channels",
      "M3 U8 Playlis",
      "SD /HD /FHD /4K",
    ],
  },
  {
    name: "Enterprise Pack",
    desc: "500 Connections",
    price: 700,
    features: [
      "500 Connections",
      "9500+ Channels",
      "International Channels",
      "M3 U8 Playlis",
      "SD /HD /FHD /4K",
    ],
  },
];

export default async function Home() {
  return (
    <div className="px-8 space-y-8">
      <section id="" className="h-screen">
        <GlobeRenderer>
          <h2 className="text-center text-xl md:text-4xl font-bold text-foreground">
            We provide best services worldwide
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-muted-foreground max-w-md mt-2 mx-auto">
            How is our we are Best IPTV Service Provier In the World? We
            provides you access to a wide range of live television channels,
            on-demand movies and TV shows, and other content, There are many
            IPTV subscription services available online, and they vary in price,
            features, and quality. Some IPTV subscriptions are legitimate and
            offer high-quality content, while others may be illegal and offer
            pirated content.
          </p>
        </GlobeRenderer>
      </section>

      <section id="pricing">
        <div className="mx-auto">
          <div className="mx-auto max-w-3xl text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-foreground">
              Best Value IPTV Restream Plans
            </h2>
            <p className="mb-5 font-light text-muted-foreground sm:text-xl">
              We provide the best IPTV services worldwide. Our services are
              affordable and offer high-quality content. Our services are
              available in multiple languages and regions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {pricingCards.map((priceCard, index) => (
              <Card
                key={index}
                className="text-center group transition duration-200  hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    {priceCard.name}
                  </CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {priceCard.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center items-baseline mb-8">
                    <span className="mr-2 text-5xl font-extrabold">
                      ${priceCard.price}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-3 text-left">
                    {priceCard.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCheck className="shrink-0 w-5 h-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={"default"}
                    asChild
                    className="w-full hover:-translate-y-0.5 transition duration-200"
                  >
                    <Link
                      href={
                        "https://api.whatsapp.com/send/?phone=923070494471&text=need_iptv_restream&type=phone_number&app_absent=0"
                      }
                    >
                      Order Now
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section id="testimonials">
        <div className="mx-auto max-w-3xl text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-foreground">
              Our Happy Clients :)
            </h2>
            <p className="mb-5 font-light text-muted-foreground sm:text-xl">
              See What People Say About Us.
            </p>
          </div>
        <Testimonials />
      </section>
    </div>
  );
}
