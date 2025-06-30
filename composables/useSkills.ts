import type { Skill } from '@/types/skill.type';
import react from '~/public/react.svg';
import tailwindcss from '~/public/tailwindcss.svg';
import dart from '~/public/dart.svg';
import nestjs from '~/public/nestjs.svg';
import prisma from '~/public/prisma.svg';
import nuxtjs from '~/public/nuxtjs.svg';
import graphql from '~/public/graphql.svg';
import pinia from '~/public/pinia.svg';
import aws from '~/public/aws.svg';
import flutter from '~/public/flutter.svg';
import php from '~/public/php.svg';
import express from '~/public/express.svg';
import nodejs from '~/public/nodejs.svg';
import github from '~/public/github.svg';
import gitlab from '~/public/gitlab.svg';
import homebrew from '~/public/homebrew.svg';
import intellij from '~/public/intellijidea.svg';
import java from '~/public/java.svg';
import jest from '~/public/jest.svg';
import laravel from '~/public/laravel.svg';
import linear from '~/public/linear.svg';
import motion from '~/public/motion.svg';
import nextjs from '~/public/nextjs.svg';
import postgres from '~/public/postgres.svg';
import restApi from '~/public/rest-api.svg';
import schadcnui from '~/public/schadcnui.svg';
import stripe from '~/public/stripe.svg';
import typescript from '~/public/typescript.svg';
import zod from '~/public/zod.svg';

const MIN_SIZE = 85;
const MAX_SIZE = 120;
const SIZE_STEP = (MAX_SIZE - MIN_SIZE) / 30;

export const useSkills = () => {
  const skills: Skill[] = [
    {
      name: 'React',
      icon: react,
      size: MIN_SIZE + SIZE_STEP * 0,
    },
    {
      name: 'Tailwind',
      icon: tailwindcss,
      size: MIN_SIZE + SIZE_STEP * 1,
    },
    {
      name: 'Dart',
      icon: dart,
      size: MIN_SIZE + SIZE_STEP * 2,
    },
    {
      name: 'NestJS',
      icon: nestjs,
      size: MIN_SIZE + SIZE_STEP * 3,
    },
    {
      name: 'Prisma',
      icon: prisma,
      size: MIN_SIZE + SIZE_STEP * 4,
    },
    {
      name: 'Nuxt.js',
      icon: nuxtjs,
      size: MIN_SIZE + SIZE_STEP * 5,
    },
    {
      name: 'GraphQL',
      icon: graphql,
      size: MIN_SIZE + SIZE_STEP * 6,
    },
    {
      name: 'Pinia',
      icon: pinia,
      size: MIN_SIZE + SIZE_STEP * 7,
    },
    {
      name: 'AWS',
      icon: aws,
      size: MIN_SIZE + SIZE_STEP * 8,
    },
    {
      name: 'Flutter',
      icon: flutter,
      size: MIN_SIZE + SIZE_STEP * 9,
    },
    {
      name: 'PHP',
      icon: php,
      size: MIN_SIZE + SIZE_STEP * 10,
    },
    {
      name: 'Express',
      icon: express,
      size: MIN_SIZE + SIZE_STEP * 11,
    },
    {
      name: 'Node.js',
      icon: nodejs,
      size: MIN_SIZE + SIZE_STEP * 12,
    },
    {
      name: 'GitHub',
      icon: github,
      size: MIN_SIZE + SIZE_STEP * 13,
    },
    {
      name: 'GitLab',
      icon: gitlab,
      size: MIN_SIZE + SIZE_STEP * 14,
    },
    {
      name: 'Homebrew',
      icon: homebrew,
      size: MIN_SIZE + SIZE_STEP * 15,
    },
    {
      name: 'IntelliJ',
      icon: intellij,
      size: MIN_SIZE + SIZE_STEP * 16,
    },
    {
      name: 'Java',
      icon: java,
      size: MIN_SIZE + SIZE_STEP * 17,
    },
    {
      name: 'Jest',
      icon: jest,
      size: MIN_SIZE + SIZE_STEP * 18,
    },
    {
      name: 'Laravel',
      icon: laravel,
      size: MIN_SIZE + SIZE_STEP * 19,
    },
    {
      name: 'Linear',
      icon: linear,
      size: MIN_SIZE + SIZE_STEP * 20,
    },
    {
      name: 'Motion',
      icon: motion,
      size: MIN_SIZE + SIZE_STEP * 21,
    },
    {
      name: 'Next.js',
      icon: nextjs,
      size: MIN_SIZE + SIZE_STEP * 22,
    },
    {
      name: 'PostgreSQL',
      icon: postgres,
      size: MIN_SIZE + SIZE_STEP * 23,
    },
    {
      name: 'REST API',
      icon: restApi,
      size: MIN_SIZE + SIZE_STEP * 24,
    },
    {
      name: 'ShadcnUI',
      icon: schadcnui,
      size: MIN_SIZE + SIZE_STEP * 25,
    },
    {
      name: 'TypeScript',
      icon: typescript,
      size: MIN_SIZE + SIZE_STEP * 27,
    },
    {
      name: 'Zod',
      icon: zod,
      size: MIN_SIZE + SIZE_STEP * 28,
    },
    {
      name: 'Stripe',
      icon: stripe,
      size: MIN_SIZE + SIZE_STEP * 29,
    },
  ];

  return {
    skills,
    MIN_SIZE,
    MAX_SIZE,
    SIZE_STEP,
  };
};
