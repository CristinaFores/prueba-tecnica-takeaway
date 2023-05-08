import { useStore } from "../../store/store";
import useLoadData from "../../hooks/useLoadData";
import Regions from "../Regions/Regions";

const AllRegions = () => {
  const imageUrl = "src/data/Albatross_vol009of055-050-0.jpg";
  const totalRegions = useStore((state) => state.totalRegions);

  useLoadData();

  return (
    <>
      <div className="bg-red flex flex-col items-center">
        <h2 className="text-2xl px-2 py-2 mb-1">Documento</h2>
        <span className="w-screen h-0.5 bg-gradient-to-r from-slate-300 to-primary-light"></span>
      </div>
      <Regions imageUrl={imageUrl} pointsArray={totalRegions} />
    </>
  );
};

export default AllRegions;
