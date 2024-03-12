import style from "./TableR.module.css";

interface ExpenseDataType {
  Date: string;
  RoomID: number;
  ExpenseItem: string;
  ExpenseAmount: number;
}
const Table = (props: { expenseData: ExpenseDataType[] }) => {
  return (
    <div className={style.tableBorder}>
      <table className={style.tableGuest}>
        <thead>
          <tr className={style.tableHeadings}>
            <th>Index</th>
            <th>Expense</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.expenseData.map((item, index) => {
            return <TableData key={index} index={index + 1} item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

const TableData = ({ index, item }: { index: number; item: any }) => {
  return (
    <tr className={style.tableData}>
      <td>{index}</td>
      <td>{item.ExpenseItem}</td>
      <td>{item.ExpenseAmount}</td>
    </tr>
  );
};

export default Table;
