//actionCreators
// #1 Создаем функцию для добавления в Редакс
  // Функция selectSong  принимает песню и создает сигнал редюсеру про выбор этой песни
export const selectSong = (song) =>{
    // возвращает обьект
    return {
       type:'SONG_SELECTED',
       payload: song
    };
};
export const deleteSong = (title) =>{
    // возвращает обьект
    return {
       type:'SONG_DELETED',
       payload: title
    };
};
export const editSongAction= (song) =>{
    return {
        type:'SONG_EDIT',
        payload:song
    }
}
export const selectEditSong= (song) =>{
    return {
        type:'EDIT_SONG_SELECTED',
        payload:song
    }
}
// Добавляет песню и посылает сигнал редюсеру о добавлении этой песни
export const addSong= (song) =>{
      return {
          type:'SONG_ADDED',
          payload:song
      }
}
// export default selectedSong