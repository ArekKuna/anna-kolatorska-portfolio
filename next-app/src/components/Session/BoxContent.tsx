type BoxContentProps = {
  title: string;
  description: string;
};

export const BoxContent = ({ title, description }: BoxContentProps) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
};
