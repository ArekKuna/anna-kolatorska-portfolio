type BoxContentProps = {
  title: string;
  description: string;
};

const createMarkup = (description: string) => {
  return { __html: description };
};

export const BoxContent = ({ title, description }: BoxContentProps) => {
  return (
    <div className="space-y-6">
      <h1 className="font-signRiyathi text-4xl capitalize text-center">
        {title}
      </h1>
      <div dangerouslySetInnerHTML={createMarkup(description)}></div>
    </div>
  );
};
