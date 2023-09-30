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
    <div className="flex flex-col gap-10 md:gap-14">
      {options.map((option) => (
        <Option key={option.id} option={option} />
      ))}
    </div>
  );
};
