'use client'

import CategoryPageTemplate from "@/components/CategoryPageTemplate";

export default function BrakeOilPage() {
  return (
    <CategoryPageTemplate
      categoryKey="brakeOil"
      title="Brake Oil"
      description="High boiling-point DOT-3 and DOT-4 hydraulic brake fluids designed to transfer force under critical heat conditions. Prevents vapor lock, protects hydraulic line metals from corrosion, and ensures crisp braking response."
      imagePath="/brake_oil_3d.jpg"
    />
  );
}
