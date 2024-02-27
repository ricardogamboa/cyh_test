'use client'

import * as React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import styles from "@/app/page.module.css";
import LoggedOutMenu from "@/app/components/LoggedOutMenu";
import { authenticateUser } from "@/app/lib/services";
import { LoginData } from '@/app/types/common.types';

type Inputs = {
  email: string;
  password: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [cookies, setCookie] = useCookies(['currentUser']);

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const user = await authenticateUser(data as LoginData);
      if (user) {
        setCookie('currentUser', user);
        router.push('/dashboard');
      }
    } catch (error) {
      throw error;
    }
  }

  return (
    <main className={styles.main}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LoggedOutMenu />
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ mb: 1.5}}>
                Why is psychology important?
              </Typography>
              <Typography variant="body2">
                Psychology is everywhere and covers all aspects of life.
                <br />
                It's about humans and the human mind.
                <br />
                Studying psychology is so varied and as a student,
                <br />
                you get to learn a range of theories and topics
                <br />
                and how they can be applied to real situations and settings.
              </Typography>
              <Typography sx={{ mb: 1, mt: 1.5 }} color="text.secondary">
                Dr Julie Prescott
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}>
            <Typography variant="h5" component="div" sx={{ mb: 1.5, ml:1 }}>
              Login
            </Typography>
            <div>
              <TextField
                id="email"
                label="Email"
                {...register("email")}
              />
            </div>
            <div>
              <TextField
                id="password"
                label="Password"
                type="password"
                {...register("password")}
              />
            </div>
            <div>
              <Button variant="contained" type="submit" sx={{ ml:1 }}>Login</Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </main>
  );
}
