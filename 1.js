// Задание 1

const musicCollection = {
    albums: [
        { title: "Songs About Jane", artist: "Maroon 5", year: "2002" },
        { title: "A Few Songs About Jane", artist: "Maroon 5", year: "2003" },
        { title: "1.22.03 Acoustic (Live) - EP", artist: "Maroon 5", year: "2004"},
]
};
musicCollection[Symbol.iterator] = function() {
   let index = 0;
   return {
    next: () => {
        return index < this.albums.length ?
        { value: this.albums[index++], done: false } :
        { value: undefined, done: true };
    }
}
}

for (const album of musicCollection) {
        console.log(`Название альбома: ${album.title}, Исполнитель: ${album.artist} (Год выпуска: ${album.year})`);
    }
