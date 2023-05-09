import { useStore } from "../../store/store";
import useLoadData from "../../hooks/useLoadData";
import Regions from "../Regions/Regions";
import imageUrl from "/data/Albatross_vol009of055-050-0.jpg";

const AllRegions = () => {
  const totalRegions = useStore((state) => state.totalRegions);

  useLoadData();

  const handleRestore = () => {
    window.localStorage.removeItem("my-storage");
    window.location.reload();
  };
  return (
    <>
      <div className="bg-red flex flex-col items-center gap-4">
        <h2 className="text-2xl mt-2">Documento</h2>
        <span className="w-screen h-0.5 bg-gradient-to-r from-slate-300 to-primary-light"></span>

        <button
          className="bg-primary border-3 border-solid text-primary-light p-2 px-4 rounded-lg font-semibold focus:ring-2 focus:ring-black focus:outline-none hover:bg-primary-light hover:text-primary cursor-pointer hover:border-primary hover:border-3 hover:border-solid focus:hidden"
          onClick={handleRestore}
        >
          Restaurar
        </button>
      </div>
      <Regions imageUrl={imageUrl} pointsArray={totalRegions} />
    </>
  );
};

export default AllRegions;
