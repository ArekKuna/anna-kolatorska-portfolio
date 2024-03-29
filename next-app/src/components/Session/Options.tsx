import { Option } from "components/Session/Option";
import { SessionParagraphOptionsAttributesFragment } from "graphql/generated";
import Custom404 from "pages/404";

type OptionsProps = {
  options: SessionParagraphOptionsAttributesFragment[];
};

export const Options = ({ options }: OptionsProps) => {
  if (!options) {
    return <Custom404 />;
  }

  return (
    <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:justify-center lg:flex-nowrap lg:mb-20">
      {options.map((option) => (
        <Option key={option.id} option={option} />
      ))}
    </div>
  );
};
