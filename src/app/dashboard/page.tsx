import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';

import { config } from '@/config';
import { CompletedQuizzes } from '@/components/dashboard/overview/completed-quizzes';
import { StudentsList } from '@/components/dashboard/overview/students-list';
import { UpcomingQuiz } from '@/components/dashboard/overview/upcoming-quizzes';


export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Dashboard(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
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

      <Grid lg={5} md={5} xs={12}>
        <StudentsList
            students={[
              {
                id: 'STD-010',
                name: 'Taslim Ansari',
                image: '/assets/avatar-7.png',
                rank: 2,
                group: 'TE-COMP',
                score: 87
              },
              {
                id: 'STD-008',
                name: 'Mohtaseem Khan',
                image: '/assets/avatar-3.png',
                rank: 17,
                group: 'TE-COMP',
                score: 60
              },
              {
                id: 'STD-007',
                name: 'Shaurya Vishwakarma',
                image: '/assets/avatar-2.png',
                rank: 5,
                group: 'TE-COMP',
                score: 80
              },
              {
                id: 'STD-006',
                name: 'Nishad Joglekar',
                image: '/assets/avatar-1.png',
                rank: 3,
                group: 'TE-COMP',
                score: 76
              },
              {
                id: 'STD-005',
                name: 'Taslim Ansari',
                image: '/assets/avatar-7.png',
                rank: 2,
                group: 'TE-MECH',
                score: 87
              },
              {
                id: 'STD-004',
                name: 'Nikhil Jain',
                image: '/assets/avatar-4.png',
                rank: 12,
                group: 'TE-MECH',
                score: 68
              },
              {
                id: 'STD-003',
                name: 'Mohtaseem Khan',
                image: '/assets/avatar-3.png',
                rank: 17,
                group: 'TE-COMP',
                score: 60
              },
              {
                id: 'STD-002',
                name: 'Shaurya Vishwakarma',
                image: '/assets/avatar-2.png',
                rank: 5,
                group: 'TE-COMP',
                score: 80
              },
              {
                id: 'STD-001',
                name: 'Nishad Joglekar',
                image: '/assets/avatar-1.png',
                rank: 3,
                group: 'TE-COMP',
                score: 76
              },
            ]}
            sx={{ height: '100%' }}
          />
      </Grid>

    </Grid>
  );
}
