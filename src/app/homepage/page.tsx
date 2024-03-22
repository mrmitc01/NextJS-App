'use client';

import { Container, Flex, Text } from "@radix-ui/themes";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import Logo from "../components/Logo";
import { Button } from '@radix-ui/themes';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Link = ({href, ...props}:any) => {
    const pathname = usePathname();
    const isActive = href === pathname;
  
    return (
      <NavigationMenu.Link asChild active={isActive}>
        <NextLink href={href} className="NavigationMenuLink" {...props} />
      </NavigationMenu.Link>
    );
};

const NavBarLoggedIn = () => {
    return (
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <Link href="/homepage">Home</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="https://www.google.com">Discover</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="https://www.google.com">Activities</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="https://www.google.com">About</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="https://www.google.com">Contact</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="https://www.google.com"><Button color="blue">Dashboard</Button></Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    );
};

const NavBarLoggedOut = () => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <Link href="/homepage">Home</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link href="https://www.google.com">Discover</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link href="https://www.google.com">Activities</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link href="https://www.google.com">About</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link href="https://www.google.com">Contact</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link href="/register">
            <Button variant="outline" color="blue">Register</Button>
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
            <Link href="/login">
              <Button color="blue">Sign In</Button>
            </Link>
          </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default function Homepage() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }, []);

    return (
        <main className="flex min-h-screen flex-col">
            <Logo />
            <Container className="content-center pt-12">
              <div className="pl-96 pb-12">
                {loggedIn ? <NavBarLoggedIn /> : <NavBarLoggedOut />}
              </div>
              <Image src="/DreamVacation.PNG" width={1700} height={500} alt="Picture of a dream vacation" className="pb-12"/>
            </Container>
        </main>
    );
}
