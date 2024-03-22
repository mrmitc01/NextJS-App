'use client';

import { Container, Flex, Heading, Text, Link } from "@radix-ui/themes";
import RegisterForm from "../components/RegisterForm";
import Logo from "../components/Logo";

export default function Register() {
    return (
        <main className="flex min-h-screen flex-col">
            <Logo />
            <Container size="1" className="flex min-h-screen flex-col items-center justify-between pl-60 pt-32">
                <Flex direction="column">
                    <Heading>Register</Heading>
                </Flex>
                <RegisterForm />
                <Text color="gray">or use one of these options</Text>
                <br/>
                <Text>Already have an account? {' '}
                  <Link href="/login" color="blue">Sign In</Link>
                </Text>
            </Container>
        </main>
    );
}