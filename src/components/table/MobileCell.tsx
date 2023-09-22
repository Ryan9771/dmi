import { allDigits } from "../../util/utils";

interface Props {
  content: string;
  id: string;
  handleBlur: (event: React.FocusEvent<HTMLTableCellElement>) => void;
}

/* Restricts the user to enter characters, and blurs upon esc or enter */
const keyPressHandler = (event: React.KeyboardEvent<HTMLTableCellElement>) => {
  const target = event.target as HTMLTableCellElement;

  switch (event.key) {
    case "Backspace":
      break;

    case "Enter":
      event.preventDefault();
      target.blur();
      break;

    case "Escape":
      event.preventDefault();
      target.blur();
      break;

    default:
      if (!allDigits(event.key)) {
        event.preventDefault();
      }
      break;
  }
};

function MobileCell({ content, id, handleBlur }: Props) {
  return (
    <td
      onBlur={handleBlur}
      onKeyDown={keyPressHandler}
      id={id}
      contentEditable
      className="rows-mobile"
    >
      {content}
    </td>
  );
}

export default MobileCell;
