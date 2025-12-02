import fatCatImage from "@/assets/fat-cat-hero.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Жизнь слишком коротка,
              <br />
              <span className="text-gradient">чтобы не любить котиков</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Пушистые, мягкие, немного толстенькие — они приносят счастье в каждый дом
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Познакомиться ближе 🐾
            </button>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <img
              src={fatCatImage}
              alt="Милый толстый рыжий котик"
              className="relative rounded-2xl shadow-2xl w-full max-w-lg mx-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
