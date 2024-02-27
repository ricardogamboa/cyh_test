import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

import { getPurchasedPlan } from "@/app/lib/services";
import Step from '@/app/components/Steps';

interface Props {
    userId: number;
};

export default function CurrentPlan(props: Props) {
  const { currentPlan, isLoading, isError } = getPurchasedPlan(true, props.userId);
 
  if (isError) return (<div>failed to load</div>);
  if (isLoading) return (<div>loading...</div>);
  if (!currentPlan) return (<div>You don't have an active plan</div>);

  return (
    <Box>
      <Typography variant="h6">{currentPlan.plan}</Typography>
      <Typography variant="body1">Sessions:</Typography>
      <List>
      {currentPlan.steps.map((step) => (
        <Step
          name={step.name}
          order={step.order}
          key={step.order}
        />
      ))}
      </List>
    </Box>
  );
};
