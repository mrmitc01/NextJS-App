'use client';

import { Container, Flex, Heading, Text, Link } from "@radix-ui/themes";
import { useState, useEffect } from 'react';
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";

export default function Login() {
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
            <Container size="1" className="flex min-h-screen flex-col items-center justify-between pl-60 pt-32">
                <Flex direction="column">
                    <Heading>Sign In</Heading>
                </Flex>
                <LoginForm />
                <Text color="gray">or use one of these options</Text>
                <br/>
                <Text>Don&apos;t have an account? {' '}
                  <Link href="/register" color="blue">Register</Link>
                </Text>
            </Container>
        </main>
    );
}