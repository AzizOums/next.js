// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

const wordList: string[] = [
  "spiderman",
  "batman",
  "superman",
  "ironman",
  "captainamerica",
  "hulk",
  "flash",
  "arrow",
  "naruto",
  "goku",
  "jotaro",
  "dio",
  "luffy",
  "sanji",
  "shanks",
];

const randomWord = (req: NextApiRequest, res: NextApiResponse): void => {
  const word = wordList[
    Math.floor((1 + Math.random() * 100) % wordList.length)
  ].toUpperCase();

  res
    .status(200)
    .send({ word: word, charList: word.split("").map((e) => "_") });
};

export default randomWord;
