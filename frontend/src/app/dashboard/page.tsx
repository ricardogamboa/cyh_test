'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import styles from "@/app/page.module.css";
import LoggedInMenu from "@/app/components/LoggedInMenu";
import PlanList from '@/app/components/PlanList';
import CurrentPlan from '@/app/components/CurrentPlan';
import { UserData } from '@/app/types/common.types';


export default function Page() {
  const [cookies] = useCookies(['currentUser']);
  const emptyUser = { 'firstName': '', 'lastName':'', 'id': 1, 'email': ''} as UserData;
  const [user, setUser] = useState(emptyUser);

  useEffect(() => {
    setUser(cookies.currentUser as UserData);
  }, [cookies])

  const router = useRouter();
  const logOut = () => {
    router.push('/logout');
  };

  return (
    <main className={styles.main}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LoggedInMenu logOut={logOut} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" component="div" sx={{ mb: 1.5}}>
            {`${user.firstName} ${user.lastName} - Current Plan:`}
          </Typography>
          {user.id !== 0 &&
          <CurrentPlan userId={user.id} />
          }
        </Grid>
        <Grid item xs={6}>
          <Box component="div" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}>
            <Typography variant="h5" component="div" sx={{ mb: 1.5}}>
              Buy a new Plan:
            </Typography>
            <PlanList purchase={true} userId={user.id} />
          </Box>
        </Grid>
      </Grid>
    </main>
  );
}
