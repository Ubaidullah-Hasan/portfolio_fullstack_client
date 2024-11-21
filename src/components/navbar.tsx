"use client"
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { PiHandshake } from "react-icons/pi";
import { useEffect, useState } from "react";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { TwitterIcon, GithubIcon, DiscordIcon } from "@/src/components/icons";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    console.log(scrollY);
    const handleScrolled = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else if (window.scrollY <= 80) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrolled);

    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);


  return (
    <NextUINavbar
      className={`${isScrolled ? "h-[80px]" : "h-[100px]"} duration-200 bg-transparent  border-b`}
      maxWidth="xl"
      position={isScrolled ? "sticky" : "static"}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        {/* logo start */}
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-semibold font-mono uppercase text-lg text-transparent text-stock-dark">
              Hasan
            </p>
          </NextLink>
        </NavbarBrand>
        {/* logo end */}
      </NavbarContent>

      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        {/* large (1024px +) menu start */}
        <ul className="hidden lg:flex gap-6 justify-start ml-2 ">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-blue-500 data-[active=true]:font-bold font-semibold",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex ">
          <Button
            isExternal
            as={Link}
            className="text-sm border border-black rounded-xl bg-transparent font-bold hover:bg-blue-800 text-black hover:text-white"
            endContent={
              <PiHandshake
                className="duration-100 hover:text-white"
                size={20}
              />
            }
            href={siteConfig.links.sponsor}
            variant="flat"
          >
            Hire Me
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};