const getSimilarPersons = (userId) => {
    return new Promise((resolve)=>
    resolve([
      {
        id: 3,
        name: "Larissa",
      },
      {
        id: 1,
        name: "Rafael",
      },
      {
        id: 5,
        name: "Miguel",
      },
    ])
  );
}
  

module.exports = {
  getSimilarPersons,
};
