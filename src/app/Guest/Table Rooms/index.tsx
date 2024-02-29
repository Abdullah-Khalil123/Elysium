import { data } from "@/Data/guest";
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
            <th>Reservation ID</th>
            <th>Name</th>
            <th>Room Number</th>
            <th>Total Amount</th>
            <th>Currency</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,index)=>{
              return <TableData key={index} item={item} index={index+1}/>
            })
          }
        </tbody>
      </table>
    </div>
  );
};

const TableData:React.FC<MyComponentProps>=({index,item})=> {
  return (
    <tr className={style.tableData}>
      <td>{index}</td>
      <td>{item.name}</td>
      <td>{item.roomNo}</td>
      <td>{item.totalAmount}</td>
      <td>{item.currency}</td>
      <td>{item.status}</td>
    </tr>
  );
}

export default Table;
