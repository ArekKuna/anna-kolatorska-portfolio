import { sdk } from "@/graphql/client";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

type SessionPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export const SessionPage = ({ session, hasError }: SessionPageProps) => {
  return (
    <div>
      <div>
        <h1>{session?.firstParagraph?.title}</h1>
      </div>

      <div></div>

      <div></div>
    </div>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;

  if (!params?.session || Array.isArray(params.session)) {
    return {
      props: { hasError: true, session: null },
    };
  }

  const { sessionCollections } = await sdk.GetSession({
    slug: params.session,
  });

  const session = sessionCollections?.data[0].attributes;

  if (!session) {
    return {
      props: { hasError: true, session: null },
    };
  }

  return {
    props: { session, hasError: false },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { sessionCollections } = await sdk.GetAllSessionsSlug();

  if (!sessionCollections) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = sessionCollections?.data.map((session) => {
    return {
      params: { session: session.attributes?.slug?.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default SessionPage;
