"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {useState} from "react";
import {Filter, Download} from "@/features/images/svg";
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
                  <td className="py-[10px]" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex sm:flex-row flex-col justify-between items-center mt-4 text-gray-700 text-sm">
          <div className="flex items-center space-x-2">
            <button
              className="bg-gray-100 hover:bg-gray-200 disabled:opacity-50 p-2 rounded-md text-gray-600"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            ></button>

            <span className="flex items-center">
              <input
                min={1}
                max={table.getPageCount()}
                type="number"
                value={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                className="p-2 border border-gray-300 rounded-md w-16 text-center"
              />
              <span className="ml-1">of {table.getPageCount()}</span>
            </span>

            <button
              className="bg-gray-100 hover:bg-gray-200 disabled:opacity-50 p-2 rounded-md text-gray-600"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
