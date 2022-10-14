type AttachmentProps = {
  children: React.ReactNode;
};
const AttachmentsComponent = ({ children }: AttachmentProps) => {
  return (
    <a href="#" className="rounded-full p-2 text-blue-400 hover:bg-dim-800">
      {children}
    </a>
  );
};

export default AttachmentsComponent;
