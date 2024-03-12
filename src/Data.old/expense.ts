interface ExpenseDataType {
  expense_name: string;
  expense_amount: number;
}

export const ExpenseData: ExpenseDataType[] = [
  { expense_name: "Electricity", expense_amount: 3000 },

  { expense_name: "Gas", expense_amount: 3000 },

  { expense_name: "Intenet", expense_amount: 3000 },
];
