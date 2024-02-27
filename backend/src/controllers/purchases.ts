import Purchase from "../db/models/purchase.js";
import Plan from "../db/models/plans.js";

export async function findById(userId?: string) {
  const purchase = await Purchase.findOne({ where: { UserId: userId, active: true }});
  return purchase;
}

export async function newPurchase(planId: string, userId?: string) {
  const plan = await Plan.findByPk(planId);
  const purchase = await Purchase.create({
    active: true,
    plan: plan?.name,
    steps: plan?.steps,
    UserId: userId
  });
  return purchase;
}
