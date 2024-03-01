interface RoomData {
  name: string;
  roomNo: number;
  totalAmount: number;
  currency: string;
  status: string;
}

export const data: RoomData[] = [
  {
    name: "Alexandar",
    roomNo: 501,
    totalAmount: 22000,
    currency: "PKR",
    status: "Paid",
  },
  {
    name: "Ali",
    roomNo: 601,
    totalAmount: 92,
    currency: "$",
    status: "Paid",
  },
  {
    name: "Haider",
    roomNo: 501,
    totalAmount: 18000,
    currency: "PKR",
    status: "Paid",
  },
  {
    name: "Hamza",
    roomNo: 601,
    totalAmount: 23000,
    currency: "PKR",
    status: "Paid",
  },
  {
    name: "Khalil",
    roomNo: 501,
    totalAmount: 70,
    currency: "$",
    status: "Paid",
  },
];
