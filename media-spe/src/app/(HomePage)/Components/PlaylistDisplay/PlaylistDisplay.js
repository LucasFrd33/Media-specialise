'use client'

import style from './playlistDisplay.module.scss'
import { useState } from 'react';
import Reader from '../Reader/Reader';

function PlaylistDisplay({ lastArt }) {
  const artType = lastArt.type;
  const artMiniature = lastArt.miniatureArticle;

  const [isPlaying, setIsPlaying] = useState(false);

  function handleClickEvent(event, data) {
    // click event object, 'Hello from child'
    setIsPlaying(false);
  }

  return (
    <div className={style.playlistDisplay}>
      <section className={style.titles}>
        <h2 className={style.sectionTitle}>{(artType == "podcast" ? "À écouter en voirure" : (artType == "short" ? "La pozz pipi" : (artType == "video" ? "Soirée posée" : "Les articles")))}</h2>
        <h3 className={style.type}>{lastArt.type}</h3>
      </section>

      <img className={style.miniature} src={`data:image/jpeg;base64,${artMiniature}`} />
      <button className={style.button} onClick={() => setIsPlaying(true)}>Lire les {artType}</button>

      
      {(isPlaying ? <Reader emitClickEvent={handleClickEvent} currentArticle={lastArt}/> : null)}
      

    </div>
  )
}

export default PlaylistDisplay