'use client';

import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

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

type Inputs = {
    username: string
    password: string
}

export default function Login() {
    const [loggedIn, setLoggedIn] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    console.log(watch("username"));
    console.log(watch("password"));

    const router = useRouter();
    
    const onSubmit = (data: any) => {
        // Handle form submission here
        console.log(data);
        // Redirect to Home page
        localStorage.setItem('loggedInUser', "true");
        setLoggedIn(true);
        router.push('/homepage');
    };

    /*let loggedInUserValue = localStorage.getItem('loggedInUser');
    if (loggedInUserValue != null) {
      loggedInUserValue = loggedInUserValue.replaceAll('"','');
    }
    let isLoggedIn = false;
    if (loggedInUserValue === "true") {
      isLoggedIn = true;
    }*/

    useEffect(() => {
      // Check if the user is logged in
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
                    <Heading>Login</Heading>
                    {loggedIn ? <NavBarFull /> : <NavBarPartial />}
                    <Text color="gray">Here you can log in.</Text>
                </Flex>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("username", { required: true })} placeholder="Username" />
                    <input type="password" {...register("password", { required: true })} placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </Container>
        </main>
    );
}
