import { Link } from "react-router-dom"

function DashBoard() {
  return (
    <div>
      <p>

      home dashboard
      </p>

      <Link to='/dashboard/kcal' className="hover:text-blue-600">kcal</Link>
    </div>
  )
}

export default DashBoard
