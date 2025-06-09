const FormTitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <h1 className={`font-bold text-2xl ${className}`}>{text}</h1>;
};

export default FormTitle;
