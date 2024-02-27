
export type LoginData = {
  email: string;
  password: string;
}

export type PlanData = {
  id: number;
  name: string;
  price: number;
  steps: {
    name: string;
    order: number;
  }[];
}

export type UserData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export type PurchaseData = {
  id: number;
  plan: string;
  active: boolean;
  userId: number;
  steps: {
    name: string;
    order: number;
  }[];
}
