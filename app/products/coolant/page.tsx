'use client'

import CategoryPageTemplate from "@/components/CategoryPageTemplate";

export default function CoolantPage() {
  return (
    <CategoryPageTemplate
      categoryKey="coolant"
      title="Coolant"
      description="All-season glycol-based cooling system fluids in 1:4 and 1:7 concentrations. Actively prevents boiling in summer, freezing in winter, and protects engine radiators from scale build-up and metal corrosion."
      imagePath="/coolant_3d.jpg"
    />
  );
}
