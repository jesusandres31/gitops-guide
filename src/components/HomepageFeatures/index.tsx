import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Collaborative Deployment Workflow",
    Svg: require("@site/static/img/undraw_team_re_0bfe.svg").default,
    description: (
      <>
        Encourage team involvement in deployments by offering a centralized
        repository for contribution to strategies, sharing insights, and
        collective issue resolution.
      </>
    ),
  },
  {
    title: "Streamlined Deployment Process",
    Svg: require("@site/static/img/undraw_server_cluster_jwwq.svg").default,
    description: (
      <>
        Optimize deployment across different environments with clear
        instructions, scripted procedures, and best practices to minimize
        downtime and ensure smooth transitions.
      </>
    ),
  },
  {
    title: "GitOps Documentation",
    Svg: require("@site/static/img/undraw_version_control_re_mg66.svg").default,
    description: (
      <>
        Use Git repositories as a single source of truth for managing
        infrastructure and deployments files to enables version-controlled
        documentation alongside your codebase.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
