import Purchase from "../db/models/purchase.js";
import Plan from "../db/models/plans.js";

type Plan = {
  name: string;
  steps: any;
};

export async function findById(userId?: string) {
  const purchase = await Purchase.findOne({ where: { UserId: userId, active: true }});
  return purchase;
}

export async function newPurchase(planId: string, userId?: string) {
  const plan = await Plan.findByPk(planId);
  //TODO: add sequelize models
  const purchase = await Purchase.create({
    active: true,
    // @ts-ignore
    plan: plan?.name,
    // @ts-ignore
    steps: plan?.steps,
    UserId: userId
  });
  return purchase;
}
