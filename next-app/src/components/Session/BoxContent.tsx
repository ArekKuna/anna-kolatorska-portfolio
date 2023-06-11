type BoxContentProps = {
  title: string;
  description: string;
};

const createMarkup = (description: string) => {
  return { __html: description };
};

export const BoxContent = ({ title, description }: BoxContentProps) => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-signRiyathi text-4xl capitalize text-center">
        {title}
      </h1>
      <div
        className="text-start sm:text-center md:text-start"
        dangerouslySetInnerHTML={createMarkup(description)}
      ></div>
    </div>
  );
};
