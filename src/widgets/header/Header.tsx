import {
  Logo,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/shared/ui";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="mx-auto flex h-[var(--header-height)] w-full max-w-[var(--content-width)] items-center gap-8 px-6">
        <a href="/" aria-label="ProjectLib — на главную" className="shrink-0">
          <Logo />
        </a>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="text-sm font-medium hover:text-primary"
              >
                Блог
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className="text-sm font-medium hover:text-primary"
              >
                Проекты
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/services"
                className="text-sm font-medium hover:text-primary"
              >
                О нас
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
