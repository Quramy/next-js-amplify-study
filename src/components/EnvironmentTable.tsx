import { Fragment } from "react";

export type Props = {
  readonly env: Record<string, string | undefined>;
};

export function EnvironmentTable({ env }: Props) {
  return (
    <dl>
      {Object.entries(env).map(
        ([key, value]) =>
          key.startsWith("AWS_") && (
            <Fragment key={key}>
              <dt>{key}</dt>
              <dd>{value}</dd>
            </Fragment>
          )
      )}
    </dl>
  );
}
