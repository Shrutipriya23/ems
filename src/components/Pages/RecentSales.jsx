import { Card, CardHeader, CardContent } from "@/components/ui/card";

const salesData = [
  { name: "Olivia Martin", email: "olivia.martin@email.com", value: "$1,999.00" },
  { name: "Jackson Lee", email: "jackson.lee@email.com", value: "$39.00" },
  { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", value: "$299.00" },
  { name: "William Kim", email: "will@email.com", value: "$99.00" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", value: "$39.00" },
];

const RecentSales = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>Recent Sales</CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-4">You made 265 sales this month.</p>
        <ul className="space-y-2">
          {salesData.map((sale, index) => (
            <li key={index} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{sale.name}</p>
                <p className="text-xs text-gray-500">{sale.email}</p>
              </div>
              <p className="font-bold">{sale.value}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecentSales;
