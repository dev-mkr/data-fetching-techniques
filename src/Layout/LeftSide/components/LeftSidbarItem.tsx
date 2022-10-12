type ItemProps = {
  text: string;
  active?: boolean;
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};

const LeftSidbarItme = ({ text, Icon, active }: ItemProps) => {
  return (
    <li
      className={`my-2 mb-8 flex justify-start font-bold text-white hover:text-blue-400 ${
        active && "!text-blue-400"
      }`}
    >
      <Icon className="mr-3 w-6" />
      <span>{text}</span>
    </li>
  );
};

export default LeftSidbarItme;
