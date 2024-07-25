import { EnvironmentTable } from "../../components/EnvironmentTable";

export const dynamic = "force-static";

export default function Page() {
  return <EnvironmentTable env={process.env} />;
}
