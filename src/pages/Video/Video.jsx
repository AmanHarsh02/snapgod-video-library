import { useParams } from "react-router";
import { useData } from "../../contexts/DataContext";
import {
  Note,
  VideoCard,
  AddNoteModal,
  AddOrCreatePlaylistModal,
} from "../../components/index";
import {
  BsStopwatch as WatchLaterIcon,
  BsFillStopwatchFill as WatchLaterActiveIcon,
} from "react-icons/bs";
import {
  MdPlaylistAdd as AddToPlaylistIcon,
  MdOutlineEditNote as AddNoteIcon,
} from "react-icons/md";
import { useEffect, useState } from "react";

export function Video() {
  const { videoId } = useParams();
  const { videos, mostWatchedVideos, handleWatchLater } = useData();
  const [showNoteModal, setShowNoteModal] = useState();
  const [showPlaylistModal, setShowPlaylistModal] = useState();

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, [videoId]);

  const selectedVideo = videos.find(({ _id }) => +_id === +videoId);

  const { title, src, creator, chips, saved, notes } = selectedVideo ?? "";

  return (
    <div>
      <h1>Player</h1>

      <div className="my-6 flex flex-col gap-4 lg:w-[70%]">
        <iframe
          className="w-[100%] min-h-[25rem] rounded-lg"
          src={src}
          title={title}
        ></iframe>

        <div className="flex items-center justify-between gap-4">
          <h3>{title}</h3>

          <div className="flex items-center gap-2">
            <div
              onClick={() => handleWatchLater(+videoId)}
              className="cursor-pointer p-2 rounded-full hover:bg-gray-700"
            >
              {saved ? (
                <WatchLaterActiveIcon size={24} />
              ) : (
                <WatchLaterIcon size={24} />
              )}
            </div>
            <div
              className="cursor-pointer p-2 rounded-full hover:bg-gray-700"
              onClick={() => setShowPlaylistModal(!showPlaylistModal)}
            >
              <AddToPlaylistIcon size={24} />
            </div>
            <div
              className="cursor-pointer p-2 rounded-full hover:bg-gray-700"
              onClick={() => setShowNoteModal(!showNoteModal)}
            >
              <AddNoteIcon size={24} />
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="my-6 flex flex-col gap-4">
          <h2>My Notes</h2>

          {notes?.length > 0 ? (
            <div>
              {notes.map((note, i) => {
                return <Note note={note} videoId={videoId} key={i} />;
              })}
            </div>
          ) : (
            <p>You've not added any notes yet! ⛔</p>
          )}
        </div>

        <hr></hr>
      </div>

      <h3>Most Watched</h3>

      {mostWatchedVideos.length > 0 && (
        <div className="my-6 flex gap-4 justify-center md:justify-start flex-wrap">
          {mostWatchedVideos.map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })}
        </div>
      )}

      {showNoteModal && (
        <AddNoteModal
          setShowNoteModal={setShowNoteModal}
          mode="add"
          videoId={videoId}
        />
      )}

      {showPlaylistModal && (
        <AddOrCreatePlaylistModal
          setShowPlaylistModal={setShowPlaylistModal}
          mode="add"
          videoId={videoId}
        />
      )}
    </div>
  );
}
