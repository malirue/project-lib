import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "@storybook/test";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";
import {
  BarChart3,
  DollarSign,
  LayoutDashboard,
  Megaphone,
  MessageCircle,
  Rocket,
  Settings,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const meta = {
  title: "shared/ui/navigation-menu",
  component: NavigationMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description: "Alignment of the menu",
    },
  },
  args: { onValueChange: fn() },
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример с простым меню
export const Default: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[400px] p-4">
              <h3 className="mb-2 font-medium">Getting Started</h3>
              <p className="text-sm text-muted-foreground">
                Learn how to use our platform effectively.
              </p>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] grid-cols-2 gap-2 p-4">
              <NavigationMenuLink href="#intro">
                Introduction
              </NavigationMenuLink>
              <NavigationMenuLink href="#api">API Reference</NavigationMenuLink>
              <NavigationMenuLink href="#guides">Guides</NavigationMenuLink>
              <NavigationMenuLink href="#faq">FAQ</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#community" className="px-3 py-2">
            Community
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

// Пример с множеством пунктов меню
const menuItems = [
  {
    title: "Products",
    href: "#products",
    items: [
      { title: "Analytics", href: "#analytics" },
      { title: "Marketing", href: "#marketing" },
      { title: "E-commerce", href: "#ecommerce" },
    ],
  },
  {
    title: "Solutions",
    href: "#solutions",
    items: [
      { title: "For Startups", href: "#startups" },
      { title: "For Enterprise", href: "#enterprise" },
      { title: "For Education", href: "#education" },
    ],
  },
  {
    title: "Pricing",
    href: "#pricing",
    items: [
      { title: "Free", href: "#free" },
      { title: "Pro", href: "#pro" },
      { title: "Enterprise", href: "#enterprise-plan" },
    ],
  },
];

export const WithMultipleItems: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[300px] p-4">
                <ul className="space-y-2">
                  {item.items.map((subItem) => (
                    <li key={subItem.title}>
                      <NavigationMenuLink href={subItem.href}>
                        {subItem.title}
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <NavigationMenuLink href="#about" className="px-3 py-2">
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

// Пример с выравниванием по центру
export const Centered: Story = {
  render: (args) => (
    <NavigationMenu align="center" {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[300px] p-4">
              <ul className="space-y-2">
                <li>
                  <NavigationMenuLink href="#feature1">
                    Feature 1
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#feature2">
                    Feature 2
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#feature3">
                    Feature 3
                  </NavigationMenuLink>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[300px] p-4">
              <ul className="space-y-2">
                <li>
                  <NavigationMenuLink href="#blog">Blog</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#tutorials">
                    Tutorials
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#support">
                    Support
                  </NavigationMenuLink>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#contact" className="px-3 py-2">
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

// Пример с иконками
export const WithIcons: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Rocket className="mr-2 size-4" />
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] grid-cols-2 gap-2 p-4">
              <NavigationMenuLink
                href="#analytics"
                className="flex items-center gap-2"
              >
                <BarChart3 className="size-4" />
                Analytics
              </NavigationMenuLink>
              <NavigationMenuLink
                href="#marketing"
                className="flex items-center gap-2"
              >
                <Megaphone className="size-4" />
                Marketing
              </NavigationMenuLink>
              <NavigationMenuLink
                href="#automation"
                className="flex items-center gap-2"
              >
                <Zap className="size-4" />
                Automation
              </NavigationMenuLink>
              <NavigationMenuLink
                href="#support"
                className="flex items-center gap-2"
              >
                <MessageCircle className="size-4" />
                Support
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Wrench className="mr-2 size-4" />
            Tools
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[300px] grid-cols-1 gap-2 p-4">
              <NavigationMenuLink
                href="#tool1"
                className="flex items-center gap-2"
              >
                <LayoutDashboard className="size-4" />
                Dashboard
              </NavigationMenuLink>
              <NavigationMenuLink
                href="#tool2"
                className="flex items-center gap-2"
              >
                <Users className="size-4" />
                Team Management
              </NavigationMenuLink>
              <NavigationMenuLink
                href="#tool3"
                className="flex items-center gap-2"
              >
                <Settings className="size-4" />
                Settings
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="#pricing"
            className="flex items-center gap-2 px-3 py-2"
          >
            <DollarSign className="size-4" />
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

// Пример с кастомными стилями
export const CustomStyled: Story = {
  render: (args) => (
    <div className="rounded-lg border bg-card p-4">
      <NavigationMenu {...args}>
        <NavigationMenuList className="gap-2">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              Menu 1
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[250px] p-4">
                <p className="text-sm">Custom styled menu content</p>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="rounded-full border">
              Menu 2
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[250px] p-4">
                <p className="text-sm">Another custom menu</p>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#link"
              className="rounded-full bg-secondary px-4 py-2"
            >
              Direct Link
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};

// Пример с большим контентом
export const WithLargeContent: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>All Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[600px] p-6">
              <h4 className="mb-4 font-medium">Comprehensive Features</h4>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h5 className="mb-2 text-sm font-medium">Core</h5>
                  <ul className="space-y-1 text-sm">
                    <li>Feature A</li>
                    <li>Feature B</li>
                    <li>Feature C</li>
                  </ul>
                </div>
                <div>
                  <h5 className="mb-2 text-sm font-medium">Advanced</h5>
                  <ul className="space-y-1 text-sm">
                    <li>Feature D</li>
                    <li>Feature E</li>
                    <li>Feature F</li>
                  </ul>
                </div>
                <div>
                  <h5 className="mb-2 text-sm font-medium">Premium</h5>
                  <ul className="space-y-1 text-sm">
                    <li>Feature G</li>
                    <li>Feature H</li>
                    <li>Feature I</li>
                  </ul>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#docs" className="px-3 py-2">
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

// Пример с вложенным меню (nested)
export const NestedMenu: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Category</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[400px] p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="mb-2 font-medium">Subcategory 1</h5>
                  <ul className="space-y-1">
                    <li>
                      <NavigationMenuLink href="#item1">
                        Item 1
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#item2">
                        Item 2
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#item3">
                        Item 3
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="mb-2 font-medium">Subcategory 2</h5>
                  <ul className="space-y-1">
                    <li>
                      <NavigationMenuLink href="#item4">
                        Item 4
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#item5">
                        Item 5
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#item6">
                        Item 6
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#simple" className="px-3 py-2">
            Simple Link
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
