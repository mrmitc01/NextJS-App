'use client';

import Image from "next/image";
import { Container, Flex, Heading, Text } from "@radix-ui/themes"

import z from 'zod';

import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import './styles.css';

const Link = ({href}:any, {...props}) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenu.Link asChild active={isActive}>
      <NextLink href={href} className="NavigationMenuLink" {...props} />
    </NavigationMenu.Link>
  );
};

const NavBar = () => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <Link href="/">Home</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link href="/">Login</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link href="/">Register</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link href="/">Account</Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container size="1">
        <Flex direction="column">
          <Heading>My Next.js App</Heading>
          <Text color="gray">Here you can see my Next.js app.</Text>
        </Flex>
      </Container>
      <NavBar />
    </main>
  );
}
