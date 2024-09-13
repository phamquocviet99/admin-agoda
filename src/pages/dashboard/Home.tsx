import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import CardStatisticHome from "./componentHomes/CardStatisticHome";
export default function Home() {
  return (
    <div>
      <div className="w-full grid grid-cols-4 gap-6 mt-10">
        <CardStatisticHome
          value="$100k"
          icon={<FaCameraRetro />}
          title="Tổng tiền hôm nay"
          percent={5}
          text=" hơn hôm qua"
        />
        <CardStatisticHome
          value="2,300"
          icon={<FaCameraRetro />}
          title="Người dùng hôm nay"
          percent={5}
          text="123"
        />
        <CardStatisticHome
          value="$100k"
          icon={<FaCameraRetro />}
          title="Nè nè"
          percent={5}
          text="123"
        />
        <CardStatisticHome
          value="$100k"
          icon={<FaCameraRetro />}
          title="Nè nè"
          percent={5}
          text="123"
        />
      </div>
    </div>
  );
}
