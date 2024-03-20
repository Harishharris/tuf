export default function HeroPage() {
  return (
    <div className="mx-auto flex max-w-[780px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 break-before-all">
      <div className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[-1.1]">
        Save your code snippets.
      </div>
      <p className="mt-2 max-w-[500px] text-center text-lg text-muted-foreground sm:text-xl">
        Save your small, little code snippets that you can refer back when
        needed.
      </p>
    </div>
  );
}
