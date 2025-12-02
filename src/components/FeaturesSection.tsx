import { Heart, Sparkles, Coffee } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Безусловная любовь",
    description: "Котики любят вас такими, какие вы есть. Особенно когда у вас есть вкусняшки.",
  },
  {
    icon: Sparkles,
    title: "Антистресс терапия",
    description: "Мурчание кота снижает стресс и давление лучше любых таблеток.",
  },
  {
    icon: Coffee,
    title: "Лучший будильник",
    description: "Кто будет будить вас в 5 утра, требуя завтрак? Только самый преданный друг.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Почему коты — это счастье?
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Научно доказанные факты о пользе пушистых компаньонов
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
