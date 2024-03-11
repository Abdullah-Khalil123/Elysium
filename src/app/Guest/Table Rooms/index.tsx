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
            <th>Name</th>
            <th>Room Number</th>
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
  return (
    <tr className={style.tableData}>
      <td>{props.index}</td>
      <td>{}</td>
      <td>{props.item.RoomNum}</td>
      <td>{props.item.amount}</td>
      <td>{props.item.currency == 0 ? "PKR" : "USD"}</td>
    </tr>
  );
};

export default Table;
