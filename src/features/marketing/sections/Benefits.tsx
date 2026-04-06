import Image from "next/image";
import { siteContent } from "../constants/content";

export function Benefits() {
  const { benefits } = siteContent;
  const leftBenefits = benefits.items.slice(0, 3);
  const rightBenefits = benefits.items.slice(3);

  const shelfColor = "var(--color-wood-dark)";
  const shelfBaseStyle = { backgroundColor: shelfColor };
  const shelfSupportStyle = { backgroundColor: shelfColor };

  return (
    <section
      id="sobre"
      className="min-h-screen flex items-center py-12 relative overflow-hidden bg-primary"
    >
      <div className="container mx-auto px-4 relative z-10 w-full max-h-screen overflow-y-auto">
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-3 text-primary-foreground">
            {benefits.title}
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            {benefits.subtitle}
          </p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          <div className="space-y-6">
            {leftBenefits.map((benefit) => (
              <div key={benefit.title} className="relative px-2 pb-4">
                <h3 className="text-2xl font-extrabold mb-2 tracking-wide text-primary-foreground">
                  {benefit.title}
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed text-lg pr-3">
                  {benefit.description}
                </p>
                <div
                  className="mt-3 h-[8px] w-full rounded-full border border-foreground/20 shadow-[0_3px_0_rgba(0,0,0,0.25)]"
                  style={shelfBaseStyle}
                />
                <div
                  className="absolute -bottom-[4px] left-4 h-4 w-[5px] rounded-b"
                  style={shelfSupportStyle}
                />
                <div
                  className="absolute -bottom-[4px] right-4 h-4 w-[5px] rounded-b"
                  style={shelfSupportStyle}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="w-[516px] xl:w-[648px]">
              <Image
                src="/sobre/PizzaNoBG.png"
                alt="Pizza no centro da seção sobre"
                width={864}
                height={864}
                className="w-full h-auto object-contain"
                loading="eager"
              />
            </div>
          </div>

          <div className="space-y-6">
            {rightBenefits.map((benefit) => (
              <div key={benefit.title} className="relative px-2 pb-4 text-right">
                <h3 className="text-2xl font-extrabold mb-2 tracking-wide text-primary-foreground">
                  {benefit.title}
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed text-lg pl-3">
                  {benefit.description}
                </p>
                <div
                  className="mt-3 h-[8px] w-full rounded-full border border-foreground/20 shadow-[0_3px_0_rgba(0,0,0,0.25)]"
                  style={shelfBaseStyle}
                />
                <div
                  className="absolute -bottom-[4px] left-4 h-4 w-[5px] rounded-b"
                  style={shelfSupportStyle}
                />
                <div
                  className="absolute -bottom-[4px] right-4 h-4 w-[5px] rounded-b"
                  style={shelfSupportStyle}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 space-y-5 lg:hidden">
          {benefits.items.map((benefit) => (
            <div key={`mobile-${benefit.title}`} className="relative px-2 pb-4">
              <h3 className="text-xl font-extrabold mb-2 text-primary-foreground">
                {benefit.title}
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed text-lg">
                {benefit.description}
              </p>
              <div
                className="mt-3 h-[8px] w-full rounded-full border border-foreground/20 shadow-[0_3px_0_rgba(0,0,0,0.25)]"
                style={shelfBaseStyle}
              />
              <div
                className="absolute -bottom-[4px] left-4 h-4 w-[5px] rounded-b"
                style={shelfSupportStyle}
              />
              <div
                className="absolute -bottom-[4px] right-4 h-4 w-[5px] rounded-b"
                style={shelfSupportStyle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
