import Plan from "../db/models/plans.js";

export default async function getAllPlans() {
  const plans = await Plan.findAll();
  return plans;
}
