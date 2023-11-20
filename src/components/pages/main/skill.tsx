type SkillProps = {
  name: string;
  icon: React.ElementType;
  className?: string;
};
const Skill = (props: SkillProps) => {
  return (
    <div
      className={`border-2 w-fit p-3 rounded-xl border-gray-500 flex flex-row hover:scale-110 transition-all duration-200 ${props.className}`}
    >
      <div className={"text-6xl pr-4"}>
        <props.icon />
      </div>
      <div className={"flex flex-row"}>
        <div className={"text-2xl font-bold self-center"}>{props.name}</div>
      </div>
    </div>
  );
};

export default Skill;
