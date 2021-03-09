import 'react-app-polyfill/stable'

import './styles/index.css';
import {StrictMode} from 'react';
import {render} from 'react-dom';

// import App from './containers/App/App';

const songs = [
  {
    id: 'song-kwez',
    title: 'lonewolf',
    artist: 'Emdi x Coorby',
    song: '?',
    cover: 'data:image/jpeg;base64,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',
    active: true,
    color: '#D98779 #F7DB9D'.split(' '),
    albumClass: 'song-figure'
  },
];

function renderAlbumFigure({albumClass, cover, song, color, active}) {
  return active ? (
    <figure className={albumClass}>
      <img src={cover} alt=""/>
      <figcaption>
        <div>
          <a href={song} download={true}>download mp3</a>
        </div>
        <span>
          앨범의 컬러 개수 : <b>{color.length}</b>
        </span>
      </figcaption>
    </figure>
  ) : null;
}

const albumElement = (() => ({title, artist, ...figureInfo}) => {
  let figInfo = {
    ...figureInfo,
    active: false
  }

  
  const styleObject = {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'flexDirection': 'column',
    'textAlign': 'center'
  }

  return <div className = "song-container" lang="en" style={styleObject}>
    <h1 className="song-info">{`${title} -> ${artist}`}</h1>
    {renderAlbumFigure(figInfo)}
  </div>
})();

render(
  <StrictMode>
    {/* <App /> */}
    {albumElement(songs[0])}
  </StrictMode>,
  document.getElementById('root')
);
