import { ImageProcessor } from "./models/ImageProcessor";
import { GrayscaleStrategy } from "./models/GrayscaleStrategy";
import { SepiaStrategy } from "./models/SepiaStrategy";
import { NegativeStrategy } from "./models/NegativeStrategy";

const imageProcessor = new ImageProcessor(new GrayscaleStrategy());
imageProcessor.applyFilter("image.png");

imageProcessor.setFilterStrategy(new SepiaStrategy());
imageProcessor.applyFilter("image2.png");

imageProcessor.setFilterStrategy(new NegativeStrategy());
imageProcessor.applyFilter("image3.png");
