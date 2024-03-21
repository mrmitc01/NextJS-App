'use client';

import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { useState, useEffect } from 'react';
import RegisterForm from "../components/RegisterForm";

const Link = ({href, ...props}:any) => {
    const pathname = usePathname();
    const isActive = href === pathname;
  
    return (
      <NavigationMenu.Link asChild active={isActive}>
        <NextLink href={href} className="NavigationMenuLink" {...props} />
      </NavigationMenu.Link>
    );
};

const NavBarFull = () => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <Link href="/homepage">Home</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link href="/login">Login</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link href="/register">Register</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link href="/account">Account</Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

const NavBarPartial = () => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <Link href="/login">Login</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link href="/register">Register</Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default function Register() {
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
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Container size="1">
                <Flex direction="column">
                    <Heading>Register</Heading>
                    {loggedIn ? <NavBarFull /> : <NavBarPartial />}
                    <Text color="gray">Here you can register.</Text>
                    <RegisterForm />
                </Flex>
            </Container>
        </main>
    );
}
  