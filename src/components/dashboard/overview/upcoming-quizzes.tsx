import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import type { SxProps } from '@mui/material/styles';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import dayjs from 'dayjs';
import { Typography } from '@mui/material';

export interface quiz {
  id: string;
  image: string;
  name: string;
  updatedAt: Date;
  students: number;
}

export interface UpcomingQuizProps {
  quizzes?: quiz[];
  sx?: SxProps;
}

export function UpcomingQuiz({ quizzes = [], sx }: UpcomingQuizProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardHeader title="Upcoming Quizzes" />
      <Divider />
      <List>
        {quizzes.map((quiz, index) => (
          <ListItem alignItems="flex-start" divider={index < quizzes.length - 1} key={quiz.id}>
            <ListItemAvatar>
              {quiz.image ? (
                <Box component="img" src={quiz.image} sx={{ borderRadius: 1, height: '100px', width: '100px' }} />
              ) : (
                <Box
                  sx={{
                    borderRadius: 1,
                    backgroundColor: 'var(--mui-palette-neutral-200)',
                    height: '100px',
                    width: '100px',
                  }}
                />
              )}
            </ListItemAvatar>
            <ListItemText
            sx={{m: 1, p: 1}}
              primary={quiz.name}
              primaryTypographyProps={{ variant: 'h5' }}
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2" sx={{color: 'text.primary'}}>{`${dayjs(quiz.updatedAt).format('MMM D, YYYY | HH:mm')}`}</Typography>
              <Typography  sx={{pt: 2, display: 'block'}} component="span" variant='subtitle1'>No. of students enrolled: {quiz.students}</Typography>

                </React.Fragment>
              }
            />
              
            <IconButton edge="start" sx={{mt:6, mx: 2}}>
              <ArrowRightIcon weight="bold" />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={<ArrowRightIcon fontSize="var(--icon-fontSize-md)" />}
          size="small"
          variant="text"
        >
          Quiz directory
        </Button>
      </CardActions>
    </Card>
  );
}
