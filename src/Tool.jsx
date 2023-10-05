import noImage from "./NoImage.jpg";

export const validateImage = (path, image) => {
    return image == undefined ? noImage : path + image;
}