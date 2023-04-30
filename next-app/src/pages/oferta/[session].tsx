import { Section } from "@/components/Layout/Section/Section";
import { Options } from "@/components/Session/Options";
import { SessionBox } from "@/components/Session/SessionBox";
import { sdk } from "@/graphql/client";
import {
  SessionAttributesFragment,
  SessionParagraphImageAttributesFragment,
  SessionParagraphOptionsAttributesFragment,
} from "@/graphql/generated";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { getPlaiceholder } from "plaiceholder";

export type SessionImageAttributes = {
  url: string;
  alt: string;
  base64: string;
};

type SessionPageProps = {
  session: SessionAttributesFragment;
  upperSectionImage: SessionImageAttributes;
  midSectionImage: SessionImageAttributes;
  lowerSectionImages: SessionImageAttributes[];
  options: SessionParagraphOptionsAttributesFragment[];
};

export const SessionPage = ({
  session,
  upperSectionImage,
  midSectionImage,
  lowerSectionImages,
  options,
}: SessionPageProps) => {
  if (
    !session.upperSection ||
    !session.midSection ||
    !session.lowerSection ||
    !options
  ) {
    return <p>Ładowanie...</p>;
  }

  return (
    <>
      <Section>
        <SessionBox
          sessionContent={session.upperSection}
          images={upperSectionImage}
        />
      </Section>

      <Section>
        <SessionBox
          sessionContent={session.midSection}
          images={midSectionImage}
        />
      </Section>

      <Section>
        <SessionBox
          sessionContent={session.lowerSection}
          images={lowerSectionImages}
        />
      </Section>

      <Section>
        <Options options={options} />
      </Section>
    </>
  );
};

const getStaticImage = async (
  image: SessionParagraphImageAttributesFragment
) => {
  const url = image.attributes?.url;
  const alt = image.attributes?.alternativeText;
  const { base64 } = await getPlaiceholder(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`
  );

  return {
    url,
    alt,
    base64,
  };
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

  const upperSectionImageData = session.upperSection?.image?.data;
  const midSectionImageData = session.midSection?.image?.data;
  const lowerSectionImagesData = session.lowerSection?.images?.data;
  const options = session.options;

  if (
    !upperSectionImageData ||
    !midSectionImageData ||
    !lowerSectionImagesData ||
    !options
  ) {
    return { notFound: true };
  }

  const upperSectionImageAttributes = await getStaticImage(
    upperSectionImageData
  );

  const midSectionImageAttributes = await getStaticImage(midSectionImageData);

  const lowerSectionImagesAttributes = await Promise.all(
    lowerSectionImagesData.map(getStaticImage)
  );

  return {
    props: {
      session,
      upperSectionImage: {
        url: upperSectionImageAttributes.url,
        alt: upperSectionImageAttributes.alt,
        base64: upperSectionImageAttributes.base64,
      },
      midSectionImage: {
        url: midSectionImageAttributes.url,
        alt: midSectionImageAttributes.alt,
        base64: midSectionImageAttributes.base64,
      },
      lowerSectionImages: lowerSectionImagesAttributes,
      options,
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
