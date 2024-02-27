import useSWR, { mutate } from 'swr';

import { LoginData, PlanData, PurchaseData } from '@/app/types/common.types';

const host = process.env.NEXT_PUBLIC_BACKEND_URL;
const fetcher = (url: string) => fetch(url).then(res => res.json());
const fetcherWithHeader = (url: string, currentUser: string) => fetch(url,{headers:{'currentUser': currentUser}}).then(res => res.json());

export const getPlans = () => {
  const { data, error, isLoading } = useSWR<PlanData[]>(`${host}/api/plans`, fetcher);
 
  return {
    planData: data,
    isLoading,
    isError: error
  };
}

export const authenticateUser = async(data: LoginData) => {
    const response = await fetch(`${host}/api/users/authenticate`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
}

export const getPurchasedPlan = (active: boolean, userId: number) => {
  const { data, error, isLoading } = useSWR<PurchaseData>(
    [`${host}/api/purchases?active=${active}`, userId.toString() ],
    ([url, userId]) => fetcherWithHeader(url, userId as string)
  );
 
  return {
    currentPlan: data,
    isLoading,
    isError: error
  };
}

export const refreshPurchasedPlan = (active: boolean, userId: number) => {
  mutate([`${host}/api/purchases?active=${active}`, userId.toString()]);
}

export const onPurchase = async (planId: number, userId: number) => {
  const response = await fetch(`${host}/api/purchases/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'currentUser': userId.toString()
    },
      body: JSON.stringify({ planId, userId })
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}
