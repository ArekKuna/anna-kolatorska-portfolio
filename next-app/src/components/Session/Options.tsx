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
    <div>
      {options.map((option) => {
        if (!option.title) {
          return;
        }
        return <Option key={option.id} option={option} />;
      })}
    </div>
  );
};
