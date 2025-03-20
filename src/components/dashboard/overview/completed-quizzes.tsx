import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import type { SxProps } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import dayjs from 'dayjs';


export interface Quiz {
  id: string;
  title: { name: string };
  groupName: string;
  groupCount: number,
  createdAt: Date;
}

export interface CompletedQuizzesProps {
  quizzes?: Quiz[];
  sx?: SxProps;
}

export function CompletedQuizzes({ quizzes = [], sx }: CompletedQuizzesProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardHeader title="Completed Quizzes" />
      <Divider />
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Group name</TableCell>
              <TableCell>Student count</TableCell>
              <TableCell sortDirection="desc">Date</TableCell>   
            </TableRow>
          </TableHead>
          <TableBody>
            {quizzes.map((Quiz) => {
              return (
                <TableRow hover key={Quiz.id}>
                  <TableCell>{Quiz.title.name}</TableCell>
                  <TableCell>{Quiz.groupName}</TableCell>
                  <TableCell>{Quiz.groupCount}</TableCell>
                  <TableCell>{dayjs(Quiz.createdAt).format('DD / MM / YYYY')}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={<ArrowRightIcon fontSize="var(--icon-fontSize-md)" />}
          size="small"
          variant="text"
        >
          View Results
        </Button>
      </CardActions>
    </Card>
  );
}
