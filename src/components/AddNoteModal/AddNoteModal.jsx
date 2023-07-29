import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";
import { useData } from "../../contexts/DataContext";
import { useState } from "react";

export function AddNoteModal({ mode, setShowNoteModal, videoId }) {
  const [note, setNote] = useState("");
  const { handleAddNote } = useData();

  const handleClick = (e) => {
    const clickedOn = e.target.closest("[data-modal]");

    if (!clickedOn) {
      setShowNoteModal(false);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center"
    >
      <div
        data-modal="modal"
        className="flex flex-col gap-4 min-w-[20%] max-w-[40%] bg-gray-700 p-4 rounded-lg z-20"
      >
        <div
          className="cursor-pointer self-end"
          onClick={() => setShowNoteModal(false)}
        >
          <CloseIcon size={18} />
        </div>

        <input
          type="text"
          placeholder="New note..."
          className="rounded-lg outline-none p-2 bg-gray-600"
          onChange={(e) => setNote(e.target.value)}
        />

        <button
          onClick={() => note.trim().length > 0 && handleAddNote(videoId, note)}
          className="bg-[#FF7551] rounded-lg p-2"
        >
          {mode === "add" ? "Add New Note" : "Edit Note"}
        </button>
      </div>
    </div>
  );
}
