import {createColumnHelper} from "@tanstack/react-table";
import {Market} from "@/features/images/svg";
import {User} from "../../type/type";

const columnHelper = createColumnHelper<User>();

export const colums = [
  columnHelper.accessor("order_number", {
    cell: (info) => (
      <span className="text-[#FFFFFF] text-[12px]">{info.getValue()}</span>
    ),
    header: () => (
      <span className="flex justify-center items-center">
        ნომერი
        <Market width={15} height={15} />
      </span>
    ),
  }),
  columnHelper.accessor("status", {
    cell: (info) => info.getValue(),
    header: () => <span>სტატუსი</span>,
  }),
  columnHelper.accessor("date_created", {
    cell: (info) => (
      <span className="text-[#FFFFFF] text-[12px]">{info.getValue()}</span>
    ),
    header: () => (
      <span className="flex justify-center items-center">
        თარიღი
        <Market width={15} height={15} />
      </span>
    ),
  }),
  columnHelper.accessor("order_type", {
    cell: (info) => (
      <span className="text-[#D59A04] text-[12px]">{info.getValue()}</span>
    ),
    header: () => <span>მეთოდი</span>,
  }),
  columnHelper.accessor("amount_to", {
    cell: (info) => (
      <span className="text-[#FFFFFF] text-[12px]">{info.getValue()}</span>
    ),
    header: () => (
      <span className="flex justify-center items-center">
        მიღებული თანხა
        <Market width={15} height={15} />
      </span>
    ),
  }),
  columnHelper.accessor("amount_from", {
    cell: (info) => (
      <span className="text-[#FFFFFF] text-[12px]">{info.getValue()}</span>
    ),
    header: () => (
      <span className="flex justify-center items-center">
        გადახდილი თანხა
        <Market width={15} height={15} />
      </span>
    ),
  }),
];
