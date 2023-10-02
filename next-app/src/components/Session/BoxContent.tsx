type BoxContentProps = {
  title: string;
  description: string;
};

const createMarkup = (description: string) => {
  return { __html: description };
};

export const BoxContent = ({ title, description }: BoxContentProps) => {
  return (
    <div className="flex flex-col gap-10 lg:w-[30%]">
      <h1 className="font-signRiyathi font-medium text-4xl text-center">
        {title}
      </h1>
      <div
        className="text-center lg:text-start"
        dangerouslySetInnerHTML={createMarkup(description)}
      ></div>
    </div>
  );
};
