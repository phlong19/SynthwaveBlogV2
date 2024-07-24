import { Stack } from "@mantine/core";
import { Link } from "react-router-dom";

function KcalDashboard() {
  return (
    <div>
      <p>dashboard with chart, kcal analysics</p>
      <Stack>
        <Link to="/">back home</Link>

        <Link to="/dashboard">to dashboard</Link>
      </Stack>
    </div>
  );
}

export default KcalDashboard;
