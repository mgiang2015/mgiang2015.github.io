import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Le Minh Giang"
      description="I am a software engineer with experience in both front-end and back-end projects. Get in touch with me to know more."
    >
      <Hero />
      { // These are not included as it does not add value to my HERO section. Might include it in the future
        //<FavouriteProjects />
        //<LatestCode repositories={repositories} />
      }
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
