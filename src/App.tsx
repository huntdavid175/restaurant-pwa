import { useEffect, useState } from "react";
import Header from "./components/Header";
import OrderTable from "./components/Table/OrderTable";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase.config";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "orders"), orderBy("timeStamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapShot) => {
      const orders: any = [];
      querySnapShot.forEach((doc) => {
        orders.push(doc.data());
      });
      setData(orders);
    });

    return () => unsubscribe();
  }, []);

  console.log(data);
  return (
    <>
      <Header title="Tab1" />
      <div className="flex flex-col p-4">
        <OrderTable orders={data} />
      </div>
    </>
  );
}

export default App;
