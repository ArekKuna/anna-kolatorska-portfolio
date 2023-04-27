import { Section } from "@/components/Layout/Section/Section";
import { SingleImageBox } from "@/components/Session/SingleImageBox";
import { sdk } from "@/graphql/client";
import { SessionAttributesFragment } from "@/graphql/generated";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { getPlaiceholder, IGetPlaiceholderReturn } from "plaiceholder";

type SessionPageProps = {
  session: SessionAttributesFragment;
  upperSectionImage: {
    upperSectionImage: IGetPlaiceholderReturn;
    upperSectionImageAlt: string;
  };
  midSectionImage: {
    midSectionImage: IGetPlaiceholderReturn;
    midSectionImageAlt: string;
  };
  lowerSectionImages: IGetPlaiceholderReturn[];
};

export const SessionPage = ({
  session,
  upperSectionImage,
  midSectionImage,
  lowerSectionImages,
}: SessionPageProps) => {
  if (!session.upperSection || !session.midSection) {
    return <p>Ładowanie...</p>;
  }

  return (
    <>
      <Section>
        <SingleImageBox
          sessionContent={session.upperSection}
          image={upperSectionImage.upperSectionImage}
          imageAlt={upperSectionImage.upperSectionImageAlt}
        />
      </Section>

      <Section>
        <SingleImageBox
          sessionContent={session.midSection}
          image={midSectionImage.midSectionImage}
          imageAlt={midSectionImage.midSectionImageAlt}
        />
      </Section>
    </>
  );
};

export const getStaticProps: any = async (context: GetStaticPropsContext) => {
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

  const lowerSectionImagesPath = session.lowerSection?.images?.data;

  if (!lowerSectionImagesPath) {
    return { notFound: true };
  }

  const upperSectionImage = await getPlaiceholder(
    `http://localhost:1337${session.upperSection?.image?.data?.attributes?.url}`
  );

  const midSectionImage = await getPlaiceholder(
    `http://localhost:1337${session.midSection?.image?.data?.attributes?.url}`
  );

  const lowerSectionImagesData = lowerSectionImagesPath
    .map((imagePath) => imagePath.attributes?.url)
    .filter((url): url is string => !!url);

  const lowerSectionImages = await Promise.all(
    lowerSectionImagesData.map((url) =>
      getPlaiceholder(`http://localhost:1337${url}`)
    )
  );

  return {
    props: {
      session,
      upperSectionImage: {
        upperSectionImage,
        upperSectionImageAlt:
          session.upperSection?.image?.data?.attributes?.alternativeText,
      },
      midSectionImage: {
        midSectionImage,
        midSectionImageAlt:
          session.midSection?.image?.data?.attributes?.alternativeText,
      },
      lowerSectionImages,
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
