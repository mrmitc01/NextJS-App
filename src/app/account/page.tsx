'use client';

import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import AccountForm from "../components/AccountForm";

const Link = ({href, ...props}:any) => {
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

export default function Account() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Container size="1">
                <Flex direction="column">
                    <Heading>Account</Heading>
                    <NavBar />
                    <Text color="gray">Here you can manage your account.</Text>
                    <AccountForm />
                </Flex>
            </Container>
        </main>
    );
}
  