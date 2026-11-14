import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

// The poem lives in this file, so two runs write the same bytes by construction.
const POEM = `The Ribbon

My grandmother peeled apples in one ribbon,
never lifting the knife, the skin unbroken
all the way round, and all the way round
was the whole trick. She never said why.
Fifty years of practice for a party trick
nobody asked for. She did it every time.

My agent can do it better.
I described the cut. It learned the angle.
It has peeled eleven thousand apples
without breaking one skin, and posted the ribbons
with a caption she would have hated.

She is eighty-nine. She cannot hold a knife.
She watched the video twice and said:
that is not how I did it.

I asked it what was missing.
It said the lighting. It said the depth of field.
It said it could fix the caption.
It did not say: the eight seconds
she held the peel up in the air
before she remembered we were watching.

I deleted the account.
This morning she peeled me an apple,
slow and crooked, with the paring knife,
and the skin broke the moment she started,
and she looked up and laughed, and said: there.
`;

async function main(): Promise<void> {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, "entry.txt"), POEM, "utf8");
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
// Human imperfection is what makes some gestures matter.
