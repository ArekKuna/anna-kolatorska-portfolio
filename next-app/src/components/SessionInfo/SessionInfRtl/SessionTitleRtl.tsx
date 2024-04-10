type Props = {
  title: string;
};

export const SessionTitleRtl = ({ title }: Props) => {
  return (
    <div className="col-span-full col-start-2">
      <h4 className="text-5xl text-start text-[#757575] font-koHo uppercase leading-relaxed">
        {title}
      </h4>
    </div>
  );
};
