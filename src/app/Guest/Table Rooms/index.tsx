import style from "./TableR.module.css";

interface ExpenseDataType {
  rentID: number;
  roomID: number;
  RoomNum: number;
  amount: number;
  currency: number;
  Date: string;
}
const Table = (props: { ExpanseData: ExpenseDataType[] }) => {
  return (
    <div className={style.tableBorder}>
      <table className={style.tableGuest}>
        <thead>
          <tr className={style.tableHeadings}>
            <th>Reservation ID</th>
            <th>Date</th>
            <th>Total Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {props.ExpanseData.map((item, index) => (
            <TableData key={index} item={item} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableData = (props: { index: number; item: ExpenseDataType }) => {
  const date = new Date(props.item.Date);

  const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${date.getFullYear()}`;

  return (
    <tr className={style.tableData}>
      <td>{props.index}</td>
      <td>{formattedDate}</td>
      <td>{props.item.amount}</td>
      <td>{props.item.currency == 0 ? "USD" : "PKR"}</td>
    </tr>
  );
};

export default Table;
