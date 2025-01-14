import PropTypes from "prop-types";
import "./styles.scss";
Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <div className="album">
      <div className="album__imageURL">
        <img src={album.imageURL} alt={album.name}></img>
      </div>
      <p className="album__name">{album.name}</p>
    </div>
  );
}

export default Album;
