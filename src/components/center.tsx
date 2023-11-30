const PageCenter = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 mx-auto h-screen">
      {children}
    </div>
  );
};

export default PageCenter;
