'use client';

import { Container, Flex, Heading, Text } from "@radix-ui/themes"
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function App() {
  const router = useRouter();
  useEffect(() => {
    localStorage.clear();
    router.push('/login');
  }, []);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container size="1">
        <Flex direction="column">
          <Heading>My Next.js App</Heading>
          <Text color="gray">Here you can see my Next.js app.</Text>
        </Flex>
      </Container>
    </main>
  );
}
