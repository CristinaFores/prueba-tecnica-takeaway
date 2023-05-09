import { useEffect } from "react";
import { TableRegions, TextLine, TextResponse } from "../types/types";
import { useStore } from "../store/store";

const useLoadData = async () => {
  const { setTotalRegions, totalRegions } = useStore((state) => state);

  useEffect(() => {
    const fetchData = async () => {
      if (totalRegions.length > 0) return;

      const url = "src/data/albatross.json";
      try {
        const response = await fetch(url);
        const data = await response.json();

        const { table_regions, text_regions } = data;

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
            .map((cell: TableRegions) =>
              cell?.text_lines ? Object.values(cell.text_lines) : []
            )
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
        setTotalRegions([]);
      }
    };

    fetchData();
  }, [setTotalRegions]);
};

export default useLoadData;
