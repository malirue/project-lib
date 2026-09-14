import {
  Logo,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/shared/ui";

export type HeaderProps = {
  /** Нужно для отключения на страницах, с которых ещё некуда вести (временно) */
  showNavigation?: boolean;
};

export function Header({ showNavigation = true }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="mx-auto flex h-[var(--header-height)] w-full max-w-[var(--content-width)] items-center gap-8 px-6">
        <a
          href={import.meta.env.BASE_URL}
          aria-label="ProjectLib — на главную"
          className="shrink-0"
        >
          <Logo />
        </a>
        {showNavigation && (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href={import.meta.env.BASE_URL}
                  className="text-sm font-medium hover:text-primary"
                >
                  Блог
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href={`${import.meta.env.BASE_URL}about`}
                  className="text-sm font-medium hover:text-primary"
                >
                  Проекты
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href={`${import.meta.env.BASE_URL}services`}
                  className="text-sm font-medium hover:text-primary"
                >
                  О нас
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </div>
    </header>
  );
}
