#!/usr/bin/env node
const note = process.argv[2];

const newNote = {
  id: Date.now(),
  note,
};

console.log("Note created: ", newNote);
