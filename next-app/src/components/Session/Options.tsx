import { SessionParagraphOptionsAttributesFragment } from "@/graphql/generated";
import Custom404 from "@/pages/404";
import { Option } from "./Option";

type OptionsProps = {
  options: SessionParagraphOptionsAttributesFragment[];
};

export const Options = ({ options }: OptionsProps) => {
  if (!options) {
    return <Custom404 />;
  }

  return (
    <div className="my-10 mb-10 grid grid-cols-1 col-span-4 rounded-3xl space-y-10 sm:col-start-2 sm:col-end-6 md:grid-cols-6 md:col-start-1 md:col-span-6 md:space-y-0 md:gap-10">
      {options.map((option) => (
        <Option key={option.id} option={option} />
      ))}
    </div>
  );
};
