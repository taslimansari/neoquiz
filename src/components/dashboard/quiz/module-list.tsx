"use client";

import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import type { SxProps } from '@mui/material/styles';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { Chip, Typography } from '@mui/material';
import { PlusCircle } from '@phosphor-icons/react';


export interface module {
    id: string;
    subject: string;
    name: string;
    group: string;
}

export interface ModulesListProps {
    modules?: module[];
    sx?: SxProps;
}



export function ModulesList({ modules = [], sx }: ModulesListProps): React.JSX.Element {
    return (
        <Card sx={sx}>
            <CardHeader title="Modules List" action={
                <Button size="small" variant="outlined" startIcon={<PlusCircle />}>
                    New Module
                </Button>
            } />
            <Divider />
            <List>
                {modules.map((module, index) => (
                    <ListItem divider={index < modules.length - 1} key={module.id}>

                        <ListItemText
                            primary={module.name}
                            primaryTypographyProps={{ variant: 'subtitle1' }}
                            secondary={<React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{ color: 'text.primary', display: 'inline' }}
                                >
                                    {module.subject}
                                </Typography>

                            </React.Fragment>}
                        />
                        <Chip label={module.group} variant="outlined" />
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
                    Module directory
                </Button>
            </CardActions>
        </Card>
    );
}
