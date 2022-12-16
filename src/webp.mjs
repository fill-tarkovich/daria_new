import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

(async () => {
  await imagemin(["src/img/*.{jpg,png}"], {
    destination: "src/img/webp",
    plugins: [imageminWebp({ quality: 90 })],
  });
  console.log("optimized");
})();
