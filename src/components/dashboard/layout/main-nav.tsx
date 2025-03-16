'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { usePopover } from '@/hooks/use-popover';
import { MobileNav } from './mobile-nav';
import { UserPopover } from './user-popover';
import { Button, Typography } from '@mui/material';
import { PlusCircle } from '@phosphor-icons/react';
import NewQuizDialog from '../quiz/quiz-dialog';

export function MainNav(): React.JSX.Element {
  const [openNav, setOpenNav] = React.useState<boolean>(false);

  const userPopover = usePopover<HTMLDivElement>();
  const [openQuiz, setOpenQuiz] = React.useState(false);

  const handleOpenQuiz = () => setOpenQuiz(true);
  const handleCloseQuiz = () => setOpenQuiz(false);

  return (
    <React.Fragment>
      <Box
        component="header"
        sx={{
          borderBottom: '1px solid var(--mui-palette-divider)',
          backgroundColor: 'var(--mui-palette-background-paper)',
          position: 'sticky',
          top: 0,
          zIndex: 'var(--mui-zIndex-appBar)',
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: 'center', justifyContent: 'space-between', minHeight: '64px', px: 4 }}
        >
          <Stack sx={{ alignItems: 'center' }} direction="row" spacing={6}>
            <Button variant="outlined" onClick={handleOpenQuiz} startIcon={<PlusCircle />}>
              New Quiz
            </Button>
            
          </Stack>
          
          <Stack sx={{ alignItems: 'center' }} direction="row" spacing={6}>
            

            {/* <Tooltip title="Notifications">
              <Badge badgeContent={4} color="success" variant="dot">
                <IconButton>
                  <BellIcon />
                </IconButton>
              </Badge>
            </Tooltip> */}
            <Avatar
              onClick={userPopover.handleOpen}
              ref={userPopover.anchorRef}
              src="/assets/avatar-5.png"
              sx={{ cursor: 'pointer' }}
            />
          </Stack>
        </Stack>
      </Box>
      <NewQuizDialog open={openQuiz} handleClose={handleCloseQuiz}/>
      <UserPopover anchorEl={userPopover.anchorRef.current} onClose={userPopover.handleClose} open={userPopover.open} />
      <MobileNav
        onClose={() => {
          setOpenNav(false);
        }}
        open={openNav}
      />
    </React.Fragment>
  );
}
