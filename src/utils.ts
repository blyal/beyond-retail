export const preloadImages = (images: string[]) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

export const doesBrowserSupportWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.src = "/moeliker.webp";
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
};
