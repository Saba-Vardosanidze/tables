"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {useState} from "react";
import {
  Filter,
  Download,
  NextButton,
  PrevButton,
  ShareButton,
} from "@/features/images/svg";
import {User} from "../type/type";
import {colums} from "./colums/Colums";

const columHelper = createColumnHelper<User>();

const Table = ({initialData}: {initialData: User[]}) => {
  const [data, setData] = useState<User[]>(initialData);
  const [sorting, setSortingt] = useState<SortingState>([]);

  const table = useReactTable<User>({
    data: data,
    columns: colums,
    state: {
      sorting,
    },
    initialState: {
      pagination: {
        pageSize: 8,
      },
    },
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSortingt,
  });

  return (
    <div className="flex flex-col justify-between bg-[#121318] m-auto mt-[48px] p-[40px] rounded-[10px] w-full max-w-[792px] min-h-[658px]">
      <div>
        <div className="flex justify-between items-center mb-[24px]">
          <p className="font-medium text-[#FFFFFF] text-[23px]">ტრანზაქციები</p>
          <div className="flex justify-between w-full max-w-[385px]">
            <button className="flex items-center gap-[10px] px-[10px] border border-[#9BA0B820] rounded-[5px] w-full max-w-[315px] min-h-[50px] cursor-pointer">
              <Filter className="text-[#9295A6]" width={24} height={24} />
              <p className="text-[#9295A6] text-[14px]">ფილტრი</p>
            </button>
            <button className="flex justify-center items-center border border-[#9BA0B820] rounded-[5px] w-full max-w-[50px] min-h-[50px] cursor-pointer">
              <Download className="text-[#343C44]" width={24} height={24} />
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                className="border-[#9BA0B820] border-t border-b text-[#6C7080] text-[12px]"
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
                  <td className="pt-[20px]" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                <td>
                  <button>
                    <ShareButton className="text-[#6C7080] cursor-pointer" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-row justify-between items-center mt-4 text-gray-700">
        <div className="flex gap-[3px] text-[#6C7080]">
          <p>{initialData.length}</p>
          <p>ჩანაწერი</p>
        </div>
        <div className="flex items-center gap-[20px]">
          <button
            className="flex justify-center items-center bg-[#0B0F16] disabled:bg-transparent border border-[#D59A04] disabled:border-none rounded-[10px] w-[30px] h-[30px] text-[#D59A04] disabled:text-[#9295A6] cursor-pointer"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <PrevButton />
          </button>
          <div className="flex justify-between">
            <div className="flex justify-center items-center w-[30px] text-[#2B3144]">
              {table.getState().pagination.pageIndex + 1}
            </div>
            <div className="flex justify-center items-center w-[30px]">
              .....
            </div>
            <span className="flex justify-center items-center w-[30px] text-[#6C7080] text-[16px]">
              {table.getPageCount()}
            </span>
          </div>
          <button
            className="flex justify-center items-center bg-[#0B0F16] disabled:bg-transparent border border-[#D59A04] disabled:border-none rounded-[10px] w-[30px] h-[30px] text-[#D59A04] disabled:text-[#9295A6] cursor-pointer"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <NextButton />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
