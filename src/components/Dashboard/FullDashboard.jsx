import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import OverviewCard from "../Pages/OverviewCard";
import Chart from "../Pages/Chart";
import RecentSales from "../Pages/RecentSales";
import { SlCalender } from "react-icons/sl";
import { LuDollarSign } from "react-icons/lu";
import { IoPeople } from "react-icons/io5";
import { IoMdFolderOpen } from "react-icons/io";
import { TbActivityHeartbeat } from "react-icons/tb";
import { useNavigate } from "react-router";


const Dashboard = () => {
  let navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login"); // Navigate to the Login page
  };
  
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl text-black font-bold mb-4">Dashboard</h1>
          <div className="flex items-center space-x-2 text-black border rounded-md border-gray-300">
            <Button variant="link">Overview</Button>
            <Button variant="ghost">Analytics</Button>
            <Button variant="ghost">Reports</Button>
            <Button variant="ghost">Notifications</Button>
          </div>
        </div>
        <div>
          <Button  className="mr-2 text-black border rounded-md border-gray-300">
          
            <SlCalender/>
            Jan 20, 2023 - Feb 09, 2023
          </Button>
          <Button onClick={handleLogin}
           className="bg-black text-white">Login In</Button>
        </div>
      </div>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <OverviewCard title="Total Revenue"className="text-3xl" 
         value="$45,231.89" growth="20.1%" icon={<LuDollarSign/>}/>  
        
        <OverviewCard title="Subscriptions" value="+2350" growth="180.1%" icon={< IoPeople/>}/>
        <OverviewCard title="Sales" value="+12,234" growth="19%" icon={< IoMdFolderOpen />}/>
        <OverviewCard title="Active Now" value="+573" growth="201" icon={< TbActivityHeartbeat />} />
      </div>

      {/* Chart and Recent Sales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>Overview</CardHeader>
            <CardContent>
              <Chart />
            </CardContent>
          </Card>
        </div>
        <RecentSales />
      </div>
    </div>
  );
};

export default Dashboard;
