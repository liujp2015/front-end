import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
const items = [
  {
    title: "首页",
    href: "/",
  },
];
const HeaderNav: React.FC = () => {
  return (
    <div className="flex flex-auto items-center ml-10 ">
      <NavigationMenu className="hidden md:flex md:flex-auto md:max-w-full md:!justify-start">
        <NavigationMenuList>
          {items.map((item) => (
            <NavigationMenuItem key={item.href}>
              {/* <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  href={item.href}
                  className={cn(navigationMenuTriggerStyle())}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link> */}
              <NavigationMenuLink
                asChild
                className={cn(navigationMenuTriggerStyle())}
              >
                <Link href={item.href}>{item.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default HeaderNav;
