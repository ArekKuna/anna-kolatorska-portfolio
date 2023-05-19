type BoxContentProps = {
  title: string;
  description: string;
};

const createMarkup = (description: string) => {
  return { __html: description };
};

export const BoxContent = ({ title, description }: BoxContentProps) => {
  return (
    <div className="space-y-10 grid grid-cols-4 col-span-4 sm:col-span-6 sm:grid-cols-6 md:col-span-6">
      <h1 className="font-signRiyathi text-4xl capitalize text-center col-span-4 sm:col-span-6">
        {title}
      </h1>
      <div
        className="text-center col-span-4 sm:col-span-6"
        dangerouslySetInnerHTML={createMarkup(description)}
      ></div>
    </div>
  );
};
