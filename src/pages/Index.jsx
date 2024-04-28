// Personal website for Rufus King
import { Box, Flex, Heading, Text, Button, Image, Link, VStack, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" maxW="1200px" m="auto">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwUnVmdXMlMjBLaW5nfGVufDB8fHx8MTcxNDMzMDUxNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Rufus King" mb={4} />
        <Heading as="h1" size="xl" mb={2}>
          Rufus King
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Software Developer | Tech Enthusiast | Lifelong Learner
        </Text>
        <Text mt={3} mb={5}>
          Based in New York, specializing in modern web technologies. Passionate about building scalable software and creating effective solutions that improve the lives of those around me.
        </Text>

        <VStack spacing={4}>
          <Button leftIcon={<Icon as={FaLinkedin} />} colorScheme="blue" variant="solid">
            <Link href="https://www.linkedin.com/in/rufusking" isExternal>
              LinkedIn
            </Link>
          </Button>
          <Button leftIcon={<Icon as={FaGithub} />} colorScheme="gray" variant="solid">
            <Link href="https://github.com/rufusking" isExternal>
              GitHub
            </Link>
          </Button>
          <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="teal" variant="solid">
            <Link href="mailto:rufus.king@example.com" isExternal>
              Email Me
            </Link>
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
