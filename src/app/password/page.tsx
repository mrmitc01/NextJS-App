'use client';

import { Container, Flex, Heading, Text, Link } from "@radix-ui/themes";
import { useState, useEffect } from 'react';
import PasswordForm from "../components/PasswordForm";
import Logo from "../components/Logo";

export default function Password() {
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
                    <Heading>Create password</Heading>
                    <Text color="gray">Use a minimum of 10 characters, including letters, lowercase letters, and numbers.</Text>
                </Flex>
                <PasswordForm />
                <br/>
                <Text>By creating an account, you agree with our {' '}
                  <Link href="https://www.google.com" color="blue">Terms and Conditions</Link>
                  {' '} and {' '}
                  <Link href="https://www.google.com" color="blue">Privacy Statement.</Link>
                </Text>
            </Container>
        </main>
    );
}