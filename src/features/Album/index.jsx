import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature() {
  const albumList = [
    {
      id: 1,
      name: "Ballad Việt được remix",
      imageURL:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/1/3/9/0139b1f71ed807473a500a6a37695c65.jpg",
    },
    {
      id: 2,
      name: "Khi những bản nhạc cũ",
      imageURL:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/8/2/4/88247ce8f0f1aadb7062a7c9fda9292f.jpg",
    },
    {
      id: 3,
      name: "Chẳng có nơi nào yên",
      imageURL:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/6/3/c/563c55e95676e8d79eaa784cafdb8697.jpg",
    },
  ];

  return (
    <div>
      <h2>Tâm trạng tan chậm</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
