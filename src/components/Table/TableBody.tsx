import React from "react";

interface TableBodyProps {
  children: React.ReactNode;
}

const Tablebody: React.FC<TableBodyProps> = ({ children }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
      {children}
    </tbody>
  );
};

export default Tablebody;
