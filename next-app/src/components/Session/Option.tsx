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
    <div className="py-8 pl-8 pr-3 flex flex-col gap-6 rounded-3xl bg-gray last-of-type:mb-14">
      <h3 className="text-3xl text-center capitalize font-signRiyathi">
        {option.title}
      </h3>
      {parse(clean)}
    </div>
  );
};
