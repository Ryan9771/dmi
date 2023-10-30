import getStyle from "../../Styles";

interface Props {
  incrementMobile: () => void;
  decrementMobile: () => void;
}

function GroupButtons({ incrementMobile, decrementMobile }: Props) {
  const onIncrement = () => {
    incrementMobile();
  };

  const onDecrement = () => {
    decrementMobile();
  };

  return (
    <div className={getStyle(styles, "ctn")}>
      <div
        aria-label="Previous group"
        onClick={onDecrement}
        className={getStyle(styles, "btnPrev")}
      >
        Prev
      </div>
      <div
        aria-label="Next group"
        onClick={onIncrement}
        className={getStyle(styles, "btnNext")}
      >
        Next
      </div>
    </div>
  );
}

const styles = {
  ctn: ["md:hidden", "flex", "justify-between", "items-center", "mt-10", "p-3"],
  btnPrev: [
    "rounded-full",
    "p-2",
    "px-4",
    "text-sm",
    "bg-white",
    "cursor-pointer",
    "hover:bg-gray-200",
    "border-2",
    "select-none",
    "mr-8",
    "md:mr-10",
  ],
  btnNext: [
    "rounded-full",
    "p-2",
    "px-4",
    "text-sm",
    "bg-white",
    "cursor-pointer",
    "select-none",
    "hover:bg-gray-200",
    "border-2",
  ],
};

export default GroupButtons;
