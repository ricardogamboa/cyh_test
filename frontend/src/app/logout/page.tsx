'use client'

import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import styles from "@/app/page.module.css";
import LoggedOutMenu from "@/app/components/LoggedOutMenu"

export default function Page() {
  const [cookies, setCookie, removeCookie] = useCookies(['currentUser']);

  useEffect(() => {
    removeCookie('currentUser', {path:'/'});
  }, [cookies])

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
                Thank you for your trust
              </Typography>
            </div>
          </Box>
        </Grid>
      </Grid>
    </main>
  );
}
