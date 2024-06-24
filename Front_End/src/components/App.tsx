import Header from "./header.tsx"
import Sidebar from "./sidebar.tsx"
import AppRoutes from '../routes.tsx';

function App() {

  return (
    <div>
      <Header />
      <Sidebar />
      <AppRoutes />

    </div>
  )
}

export default App
