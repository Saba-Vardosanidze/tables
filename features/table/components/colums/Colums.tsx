import {createColumnHelper} from "@tanstack/react-table";
import {Market} from "@/features/images/svg";
import {User} from "../../type/type";

const columnHelper = createColumnHelper<User>();

export const colums = [
  columnHelper.accessor("order_number", {
    cell: (info) => (
      <span className="flex text-[#FFFFFF] text-[12px]">{info.getValue()}</span>
    ),
    header: () => (
      <span className="flex items-center">
        ნომერი
        <Market width={15} height={15} />
      </span>
    ),
  }),
  columnHelper.accessor("status", {
    cell: (info) => (
      <div className="flex flex-col items-center">
        <span className="bg-[#080B0F] px-[10px] py-[3px] rounded-[5px] text-[10px] text-center">
          {info.getValue()}
        </span>
      </div>
    ),
    header: () => <span>სტატუსი</span>,
  }),
  columnHelper.accessor("date_created", {
    cell: (info) => (
      <span className="text-[#FFFFFF] text-[12px]">{info.getValue()}</span>
    ),
    header: () => (
      <span className="flex items-center">
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
      <span className="flex items-center">
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
      <span className="flex items-center">
        გადახდილი თანხა
        <Market width={15} height={15} />
      </span>
    ),
  }),
];
