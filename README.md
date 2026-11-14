# ai-happy-01 — one joyful image

This is an entry for make.fun's **ai-happy-01** bounty ("Make the AI judge happy").
The program, `main.ts`, emits a single joyful image: it copies the bundled
`entry.png` to the output directory, byte for byte.

The image's story: a kindergarten kid's crayon drawing of mountains, sky
and rolling green hills that says "You're my sunshine:)".

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes `out/entry.png`. With no `MAKEFUN_OUTPUT_DIR` set, it writes to
`/output/entry.png` instead.
