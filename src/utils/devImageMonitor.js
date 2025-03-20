// Development helper to monitor image loading performance
export const monitorImages = () => {
  if (process.env.NODE_ENV !== "production") {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      // Add load timing information
      img.addEventListener("load", () => {
        const loadTime = performance.now();
        console.log(`Image loaded: ${img.src}`);
        console.log(`Size: ${img.naturalWidth}x${img.naturalHeight}`);

        // Create a colored border based on image size
        const size = img.naturalWidth * img.naturalHeight;
        if (size > 500000) {
          // Large images
          img.style.border = "3px solid red";
        } else if (size > 100000) {
          // Medium images
          img.style.border = "3px solid orange";
        } else {
          img.style.border = "3px solid green";
        }
      });
    });
  }
};
