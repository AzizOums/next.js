import MyButton from "./mybutton";

interface IRestartButtonProps {
  win: boolean;
  click: () => void;
}

const RestartElement: React.FC<IRestartButtonProps> = ({
  win,
  click,
}: IRestartButtonProps) => {
  return (
    <div>
      <p>Vous avez {win ? "Gagné" : "Perdu"} !</p>
      <MyButton text="recommencer" onClick={click} />
    </div>
  );
};

export default RestartElement;
