import * as fileHelper from "@/app/utils/FileHelper";

export default async function EasterEgg() {
  const videos = await fileHelper.readDir("/video");
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {videos &&
        videos.map((video) => (
          <video key={video} src={`/video/` + video} playsInline controls />
        ))}
    </div>
  );
}
