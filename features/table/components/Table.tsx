"use client";
import {
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

const Table = ({initialData}: {initialData: User[]}) => {
  const [data] = useState<User[]>(initialData);
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable<User>({
    data,
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
    onSortingChange: setSorting,
  });

  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  const renderPageButtons = () => {
    const pages: (number | string)[] = [];

    if (pageCount <= 5) {
      for (let i = 0; i < pageCount; i++) pages.push(i);
    } else {
      if (pageIndex <= 1) {
        pages.push(0, 1, ".....", pageCount - 1);
      } else if (pageIndex >= pageCount - 2) {
        pages.push(0, ".....", pageCount - 2, pageCount - 1);
      } else {
        pages.push(
          0,
          ".....",
          pageIndex - 1,
          pageIndex,
          pageIndex + 1,
          ".....",
          pageCount - 1
        );
      }
    }

    return pages.map((page, index) =>
      page === "....." ? (
        <span
          key={`ellipsis-${index}`}
          className="flex justify-center items-center text-[#6C7080]"
        >
          .....
        </span>
      ) : (
        <button
          key={page}
          onClick={() => table.setPageIndex(Number(page))}
          className={`w-[30px] h-[30px] rounded-[10px] cursor-pointer text-sm flex items-center justify-center ${
            pageIndex === page ? "text-[#2B3144]" : "text-[#6C7080]"
          }`}
        >
          {Number(page) + 1}
        </button>
      )
    );
  };

  return (
    <div className="flex flex-col justify-between bg-[#121318] m-auto mt-[48px] p-[40px] rounded-[10px] w-full max-w-[792px] min-h-[658px]">
      <div>
        <div className="flex justify-between items-center mb-[24px]">
          <p className="font-medium text-[#FFFFFF] text-[23px] cursor-pointer">
            ტრანზაქციები
          </p>
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
                <td className="pt-[23px]">
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
        <div className="flex items-center gap-[5px]">
          <button
            className="flex justify-center items-center bg-[#0B0F16] disabled:bg-transparent mr-[15px] border border-[#D59A04] disabled:border-none rounded-[10px] w-[30px] h-[30px] text-[#D59A04] disabled:text-[#9295A6] cursor-pointer"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <PrevButton />
          </button>

          {renderPageButtons()}

          <button
            className="flex justify-center items-center bg-[#0B0F16] disabled:bg-transparent ml-[15px] border border-[#D59A04] disabled:border-none rounded-[10px] w-[30px] h-[30px] text-[#D59A04] disabled:text-[#9295A6] cursor-pointer"
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
