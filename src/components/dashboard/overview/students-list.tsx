"use client";

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
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

export interface student {
  id: string;
  image: string;
  name: string;
  rank: number;
  score: number;
  group: string;
}

export interface StudentsListProps {
  students?: student[];
  sx?: SxProps;
}

 

export function StudentsList({ students = [], sx }: StudentsListProps): React.JSX.Element {

  const [selectedGroup, groupSelection] = React.useState<string | null>('TE-COMP');
  
    const handleGroupSelection = (
      event: React.MouseEvent<HTMLElement>,
      newSelectedGroup: string | null,
    ) => {
      groupSelection(newSelectedGroup);
    };
  return (
    <Card sx={sx}>
      <CardHeader title="Students List" />
      <ToggleButtonGroup
      value={selectedGroup}
      exclusive
      onChange={handleGroupSelection}
      aria-label="Group type"
      fullWidth
      sx={{borderRadius: 10, p: 1}}
    >
      <ToggleButton value="TE-COMP" aria-label="TE-COMP" color="success">
      TE-COMP
      </ToggleButton>
      <ToggleButton value="TE-MECH" aria-label="TE-MECH" color="success">
      TE-MECH
      </ToggleButton>
      <ToggleButton value="TE-CIVIL" aria-label="TE-CIVIL" color="success">
      TE-CIVIL
      </ToggleButton>
      <ToggleButton value="TE-ECS" aria-label="TE-ECS" color="success">
      TE-ECS
      </ToggleButton>
    </ToggleButtonGroup>
      <List>
        {students.map((student, index) => (
          <ListItem divider={index < students.length - 1} key={student.id}>
            <ListItemAvatar>
              {student.image ? (
                <Box component="img" src={student.image} sx={{ borderRadius: 1, height: '48px', width: '48px' }} />
              ) : (
                <Box
                  sx={{
                    borderRadius: 1,
                    backgroundColor: 'var(--mui-palette-neutral-200)',
                    height: '48px',
                    width: '48px',
                  }}
                />
              )}
            </ListItemAvatar>
            <ListItemText
              primary={student.name}
              primaryTypographyProps={{ variant: 'subtitle1' }}
              secondary={`Class rank:  ${student.rank} | Average score: ${student.score}%`}
              secondaryTypographyProps={{ variant: 'body2' }}
            />
            <IconButton edge="end" sx={{mx: 2}}>
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
          Student directory
        </Button>
      </CardActions>
    </Card>
  );
}
