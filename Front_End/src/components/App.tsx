import Header from "./header.tsx"
import Sidebar from "./sidebar.tsx"
import LineChartComponent from "./LineChart.tsx"
import getData from "../services/serviceData.ts"

function App() {
  getData(18)

  return <div>
    <Header />
    <Sidebar />
    <LineChartComponent />

  </div>


}

export default App
