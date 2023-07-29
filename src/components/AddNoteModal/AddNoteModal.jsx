import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";
import { useData } from "../../contexts/DataContext";
import { useEffect, useState } from "react";

export function AddNoteModal({
  mode,
  setShowNoteModal,
  videoId,
  note: existingNote,
}) {
  const [note, setNote] = useState("");
  const { handleNotes } = useData();

  useEffect(() => {
    mode === "edit" && setNote(existingNote?.note);
  }, []);

  const handleClick = (e) => {
    const clickedOn = e.target.closest("[data-modal]");

    if (!clickedOn) {
      setShowNoteModal(false);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-black bg-opacity-20 backdrop-blur-sm z-20"
    >
      <div
        data-modal="modal"
        className="flex flex-col gap-4 min-w-[20%] md:max-w-[40%] bg-gray-700 p-4 rounded-lg"
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
          value={note}
          className="rounded-lg outline-none p-2 bg-gray-600"
          onChange={(e) => setNote(e.target.value)}
        />

        <button
          onClick={() => {
            if (note.trim().length > 0) {
              mode === "add"
                ? handleNotes(videoId, note, "add")
                : handleNotes(videoId, { ...existingNote, note: note }, "edit");
              setShowNoteModal(false);
            }
          }}
          className="bg-[#FF7551] rounded-lg p-2"
        >
          {mode === "add" ? "Add New Note" : "Edit Note"}
        </button>
      </div>
    </div>
  );
}
