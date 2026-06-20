'use client'
 
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
 
export default function EngineOilPage() {
  return (
    <CategoryPageTemplate
      categoryKey="engineOil"
      title="Engine Oil"
      description="NitroLube premium engine oils are engineered with high-strength molecular film chemistry to provide maximum heat resistance, extreme shear stability, and protection against friction wear. Formulated for high performance in modern passenger cars, bikes, utility fleets, and heavy duty diesel engines operating in high-temperature environments."
      imagePath="/engine_oil_3d.jpg"
    />
  );
}
