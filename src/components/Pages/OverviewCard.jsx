import { Card, CardHeader, CardContent } from "@/components/ui/card";

const OverviewCard = ({ title, value, growth }) => {
  return (
    <Card className="shadow-md p-4">
      <CardHeader>
        <h3 className="text-sm font-medium">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-bold">{value}</p>
        <p className="text-xs text-gray-500">{growth} from last month</p>
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
