const { writeFile, readFile } = require("../utils/io");
const path = require("path");

const USER_PATH = path.resolve(__dirname, "..", "database", "users.json");

const findAll = async () => await readFile(USER_PATH);

const findById = async (id) => {
    const [users] = await findAll()
    return users.find((user) => user.id === Number(id));
}

const exists = async (id) => {
  const user = await findById(id);
  return user ? true : false;
};

module.exports = {
  findAll,
  findById,
  exists,
};
