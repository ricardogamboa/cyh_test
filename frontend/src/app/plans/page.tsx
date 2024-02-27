'use client'

import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import styles from "@/app/page.module.css";
import LoggedOutMenu from "@/app/components/LoggedOutMenu"
import PlanList from '@/app/components/PlanList';


export default function Page() {
  return (
    <main className={styles.main}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LoggedOutMenu />
        </Grid>
        <Grid item xs={4}>
          <Box component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}>
            <div>
              <Typography variant="h5" component="div" sx={{ mb: 1.5}}>
                Therapy Plans:
              </Typography>
              <PlanList purchase={false} />
            </div>
          </Box>
        </Grid>
      </Grid>
    </main>
  );
}
