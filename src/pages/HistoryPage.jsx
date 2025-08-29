import { HistoryItem } from "@/components/HistoryItem";
import { SignedInPage } from "@/components/guard/SignedInPage";
import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const HistoryPage = () => {
  const [transactions, setTransactions] = useState([]);

  const userSelector = useSelector((state) => state.user);

  const fetchTransactionHistory = async () => {
    try {
      const historyResponse = await axiosInstance.get("/transactions", {
        params: {
          userId: userSelector.id,
        },
      });

      setTransactions(historyResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransactionHistory();
  }, []);

  return (
    <SignedInPage>
      <main className="min-h-screen max-w-screen-lg mx-auto px-4 mt-8">
        <h1 className="text-3xl font-bold">My Orders</h1>

        <div className="flex flex-col mt-8 gap-24">
          {transactions.map((transaction) => {
            return (
              <HistoryItem
                id={transaction.id}
                totalPrice={transaction.totalPrice}
                tax={transaction.tax}
                transactionDate={format(
                  new Date(transaction.transactionDate),
                  "dd MMM yyyy"
                )}
                items={transaction.items}
              />
            );
          })}
        </div>
      </main>
    </SignedInPage>
  );
};

export default HistoryPage;
