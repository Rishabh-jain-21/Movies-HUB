const useGenres = (selectedgenres) => {
    if (selectedgenres.length < 1) {
        return "";
    }
    const GenresId = selectedgenres.map((elm) => elm.id);
    //reduce function takes two parameter accumulator having current values
    return GenresId.reduce((acc, curr) => acc + "," + curr);
}
export default useGenres;