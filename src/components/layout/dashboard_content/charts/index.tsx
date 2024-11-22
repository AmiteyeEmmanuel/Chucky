import { BarChart } from "./barChart";
import { PieGraph } from "./piechart";


function Charts() {
  return (
    <section className="grid grid-cols-1 gap-4 transition-all xl:grid-cols-2 mt-6 w-full pr-0">
      <BarChart />
      <PieGraph />
    </section>
  );
}

export default Charts;
