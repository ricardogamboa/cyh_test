import Box from '@mui/material/Box';

import PlanCard from '@/app/components/PlanCard';
import { getPlans } from "@/app/lib/services";

interface Props {
    purchase: boolean;
    userId?: number;
};

export default function PlanList(props: Props) {
  const { planData, isLoading, isError } = getPlans();
 
  if (isError) return (<div>failed to load</div>);
  if (isLoading) return (<div>loading...</div>);

  return (
    <Box>
    {planData?.map((plan) => (
      <PlanCard
        name={plan.name}
        price={plan.price}
        steps={plan.steps.length}
        purchase={props.purchase}
        userId={props.userId}
        planId={plan.id}
        key={plan.id}
      />
    ))}
    </Box>
  );
}
