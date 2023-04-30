import { SessionParagraphOptionsAttributesFragment } from "@/graphql/generated";
import Custom404 from "@/pages/404";
import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";

type Optionprops = {
  option: SessionParagraphOptionsAttributesFragment;
};

export const Option = ({ option }: Optionprops) => {
  if (!option.list) {
    return <Custom404 />;
  }

  const clean = DOMPurify.sanitize(option.list, {
    USE_PROFILES: { html: true },
  });

  return (
    <div>
      <h3>{option.title}</h3>
      {parse(clean)}
    </div>
  );
};
