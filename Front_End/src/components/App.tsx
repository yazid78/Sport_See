import Header from "./header.tsx"
import Sidebar from "./sidebar.tsx"
import Chart from "./chart.tsx"
import getData from "../services/serviceData.ts"


function App() {
  getData(18)

  return <div>
    <Header />
    <Sidebar />
    <Chart />

  </div>


}

export default App
