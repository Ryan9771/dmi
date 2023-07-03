interface Props {
  content: string;
  id: string;
  handleBlur: (event: React.FocusEvent<HTMLTableCellElement>) => void;
}

function DesktopCell({ content, id, handleBlur }: Props) {
  return (
    <td
      onBlur={handleBlur}
      key={Math.random()}
      id={id}
      contentEditable
      className="rows"
    >
      {content}
    </td>
  );
}

export default DesktopCell;
