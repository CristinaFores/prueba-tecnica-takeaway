import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ModalNote, Point, TextLine } from "../types/types";

interface StoreState {
  totalRegions: TextLine[];
  setTotalRegions: (totalRegions: TextLine[]) => void;
  noteModal: ModalNote;
  setNoteModal: (noteModal: ModalNote) => void;
  setNote: (note: string) => void;
  setOpen: (open: boolean) => void;
  setUpdateNote: (id: string, newNote: string) => void;
  setUpdatePolygonPoints: (id: string, updatedPoints: Point[]) => void;
}

export const useStore = create(
  persist<StoreState>(
    (set, get) => ({
      totalRegions: [],

      setTotalRegions: (regions: TextLine[]) =>
        set(() => {
          return { totalRegions: regions };
        }),
      setUpdatePolygonPoints: (id: string, updatedPoints: Point[]) =>
        set((state) => {
          const updatedTotalRegions = state.totalRegions.map((region) => {
            if (region.id === id) {
              return { ...region, points: updatedPoints };
            }
            return region;
          });
          return { totalRegions: updatedTotalRegions };
        }),

      noteModal: {
        open: false,
        textModal: "",
        note: "",
        regions: {
          regionId: "",
          id: "",
          text: "",
          points: [],
        },
      },
      setOpen: (open: boolean) =>
        set(() => {
          return { noteModal: { ...get().noteModal, open: open } };
        }),

      setNote: (note: string) =>
        set(() => {
          return { noteModal: { ...get().noteModal, note: note } };
        }),

      setNoteModal: (noteModal: ModalNote) =>
        set(() => {
          return { noteModal: noteModal };
        }),

      setUpdateNote: (id: string, newNote: string) =>
        set((state) => {
          const updatedTotalRegions = state.totalRegions.map((region) => {
            if (region.id === id) {
              return { ...region, note: newNote };
            }
            return region;
          });
          return { totalRegions: updatedTotalRegions };
        }),
    }),
    {
      name: "my-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
