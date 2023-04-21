import { sdk } from "@/graphql/client";
import { SessionAttributesFragment } from "@/graphql/generated";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

type SessionPageProps = {
  session: SessionAttributesFragment;
};

export const SessionPage = ({ session }: SessionPageProps) => {
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

export const getStaticProps: GetStaticProps<SessionPageProps> = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;

  if (!params?.session || Array.isArray(params.session)) {
    return {
      notFound: true,
    };
  }

  const { sessionCollections } = await sdk.GetSession({
    slug: params.session,
  });

  const session = sessionCollections?.data[0].attributes;

  if (!session) {
    return { notFound: true };
  }

  return {
    props: { session },
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

  const slugs = sessionCollections.data
    .map((session) => session.attributes?.slug)
    .filter((slug): slug is string => !!slug);

  const paths = slugs.map((session) => {
    return {
      params: { session },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default SessionPage;
