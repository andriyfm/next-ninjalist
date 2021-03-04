import Layout from "components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${baseUrl}/users`);
  const data = await res.json();

  const paths: { params: { id: string } }[] = data.map(
    (item: { id: string }) => {
      return { params: { id: item.id.toString() } };
    }
  );

  return {
    fallback: false,
    paths: paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`${baseUrl}/users/${id}`);
  const ninja = await res.json();

  return {
    props: { ninja },
  };
};

interface NinjaDetailProps {
  ninja: {
    id: number;
    name: string;
    email: string;
    website: string;
  };
}

export default function ninjaDetail({ ninja }: NinjaDetailProps) {
  return (
    <Layout>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
    </Layout>
  );
}
