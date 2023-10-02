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
    <div className="w-full py-8 flex flex-col gap-6 rounded-3xl bg-gray md:w-[45%] lg:last-of-type:mb-0 last-of-type:mb-14">
      <h3 className="text-3xl text-center capitalize font-signRiyathi">
        {option.title}
      </h3>
      <div className="pl-8 pr-5 2xl:pl-12">{parse(clean)}</div>
    </div>
  );
};
