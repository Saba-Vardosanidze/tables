import {createColumnHelper} from "@tanstack/react-table";
import {Market} from "@/features/images/svg";
import {User} from "../../type/type";

const columnHelper = createColumnHelper<User>();

export const colums = [
  columnHelper.accessor("order_number", {
    cell: (info) => (
      <span className="flex text-[#FFFFFF] text-[12px]">{info.getValue()}</span>
    ),
    header: ({column}) => (
      <button
        onClick={column.getToggleSortingHandler()}
        className="flex items-center cursor-pointer"
      >
        ნომერი
        <Market className="text-[#9295A6]" width={15} height={15} />
      </button>
    ),
  }),
  columnHelper.accessor("status", {
    cell: (info) => {
      const value = info.getValue();

      const TextColor =
        value === "Completed"
          ? "text-[#03A66D]"
          : value === "Wallet Declined"
          ? "text-[#E74C3C]"
          : value === "Commission Review"
          ? "text-[#D59A04]"
          : "text-[#9BA0B8]";

      return (
        <div className="flex flex-col items-center">
          <span
            className={`${TextColor} bg-[#080B0F] px-[10px] py-[3px] rounded-[5px] text-[10px] text-center`}
          >
            {value}
          </span>
        </div>
      );
    },
    header: () => <span className="cursor-pointer">სტატუსი</span>,
  }),
  columnHelper.accessor("date_created", {
    cell: (info) => (
      <span className="text-[#FFFFFF] text-[12px]">{info.getValue()}</span>
    ),
    header: ({column}) => (
      <button
        onClick={column.getToggleSortingHandler()}
        className="flex items-center cursor-pointer"
      >
        თარიღი
        <Market className="text-[#9295A6]" width={15} height={15} />
      </button>
    ),
  }),
  columnHelper.accessor("order_type", {
    cell: (info) => (
      <span className="text-[#D59A04] text-[12px]">{info.getValue()}</span>
    ),
    header: () => (
      <span className="flex justify-start cursor-pointer">მეთოდი</span>
    ),
  }),
  columnHelper.accessor("amount_to", {
    cell: (info) => (
      <span className="text-[#FFFFFF] text-[12px]">{info.getValue()}</span>
    ),
    header: ({column}) => (
      <button
        onClick={column.getToggleSortingHandler()}
        className="flex items-center cursor-pointer"
      >
        მიღებული თანხა
        <Market className="text-[#9295A6]" width={15} height={15} />
      </button>
    ),
  }),
  columnHelper.accessor("amount_from", {
    cell: (info) => (
      <span className="text-[#FFFFFF] text-[12px]">{info.getValue()}</span>
    ),
    header: ({column}) => (
      <button
        onClick={column.getToggleSortingHandler()}
        className="flex items-center cursor-pointer"
      >
        გადახდილი თანხა
        <Market className="text-[#9295A6]" width={15} height={15} />
      </button>
    ),
  }),
];
