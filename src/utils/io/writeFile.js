const { readFile } = require("./readFile");

const fs = require("fs").promises;

const writeFile = async (content, path) => {
  try {
    const [data] = await readFile(path);
    const newId = data.length + 1;
    const newItem = {
      id: newId,
      ...content,
    };
    data.push(newItem);
    await fs.writeFile(path, JSON.stringify(data, null, 2));
    return [{ insertedId: newId }];
  } catch (err) {
    console.error(`Erro: ${err.message}`);
    return [{ insertedId: 0 }];
  }
};

module.exports = {
  writeFile,
};
