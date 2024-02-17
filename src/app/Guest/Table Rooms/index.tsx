import style from "./TableR.module.css";

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
          <TableData />
          <TableData />
          <TableData />
          <TableData />
          <TableData />
          <TableData />
        </tbody>
      </table>
    </div>
  );
};

function TableData() {
  return (
    <tr className={style.tableData}>
      <td>#5644</td>
      <td>Alexander</td>
      <td>501</td>
      <td>PKR 18000</td>
      <td>$/PKR</td>
      <td>PAID</td>
    </tr>
  );
}

export default Table;
