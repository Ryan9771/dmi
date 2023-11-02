interface Props {
  content: string;
  id: string;
  handleBlur: (event: React.FocusEvent<HTMLTableCellElement>) => void;
}

/* Restricts user to not type alphabets */
/* TODO: Fix entering multiple decimal & length bug */
const keyPressHandler = (event: React.KeyboardEvent<HTMLTableCellElement>) => {
  const isDigitOrDecimal = (key: string) => key === "." || !isNaN(Number(key));
  const allowedKeys = [
    "Backspace",
    "Tab",
    "ArrowLeft",
    "ArrowRight",
    "Escape",
    "Enter",
  ];

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "a") {
    // Allow Ctrl + A or Cmd + A
  } else if (!isDigitOrDecimal(event.key) && !allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
};

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
