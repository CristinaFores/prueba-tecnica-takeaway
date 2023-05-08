import axios from "axios";
import { useEffect } from "react";

import { useStore } from "../store/store";
import { TableRegions, TextLine, TextResponse } from "../types/types";

const useLoadData = async () => {
  const { setTotalRegions, setNoteModal } = useStore((state) => state);

  useEffect(() => {
    const fetchData = async () => {
      const url = "src/data/albatross.json";
      try {
        const {
          data: { table_regions, text_regions },
        } = await axios.get(url!);

        const jsonData = await {
          tableRegions1: table_regions.Table_1653668823938_59.table_cells!,
          tableRegions2: table_regions.Table_1653671262363_267.table_cells!,
          textRegions:
            text_regions["textregion_Albatross_vol009of055-050-0"].text_lines,
        };

        const textRegions = jsonData.textRegions as TextResponse;
        const tableRegions = jsonData.tableRegions1 as TableRegions;
        const tableRegions2 = jsonData.tableRegions2 as TableRegions;

        const textLine: TextLine[] = Object.entries(textRegions).map(
          ([key, value]) => {
            return {
              regionId: key,
              id: value?.id,
              text: value.text,
              points: value.contour?.exterior,
            };
          }
        );

        const tableList = (regions: TableRegions) => {
          const textLinesWithContour = Object.values(regions)
            .map((cell: TableRegions) => Object.values(cell.text_lines))
            .flat()

            .filter((textLine) => textLine!.hasOwnProperty("contour"))
            .map((textLine) => {
              return {
                regionId: textLine.id,
                id: textLine.id,
                text: textLine.text,
                points: textLine.contour?.exterior,
              };
            });

          return textLinesWithContour;
        };

        const table1 = tableList(tableRegions);
        const table2 = tableList(tableRegions2);
        const totalRegions = [...table1, ...table2, ...textLine];

        setTotalRegions(totalRegions);
      } catch (error: unknown) {
        setNoteModal({
          open: true,
          textModal: "Error: " + (error as Error).message,
        });
      }
    };

    fetchData();
  }, [setTotalRegions]);
};

export default useLoadData;
