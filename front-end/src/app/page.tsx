'use client';

import { BackgroundImage, Button, Container, Group, Overlay, Stack, Text, Title, alpha, getThemeColor, useMantineTheme  } from '@mantine/core';
import { GithubLogo } from '@phosphor-icons/react';

import image from './_assets/images/scaffy-hello__half.png';
import classes from './_assets/styles/Page.module.css';
import Dashboard from './(features)/(homepage)/dashboard/page';

export default function Page() {
  const theme = useMantineTheme();

  return (
    <div>
      <Dashboard/>
    </div>
  );
}
