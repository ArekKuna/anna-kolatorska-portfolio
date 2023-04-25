import { Section } from "@/components/Layout/Section/Section";
import { SingleImageBox } from "@/components/Session/SingleImageBox";
import { sdk } from "@/graphql/client";
import { SessionAttributesFragment } from "@/graphql/generated";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

type SessionPageProps = {
  session: SessionAttributesFragment;
  upperSectionImageUrl: string;
  midSectionImageUrl: string;
  lowerSectionImagesUrls: string[];
};

export const SessionPage = ({
  session,
  upperSectionImageUrl,
  midSectionImageUrl,
  lowerSectionImagesUrls,
}: SessionPageProps) => {
  if (!session.upperSection || !session.midSection) {
    return <p>Ładowanie...</p>;
  }
  return (
    <>
      <Section>
        <SingleImageBox
          sessionContent={session.upperSection}
          imageUrl={upperSectionImageUrl}
        />
      </Section>
      <Section>
        <SingleImageBox
          sessionContent={session.midSection}
          imageUrl={midSectionImageUrl}
        />
      </Section>
    </>
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

  const upperSectionImageUrl =
    session.upperSection?.image?.data?.attributes?.url;

  const midSectionImageUrl = session.midSection?.image?.data?.attributes?.url;

  const lowerSectionImages = session.lowerSection?.images?.data;

  if (!upperSectionImageUrl || !midSectionImageUrl || !lowerSectionImages) {
    return { notFound: true };
  }

  const imagesUrls = lowerSectionImages
    ?.map((session) => session.attributes?.url)
    .filter((slug): slug is string => !!slug);

  return {
    props: {
      session,
      upperSectionImageUrl: upperSectionImageUrl,
      midSectionImageUrl: midSectionImageUrl,
      lowerSectionImagesUrls: imagesUrls,
    },
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
