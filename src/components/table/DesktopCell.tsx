import { allDigits } from "../../util/utils";

interface Props {
  content: string;
  id: string;
  handleBlur: (event: React.FocusEvent<HTMLTableCellElement>) => void;
}

const isDigitOrDecimal = (key: string) => key === "." || !isNaN(Number(key));
const allowedKeys = [
  "Backspace",
  "Tab",
  "ArrowLeft",
  "ArrowRight",
  "Escape",
  "Enter",
];

const keyPressHandler = (event: React.KeyboardEvent<HTMLTableCellElement>) => {
  if (!isDigitOrDecimal(event.key) && !allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
};

/* Restricts the user to enter characters, and blurs upon esc or enter */
// const keyPressHandler = (event: React.KeyboardEvent<HTMLTableCellElement>) => {
//   const target = event.target as HTMLTableCellElement;

//   x;

//   switch (event.key) {
//     case "Backspace":
//       break;

//     case "Enter":
//       event.preventDefault();
//       target.blur();
//       break;

//     case "Escape":
//       event.preventDefault();
//       target.blur();
//       break;

//     default:
//       if (!allDigits(event.key)) {
//         event.preventDefault();
//       }
//       break;
//   }
// };

function DesktopCell({ content, id, handleBlur }: Props) {
  return (
    <td
      onBlur={handleBlur}
      onKeyDown={keyPressHandler}
      id={id}
      contentEditable
      className="rows"
    >
      {content}
    </td>
  );
}

export default DesktopCell;
