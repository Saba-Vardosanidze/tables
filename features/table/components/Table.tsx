"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {useState} from "react";
import {Filter, Download, Market} from "@/features/images/svg";
import {User} from "../type/Type";

const columHelper = createColumnHelper<User>();

const colums = [
  columHelper.accessor("order_number", {
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
  //
  columHelper.accessor("status", {
    cell: (info) => info.getValue(),
    header: () => <span>სტატუსი</span>,
  }),
  //
  columHelper.accessor("date_created", {
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
  //
  columHelper.accessor("order_type", {
    cell: (info) => (
      <span className="text-[#D59A04] text-[12px]">{info.getValue()}</span>
    ),
    header: () => <span>მეთოდი</span>,
  }),
  //
  columHelper.accessor("amount_to", {
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
  //
  columHelper.accessor("amount_from", {
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

const Table = ({initialData}: {initialData: User[]}) => {
  const [data, setData] = useState<User[]>(initialData);

  const table = useReactTable<User>({
    data: data,
    columns: colums,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-[#121318] m-auto mt-[48px] p-[40px] rounded-[10px] w-full max-w-[792px] min-h-[658px]">
      <div className="flex justify-between items-center mb-[24px]">
        <p className="font-medium text-[#FFFFFF] text-[23px]">ტრანზაქციები</p>
        <div className="flex justify-between w-full max-w-[385px]">
          <button className="flex items-center gap-[10px] px-[10px] border border-[#9BA0B820] rounded-[5px] w-full max-w-[315px] min-h-[50px] cursor-pointer">
            <Filter width={24} height={24} />
            <p className="text-[#9295A6] text-[14px]">ფილტრი</p>
          </button>
          <button className="flex justify-center items-center border border-[#9BA0B820] rounded-[5px] w-full max-w-[50px] min-h-[50px] cursor-pointer">
            <Download width={24} height={24} />
          </button>
        </div>
      </div>
      <div>
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                className="py-[21px] border-[#9BA0B820] border-t border-b text-[#6C7080] text-[12px]"
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => (
                  <th className="py-[21px]" key={header.id}>
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
