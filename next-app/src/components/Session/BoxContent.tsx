type BoxContentProps = {
  title: string;
  description: string;
};

export const BoxContent = ({ title, description }: BoxContentProps) => {
  return (
    <div className="space-y-6">
      <h1 className="font-signRiyathi text-4xl capitalize text-center">
        {title}
      </h1>
      <p>{description}</p>
    </div>
  );
};
