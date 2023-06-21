import React, { useEffect, useState, useRef } from "react";
import OrderDisplayModal from "../UI/OrderDisplayModal";

interface TableRowProps {
  tableNumber: string;
  orderId: string;
  status: boolean;
  orders: any;
  docId: string;
}

const Tablerow: React.FC<TableRowProps> = ({
  tableNumber,
  orderId,
  status,
  orders,
  docId,
}) => {
  const [showDrop, setShowDrop] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeDropdown = (e: any) => {
      if (!menuRef?.current?.contains(e.target)) {
        setShowDrop(false);
      }
    };

    document.addEventListener("click", closeDropdown);

    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  console.log(showOrder);

  return (
    <>
      <tr>
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
          <p>#{orderId}</p>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          {/* <div>
          <h4 className="text-gray-700 dark:text-gray-200">
            Content curating app
          </h4>
          <p className="text-gray-500 dark:text-gray-400">
            Brings all your news into one place
          </p>
        </div> */}
          <p>Table#{tableNumber}</p>
        </td>
        <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
              !status ? "bg-red-100/60" : "bg-emerald-100/60"
            } dark:bg-gray-800`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                !status ? "bg-red-500" : "bg-emerald-400"
              } `}
            ></span>

            <h2
              className={`text-sm font-normal ${
                !status ? "text-red-500" : "text-emerald-400"
              } `}
            >
              {!status ? "New Order" : "Processed"}
            </h2>
          </div>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          {/* <div>
          <h4 className="text-gray-700 dark:text-gray-200">
            Content curating app
          </h4>
          <p className="text-gray-500 dark:text-gray-400">
            Brings all your news into one place
          </p>
        </div> */}
          <p>Aisha Saddick</p>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button
            ref={menuRef}
            onClick={() => setShowDrop((prev) => !prev)}
            className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </button>

          {/* Dropdown  */}

          {showDrop && (
            <div className="absolute right-0 z-20 w-48 py-2 mt-2 z-999999999 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800">
              <a
                href="#"
                onClick={() => setShowOrder(true)}
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Show Order
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                view profile
              </a>

              {/* <hr className="border-gray-200 dark:border-gray-700 " /> */}
            </div>
          )}
        </td>
      </tr>
      <OrderDisplayModal
        modalOpen={showOrder}
        onModalClick={() => setShowOrder(false)}
        orders={orders}
        docId={docId}
      />
    </>
  );
};

export default Tablerow;
