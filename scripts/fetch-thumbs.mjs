import {
  readFileSync,
  existsSync,
  mkdirSync,
  writeFileSync,
  statSync,
} from "node:fs";

const src = readFileSync("src/data/tutorials.ts", "utf8");
const ids = [...src.matchAll(/youtubeId:\s*"([^"]+)"/g)].map((m) => m[1]);

mkdirSync("public/thumbs", { recursive: true });

for (const id of ids) {
  const out = `public/thumbs/${id}.jpg`;
  if (existsSync(out) && statSync(out).size > 0) continue;

  let ok = false;
  for (const quality of ["maxresdefault", "hqdefault"]) {
    const res = await fetch(`https://i.ytimg.com/vi/${id}/${quality}.jpg`);
    if (res.ok) {
      writeFileSync(out, Buffer.from(await res.arrayBuffer()));
      console.log(`baixada: ${id} (${quality})`);
      ok = true;
      break;
    }
  }
  if (!ok) console.warn(`falhou: ${id}`);
}
