export function getPlaylistsItems(name) {
  return (state) => {
    return state.playlists.items.filter((plist) =>
      plist.name.toLowerCase().includes(name.toLowerCase())
    );
  };
}

export function getPlaylistsTotal(state) {
  return state.playlists.total;
}
