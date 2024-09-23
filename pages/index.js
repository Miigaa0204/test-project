import Calc from "@/components/Calc";
import Problem from "@/components/problem";
import Test from "@/components/Test";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      Home page
      <Calc />
      <Test />
      <Problem/>
    </div>
  );
}
