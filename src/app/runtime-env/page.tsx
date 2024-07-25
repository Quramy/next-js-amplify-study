import { EnvironmentTable } from "../../components/EnvironmentTable";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Page() {
  return <EnvironmentTable env={process.env} />;
}
