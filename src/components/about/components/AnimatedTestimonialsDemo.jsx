import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://pic1.imgdb.cn/item/6905fbdc3203f7be00bfa64d.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://pic1.imgdb.cn/item/6905fbda3203f7be00bfa64c.jpg",
    },
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://pic.imgdb.cn/item/674d9979d0e0a243d4dc118f.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://pic.imgdb.cn/item/674d9a1dd0e0a243d4dc11fc.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://pic.imgdb.cn/item/674d9a18d0e0a243d4dc11fb.jpg",
    }
  ];
  return <AnimatedTestimonials
    testimonials={testimonials}
    className="w-[100px]"
    />;
}
