import { Container, Text } from "@radix-ui/themes";
import { RocketIcon } from '@radix-ui/react-icons';

export default function Logo() {
    return(
        <Container className="flex pr-32 pt-5">
            <RocketIcon className="w-5 h-5 mr-2 text-blue-500 float-left" />
            <Text className="text-sm font-bold">Travel Companion</Text>
        </Container>
    )
}