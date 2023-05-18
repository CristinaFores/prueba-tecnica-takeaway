import { useEffect } from "react";

import { useStore } from "../store/store";
import searchKeysObject from "../utils/searchKeysObject";
import { TextLine } from "../types/types";

const useLoadData = async () => {
  const { setTotalRegions, totalRegions } = useStore((state) => state);

  useEffect(() => {
    const fetchData = async () => {
      if (totalRegions.length > 0) return;

      const url = "/data/albatross.json";
      try {
        const response = await fetch(url);
        const data = await response.json();

        const table = searchKeysObject(data, "text_lines");

        const tableTranformObject: TextLine = Object.assign({}, ...table);

        const allRegions: TextLine[] = Object.entries(tableTranformObject).map(
          ([key, value]) => {
            return {
              regionId: key,
              id: value?.id,
              text: value.text,
              points: value.contour?.exterior,
            };
          }
        );

        const totalRegions = [...allRegions];

        setTotalRegions(totalRegions);
      } catch (error: unknown) {
        setTotalRegions([]);
      }
    };

    fetchData();
  }, [setTotalRegions]);
};

export default useLoadData;
