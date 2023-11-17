type SkillProps = {
  name: string;
  icon: React.ElementType;
  description: string;
};
const Skill = (props: SkillProps) => {
  return (
    <div
      className={
        "border-2 w-fit p-3 rounded-xl border-gray-500 flex flex-row hover:scale-110 transition-all duration-200"
      }
    >
      <div className={"text-6xl pr-4"}>
        <props.icon />
      </div>
      <div className={"flex flex-col"}>
        <div className={"text-2xl font-bold"}>{props.name}</div>
        <div className={"text-lg"}>{props.description}</div>
      </div>
    </div>
  );
};

export default Skill;