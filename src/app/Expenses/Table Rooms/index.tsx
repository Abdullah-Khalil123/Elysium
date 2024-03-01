import { ExpenseData } from "@/Data/expense";
import style from "./TableR.module.css";

interface MyComponentProps {
  index: number;
  item: any;
}

const Table = () => {
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
          {ExpenseData.map((item, index) => {
            return <TableData key={index} item={item} index={index + 1} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

const TableData: React.FC<MyComponentProps> = ({ index, item }) => {
  return (
    <tr className={style.tableData}>
      <td>{index}</td>
      <td>{item.expense_name}</td>
      <td>{item.expense_amount}</td>
    </tr>
  );
};

export default Table;
