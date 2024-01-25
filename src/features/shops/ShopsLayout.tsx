import BackButton from "../../ui/BackButton";
import Loader from "../../ui/Loader";
import NewShopModal from "./NewShopModal";
import ShopItem from "./ShopItem";
import { useAllShops } from "./useAllShops";

export default function ShopsLayout() {
  const { shops, isLoadingShops, errorShops } = useAllShops();
  if (isLoadingShops) return <Loader />;
  if (errorShops) return <div>{errorShops.message}</div>;
  if (!shops) return <div>Something went wrong</div>;
  console.log(shops);
  return (
    <>
      <div className="flex justify-between items-start mt-3 mb-4">
        <div className="flex space-x-2">
          <BackButton />
          <h3 className="font-medium text-lg text-orange-500">Shops</h3>
        </div>
        <NewShopModal />
      </div>
      {shops.length < 1 ? (
        <div>No Shops</div>
      ) : (
        <>
          {shops.map((shop, index) => (
            <ShopItem key={index} shop={shop} />
          ))}
        </>
      )}
    </>
  );
}
