import * as Form from "@radix-ui/react-form";
import "tailwindcss/tailwind.css";
import { useStore } from "../../store/store";
import { useState } from "react";

interface FormWithNotesProps {
  initialText: string;
}

const FormWithNotes: React.FC<FormWithNotesProps> = ({ initialText }) => {
  const { noteModal, setNote, setOpen } = useStore((state) => state);

  const handleAddNote = (newNote: string) => {
    setNote(newNote);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setModalVisible(false);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const handleModalClick = () => {
    setModalVisible(true);
  };

  return (
    <div>
      {!modalVisible && (
        <button
          className="text-textColor-violet font-semibold text-2xl
                 focus:ring-2 focus:ring-black focus:outline-none cursor-pointer
                 hover:bg-backgroundColor-mauve hover:underline 
                 scale-[2]"
          onClick={handleModalClick}
        >
          Abrir Nota
        </button>
      )}
      {modalVisible && (
        <Form.Root
          className="fixed z-10  top-1/2 left-1/2  transform -translate-x-1/5 -translate-y-32 bg-blackA5 p-6 w-screen rounded border border-solid border-textColor-violet bg-white scale-[2] "
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.target as HTMLFormElement);
            const newNote = formData.get("note") as string;
            handleAddNote(newNote);
          }}
        >
          <div className="flex items-start justify-between space-x-4 mt-4 ">
            <h3 className="mb-4 text-textColor-violet  font-semibold text-lg">
              {initialText}
            </h3>
            <button
              className="Button bg-red-500 text-white py-2 px-4 rounded font-semibold focus:ring-2 focus:ring-black focus:outline-none"
              type="button"
              onClick={handleCloseModal}
            >
              X
            </button>
          </div>
          <div className="mb-4">
            <p className="text-primary-dark ">{noteModal.note}</p>
          </div>

          <Form.Field className="FormField mb-4" name="note">
            <div className="flex items-baseline justify-between">
              <Form.Label className="FormLabel text-textColor-violet font-semibold text-lg">
                Add a note
              </Form.Label>
              <Form.Message
                className="FormMessage text-textColor-violet text-sm"
                match="valueMissing"
              >
                Please enter a note
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="Input bg-blackA5 w-full px-4 py-2 rounded border-2 border-blackA9 focus:border-black text-backgroundColor-mauve"
                type="text"
                required
              />
            </Form.Control>
          </Form.Field>

          <div className="flex justify-end space-x-4 mt-4">
            <Form.Submit asChild>
              <button className="Button inline-flex items-center justify-center rounded p-0 px-4 h-9 w-full bg-white text-violet-600 shadow-md hover:bg-backgroundColor-mauve focus:ring-2 focus:ring-black focus:outline-none font-semibold text-lg">
                Save note
              </button>
            </Form.Submit>
          </div>
        </Form.Root>
      )}
    </div>
  );
};

export default FormWithNotes;
