export const useImage = () => {
  const images = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,svg,webp}')

  async function resolveImageUrl(filename: string): Promise<string | null> {
    const path = `/src/assets/${filename}`
    const loader = images[path]
    if (!loader) return null

    const mod = (await loader()) as { default: string }
    return mod.default
  }

  return {
    getImage: (filename: string) => resolveImageUrl(filename),
  }
}
