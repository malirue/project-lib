import { Logo } from "@/shared/ui";

/** Прокручивает страницу в начало */
function scrollToTop() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
}

export function Footer() {
  return (
    <footer
      data-slot="footer"
      className="w-full border-t bg-background text-sm text-muted-foreground"
    >
      <div className="mx-auto flex w-full max-w-[var(--content-width)] flex-col items-center gap-1 px-6 py-6">
        <p className="flex items-center">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="ProjectLib — наверх страницы"
            className="cursor-pointer"
          >
            <Logo size="sm" />
          </button>
          в разработке. 2026.
        </p>
        <p>Делается в надежде на светлое будущее</p>
      </div>
    </footer>
  );
}
