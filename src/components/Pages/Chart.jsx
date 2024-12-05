import { Card, CardHeader, CardContent } from "@/components/ui/card";

const Chart = () => {
  // Mock data for the chart
  const data = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 5000, 4000, 3000, 2000];
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Find max value to scale bars
  const maxValue = Math.max(...data);

  return (
    <Card className="p-4 shadow-md">
      
      <CardContent>
        <div className="flex space-x-4 h-[200px] items-end">
          {data.map((value, index) => (
            <div key={index} className="flex space-x-3 h-[200px] items-end ">
              {/* Bar */}
              <div
                className="w-4 bg-black "
                style={{
                  height: `${(value / maxValue) * 100}%`, // Scale bar height dynamically
                }}
              ></div>
              {/* Label */}
              <p className="text-xs mt-2 ">{labels[index]}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Chart;


// import { Card, CardHeader, CardContent } from "@/components/ui/card";

// const Chart = () => {
//   // Mock data for the chart
//   const data = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 5000, 4000, 3000, 2000];
//   const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//   // Reference column values
//   const referenceValues = [8000, 6000, 4000, 2000, 0];

//   // Find max value to scale bars
//   const maxValue = Math.max(...referenceValues);

//   return (
//     <Card className="p-4 shadow-md">
      
//       <CardContent>
//         <div className="flex">
//           {/* Reference column */}
//           <div className="flex flex-col justify-between h-[200px] pr-4">
//             {referenceValues.map((value, index) => (
//               <p key={index} className="text-sm text-gray-600">
//                 {value}
//               </p>
//             ))}
//           </div>

//           {/* Bar chart */}
//           <div className="relative w-full">
//             <div className="absolute bottom-0 flex space-x-4 items-end w-full">
//               {data.map((value, index) => {
//                 const barHeight = `${(value / maxValue) * 100}%`;
//                 return (
//                   <div key={index} className="flex flex-col items-center">
//                     {/* Bar */}
//                     <div
//                       className="w-4 bg-black "
//                         style={{
//                         height: `${(value / maxValue) * 100}%`, 
//                         }}
//                     ></div>
//                     {/* Month Label below the bar */}
//                     <p className="text-xs mt-2">{labels[index]}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Chart;


// import { Card, CardHeader, CardContent } from "@/components/ui/card";
// import { BarChart } from "@/components/ui/chart";

// const Chart = () => {
//   // Mock data for the chart
//   const data = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 5000, 4000, 3000, 2000];
//   const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//   // Reference column values
//   const referenceValues = [8000, 6000, 4000, 2000, 0];

//   // Find max value for scaling
//   const maxValue = Math.max(...referenceValues);

//   // Data transformation for BarChart
//   const chartData = labels.map((label, index) => ({
//     label,
//     value: data[index],
//   }));

//   return (
//     <Card className="p-4 shadow-md">
//       <CardHeader>
//         <h3 className="text-lg font-bold">Overview</h3>
//       </CardHeader>
//       <CardContent>
//         <div className="flex">
//           {/* Reference column */}
//           <div className="flex flex-col justify-between h-[200px] pr-4">
//             {referenceValues.map((value, index) => (
//               <p key={index} className="text-sm text-gray-600">
//                 {value}
//               </p>
//             ))}
//           </div>

//           {/* Bar Chart */}
//           <div className="relative w-full">
//             <BarChart
//               data={chartData}
//               options={{
//                 scales: {
//                   y: {
//                     min: 0,
//                     max: maxValue,
//                     ticks: {
//                       stepSize: 2000,
//                     },
//                   },
//                 },
//               }}
//               height={200} // Chart height matches the reference column
//               barOptions={{
//                 color: "#000", // Set bar color
//                 borderRadius: 4, // Rounded corners for the bars
//               }}
//               className="w-full"
//             />
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Chart;
