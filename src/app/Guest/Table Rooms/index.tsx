import style from "./TableR.module.css";
import Image from "next/image";
import nextConfig from "../../../../next.config";

interface ExpenseDataType {
  rentID: number;
  roomID: number;
  RoomNum: number;
  amount: number;
  currency: number;
  Date: string;
}
const Table = (props: {
  ExpanseData: ExpenseDataType[];
  isLoading: boolean;
}) => {
  return (
    <div className={style.tableBorder}>
      <table className={style.tableGuest}>
        <thead>
          <tr className={style.tableHeadings}>
            <th>Reservation ID</th>
            <th>Date</th>
            <th>Total Amount</th>
            {/* <th>Currency</th> */}
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
      <td className={props.item.currency == 0 ? style.usdback : style.pkrback}>
        <p>
          {props.item.currency == 0 ? "$ " : "PKR "}
          {props.item.amount}
        </p>
      </td>
      <td>
        <Image
          className={style.trash}
          src={nextConfig.basePath + "/trash.svg"}
          width={25}
          height={25}
          alt={""}
        />
      </td>
      {/* <td>
        <p className={props.item.currency == 0 ? style.usdback : style.pkrback}>
          {props.item.currency == 0 ? "USD" : "PKR"}
        </p>
      </td> */}
    </tr>
  );
};

export default Table;
