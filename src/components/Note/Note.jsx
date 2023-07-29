import { BiEditAlt as EditIcon } from "react-icons/bi";
import { MdDeleteOutline as DeleteIcon } from "react-icons/md";
import { useData } from "../../contexts/DataContext";
import { useState } from "react";
import { AddNoteModal } from "../AddNoteModal/AddNoteModal";

export function Note({ note, videoId }) {
  const { handleNotes } = useData();
  const [showNoteModal, setShowNoteModal] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <p>{note.note}</p>
      <div className="flex">
        <div
          className="cursor-pointer p-2 rounded-full hover:bg-gray-700"
          onClick={() => setShowNoteModal(true)}
        >
          <EditIcon />
        </div>
        <div
          className="cursor-pointer p-2 rounded-full hover:bg-gray-700"
          onClick={() => handleNotes(videoId, note, "delete")}
        >
          <DeleteIcon />
        </div>
      </div>

      {showNoteModal && (
        <AddNoteModal
          setShowNoteModal={setShowNoteModal}
          mode="edit"
          note={note}
          videoId={videoId}
        />
      )}
    </div>
  );
}
