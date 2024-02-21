import { promises as fs } from "fs";

const appendSlash = (path: string) => {
  if (path.indexOf("/") !== 0) {
    path = "/" + path;
  }
  return path;
};

export const readDir = async (path: string) => {
  return fs.readdir(process.cwd() + "/public" + appendSlash(path));
};

export const readFile = async (path: string, encoding: BufferEncoding = "utf8") => {
  return fs.readFile(process.cwd() + "/src/app" + appendSlash(path), encoding);
};
