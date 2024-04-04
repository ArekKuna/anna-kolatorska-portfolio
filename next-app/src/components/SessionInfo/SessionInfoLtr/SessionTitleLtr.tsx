type Props = {
  title: string;
};

export const SessionTitleLtr = ({ title }: Props) => {
  return (
    <div className="col-span-full col-end-12">
      <h4 className="text-5xl text-end text-[#757575] leading-relaxed">
        {title}
      </h4>
    </div>
  );
};
