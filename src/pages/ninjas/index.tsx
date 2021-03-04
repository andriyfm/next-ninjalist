import Layout from "components/Layout";
import { GetStaticProps } from "next";
import Link from "next/link";
import { ReactElement } from "react";
import styles from "./styles.module.css";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${baseUrl}/users`);
  const ninjas = await res.json();

  return {
    props: {
      ninjas: ninjas.map((ninja) => ({
        ...ninja,
        path: `/ninjas/${ninja.id}`,
      })),
    },
  };
};

interface NinjasProps {
  ninjas: [{ id: string; name: string; path: string }];
}

export default function ninjas({ ninjas }: NinjasProps): ReactElement {
  return (
    <Layout>
      <h1>ninjas page</h1>

      {ninjas.map((ninja) => (
        <Link key={ninja.id} href={ninja.path}>
          <a className={styles.ninjaCard}>{ninja.name}</a>
        </Link>
      ))}
    </Layout>
  );
}
