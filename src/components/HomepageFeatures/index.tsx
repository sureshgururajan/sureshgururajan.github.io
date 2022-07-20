import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Portfolio",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>🔍️ See my projects, open source contributions and knowledge base.</>
    ),
  },
  {
    title: "Blog",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        📖️ Visit my <code>technical</code> blog to check out interesting
        tutorials, articles and hopefully learn something new.
      </>
    ),
  },
  {
    title: "Contribute",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        👷‍♂️️ If you have something interesting you'd like to share, feel free to
        contribute and create pull requests. We can share knowledge with each
        other and grow professionally.
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
        <h3>{title}</h3>
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
