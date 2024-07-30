import Chart from "@/components/ui/kcal/Chart";
import Properties from "@/components/ui/kcal/Properties";

function KcalDashboard() {
  return (
    <div className="grid h-full grid-cols-2 grid-rows-2 text-black">
      <Chart />
      <div className="row-span-2 bg-purple-200">unknown</div>
      <Properties />
    </div>
  );
}

export default KcalDashboard;
