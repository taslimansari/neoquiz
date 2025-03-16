import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';

import { config } from '@/config';
import { CompletedQuizzes } from '@/components/dashboard/overview/completed-quizzes';
import { UpcomingQuiz } from '@/components/dashboard/overview/upcoming-quizzes';
import { ModulesList } from '@/components/dashboard/quiz/module-list';


export const metadata = { title: `Quizzes | ${config.site.name}` } satisfies Metadata;

export default function Quiz(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
        <Grid lg={5} md={5} xs={12}>
        <ModulesList
            modules={[
              {
                id: 'MOD-010',
                name: 'Introduction - Nubmer Theory & Basic Cryptography',
                subject: 'Cryptography & System Security',
                group: 'TE-COMP',
                
              },
              {
                id: 'MOD-008',
                name: 'Symmetirc & Asymmetric Key Cryptography & Key Management',
                subject: 'Cryptography & System Security',
                group: 'TE-COMP',
               
              },
              {
                id: 'MOD-007',
                name: 'Cryptographic Hash functions',
                subject: 'Cryptography & System Security',
                group: 'TE-COMP',

              },
              {
                id: 'MOD-006',
                name: 'Authentication Protocols & Digital Signature Schemes',
                subject: 'Cryptography & System Security',
                group: 'TE-COMP',

              },
              {
                id: 'MOD-005',
                name: 'Network Security & Applications',
                subject: 'Cryptography & System Security',
                group: 'TE-COMP',
                
              },
              {
                id: 'MOD-004',
                name: 'System Security',
                subject: 'Cryptography & System Security',
                group: 'TE-COMP',

              },
              {
                id: 'MOD-003',
                name: 'Introduction to Mobile Computing',
                subject: 'Mobile Computing',
                group: 'TE-COMP',
              },
              {
                id: 'MOD-002',
                name: 'GSM Mobile Services',
                subject: 'Mobile Computing',
                group: 'TE-COMP',

              },
              {
                id: 'MOD-001',
                name: 'Mobile Networking',
                subject: 'Mobile Computing',
                group: 'TE-COMP',

              },
              {
                id: 'MOD-011',
                name: 'Wireless Local Area Networks',
                subject: 'Mobile Computing',
                group: 'TE-COMP',

              },
            ]}
            sx={{ height: '100%' }}
          />
      </Grid>

      <Grid lg={7} md={12} xs={12} container spacing={3} direction={"row"}>
        <Grid lg={12} md={12} xs={12} spacing={3}>
          <UpcomingQuiz
            quizzes={[
              {
                id: 'QUIZ-005',
                name: 'Computer Forensics',
                image: '/assets/product-5.png',
                updatedAt: dayjs().add(18, 'days').subtract(5, 'hour').toDate(),
                students: 32,
              },
              {
                id: 'QUIZ-004',
                name: 'Data Structures',
                image: '/assets/product-4.png',
                updatedAt: dayjs().add(41, 'minutes').subtract(3, 'hour').toDate(),
                students: 12,
              },
            ]}
            sx={{ height: '100%' }}
          />
        </Grid>
        <Grid lg={12} md={12} xs={12}>

        <CompletedQuizzes
          quizzes={[
            {
              id: 'QUIZ-006',
              title: { name: 'DS Simplified' },
              groupCount: 25,
              groupName: 'TE-MECH',
              createdAt: dayjs().subtract(20, 'minutes').toDate(),
            },
            {
              id: 'QUIZ-004',
              title: { name: 'Computer Networks' },
              groupCount: 10,
              groupName: 'TE-COMP',
              createdAt: dayjs().subtract(15, 'days').toDate(),
            },
            {
              id: 'QUIZ-003',
              title: { name: 'Pair Programming' },
              groupCount: 96,
              groupName: 'TE-COMP',
              createdAt: dayjs().subtract(20, 'days').toDate(),
            },
            {
              id: 'QUIZ-002',
              title: { name: 'Hacking methods' },
              groupCount: 32,
              groupName: 'TE-ECS',
              createdAt: dayjs().subtract(10, 'hours').toDate(),
            },
            {
              id: 'QUIZ-001',
              title: { name: 'Component engineering' },
              groupCount: 16,
              groupName: 'TE-MECH',
              createdAt: dayjs().subtract(10, 'days').toDate(),
            },
          ]}
          sx={{ height: '100%' }}
        />
          
        </Grid>
      </Grid>

      

    </Grid>
  );
}
