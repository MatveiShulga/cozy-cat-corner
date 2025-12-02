const FooterSection = () => {
  return (
    <footer className="py-16 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="text-6xl mb-6">😺</div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Обними кота сегодня!
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Если у вас ещё нет кота — самое время это исправить. А если есть — идите погладьте его прямо сейчас.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <span>Сделано с</span>
          <span className="text-accent animate-pulse-soft">❤️</span>
          <span>и кошачьей шерстью</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
