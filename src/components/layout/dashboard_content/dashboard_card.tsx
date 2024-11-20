import { cardData } from "../../data/card_data";

function DashboardCard() {
  return (
    <div className="flex flex-wrap gap-4 w-full">
      {cardData.map((card) => (
        <div className="shadow-md bg-white rounded-md w-full sm:w-[48%] xl:w-[23.7%] h-[182px] p-6">
        <img
          className="bg-white shadow-md rounded-xl mb-4"
          src={card.image}
          alt={card.name}
        />
        <p className="text-[14px] font-normal leading-5">{card.name}</p>
        <h2 className="text-[30px] font-semibold leading-[41.1px]">{card.total}</h2>
      </div>
      ))}
    </div>
  );
}

export default DashboardCard;
