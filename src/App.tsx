import "./styles.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Team building", usersCount: 17 },
  { name: "UX", usersCount: 12 },
  { name: "CSS", usersCount: 12 },
  { name: "Jira", usersCount: 9 },
  { name: "Road mapping", usersCount: 7 },
  { name: "Planning", usersCount: 7 },
  { name: "Prototyping", usersCount: 5 },
  { name: "Figma", usersCount: 4 }
];

export default function App() {
  return (
    <ResponsiveContainer width={"100%"} height={235}>
      <BarChart

        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
        barSize={10}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" tickLine={false}  tick={{fontFamily: 'sans-serif'}} />
        <YAxis
          type={"number"}
          axisLine={false}
          tickLine={false}
          interval={"preserveStartEnd"}
          tick={{fontFamily: 'sans-serif'}}
        />
        {/* <YAxis type={'number'} axisLine={false} tickLine={false} domain={[0,(dataMax)=>dataMax%5?(dataMax+5-dataMax%5):dataMax]} tickCount={((...data)=>{console.log(data)})} /> */}
        <Bar dataKey="usersCount" fill="#008F85" radius={5} />
      </BarChart>
    </ResponsiveContainer>
  );
}
