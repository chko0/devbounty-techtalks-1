export function normalizeAssets(globImport, keyFormatter) {
  return Object.fromEntries(
    Object.entries(globImport).map(([path, module]) => {
      const filename = path
        .split("/")
        .pop()
        .replace(/\.[^/.]+$/, "");
      const key = keyFormatter ? keyFormatter(filename, path) : filename;
      return [key, module];
    })
  );
}
