interface RentDataTypeType {
  rentID: number;
  roomID: number;
  RoomNum: number;
  amount: number;
  currency: number;
  Date: string;
}

// Function to generate an array of dates
export function generateDates(
  startDateStr: string,
  endDateStr: string
): string[] {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  const dates: string[] = [];

  // Loop through each day from start to end date
  for (
    let currentDate = startDate;
    currentDate <= endDate;
    currentDate.setDate(currentDate.getDate() + 1)
  ) {
    dates.push(currentDate.toISOString().split("T")[0]);
  }

  return dates;
}
// Function to fill in missing dates in an array of RentDataTypeType objects
export function fillMissingDates(
  rentData: RentDataTypeType[],
  dates: string[]
): RentDataTypeType[] {
  const filledRentData: RentDataTypeType[] = [];
  let currentDateIndex = 0;

  // Convert dates in rentData to date strings without time
  const rentDates = rentData.map((rent) => rent.Date.split("T")[0]);

  // Loop through each date in the dates array
  for (const currentDate of dates) {
    // If the current date is found in rentData
    if (rentDates.includes(currentDate)) {
      // Add rent data for this date
      filledRentData.push(
        rentData.find((rent) => rent.Date.split("T")[0] === currentDate)!
      );
    } else {
      // If the current date is missing in rentData, add default rent data with all fields set to 0
      filledRentData.push({
        rentID: 0,
        roomID: 0,
        RoomNum: 0,
        amount: 0,
        currency: 0,
        Date: currentDate,
      });
    }
  }

  return filledRentData;
}
