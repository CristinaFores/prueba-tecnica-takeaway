import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ModalNote, TextLine } from "../types/types";

interface StoreState {
  totalRegions: TextLine[];
  setTotalRegions: (totalRegions: TextLine[]) => void;
  noteModal: ModalNote;
  setNoteModal: (noteModal: ModalNote) => void;
  setNote: (note: string) => void;
  setOpen: (open: boolean) => void;
}

export const useStore = create(
  persist<StoreState>(
    (set, get) => ({
      totalRegions: [],
      setTotalRegions: (regions: TextLine[]) =>
        set(() => {
          return { totalRegions: regions };
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
    }),
    {
      name: "my-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
