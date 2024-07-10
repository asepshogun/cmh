
  /**
   * panorama 
   */

  const panoramaimage = new panolens.ImagePanorama("assets/arv.jpeg");
  const imageContainer = document.querySelector(".panorama");

  const viewer = new panolens.viewer({
    container: imageContainer,
  });

  viewer.add(panoramaimage);