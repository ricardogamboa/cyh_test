import { useState } from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { onPurchase, refreshPurchasedPlan } from '@/app/lib/services'

interface Props {
  name: string;
  price: number;
  steps: number;
  purchase: boolean;
  planId: number;
  userId?: number;
};

export default function PlanCard(props: Props) {
  const [newPurchase, setNewPurchase] = useState(false);

  const clickPurchase = async() => {
    await onPurchase(props.planId, (props.userId || 0));
    refreshPurchasedPlan(true, props.userId || 0);
  }

  return (
    <Card sx={{ minWidth: 275, mb:2 }}>
      <CardContent>
        <Typography variant="h6">{props.name}</Typography>
        <Typography variant="body1">Price: ${props.price}</Typography>
        <Typography variant="body1">Steps: {props.steps}</Typography>
      </CardContent>
      {props.purchase && props.planId && props.userId && (
      <CardActions>
        <Button onClick={clickPurchase}>Purchase</Button>
      </CardActions>
      )}
    </Card>
  );
}
