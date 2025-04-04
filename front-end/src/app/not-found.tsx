'use client';

import { useRouter } from 'next/navigation';
import { Container, Grid, Stack, Text, Title, Group, Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import Image from 'next/image';
import notFoundImage from './_assets/images/not-found.png';

export default function NotFound() {
  const router = useRouter();

  return (
    <Container style={{ paddingTop: '5rem' }}>
      <Grid align="center" justify="center">
        {/* Left Side: Text Content */}
        <Grid.Col span={6} style={{ textAlign: 'center' }}>
          <Stack align="center" gap="sm">
            {/* Title with Gradient */}
            <Title
              order={1}
              style={{
                fontSize: '6rem',
                lineHeight: '4rem',
                fontWeight: 'bold',
              }}
            >
              <Text span style={{ fontSize: '3rem', color: '#af4fbb', fontWeight: 'bold' }}>
                Not
              </Text>
              <Text span style={{ fontSize: '3rem', color: '#21b9ab', fontWeight: 'bold' }}>
                {' '}
                Found
              </Text>
            </Title>

            {/* 404 Gradient Text */}
            <Title
              order={2}
              style={{
                fontSize: '9rem',
                lineHeight: '7.75rem',
                fontWeight: 'bolder',
                background: 'linear-gradient(90deg, #af4fbb, #21b9ab)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              404
            </Title>

            {/* Description Text */}
            <Text
              size="xl"
              color="dimmed"
              style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#21b9ab',
              }}
            >
              Sorry, the page you're
              <br />
              looking for doesn't exist.
            </Text>

            {/* Go Home Button */}
            <Group gap="xl">
              <Button
                size="md"
                variant="gradient"
                gradient={{ from: 'grape', to: 'teal' }}
                onClick={() => router.push('/')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}
              >
                <IconArrowLeft size={24} style={{ marginRight: '8px' }} />
                Go Home
              </Button>
            </Group>
          </Stack>
        </Grid.Col>

        {/* Right Side: Image */}
        <Grid.Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <Image src={notFoundImage} alt="404 Not Found" width={800} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
