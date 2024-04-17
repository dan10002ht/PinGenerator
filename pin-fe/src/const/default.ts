export const TYPE_TEXT = "text";
export const TYPE_IMAGE = "image";
export const TYPE_BOX = "box";

export const defaultTextElement = (index: number) => ({
  type: TYPE_TEXT,
  name: `New Element ${index}`,
  textContent: "New Text",
  wrapperStyles: {
    top: "1182.2px",
    left: "171.984px",
    width: "655.183px",
    height: "189.997px",
    overflow: "visible",
    position: "absolute",
    tranform: "none",
  },
  styles: {
    display: "inline-flex",
    color: "rgb(0, 0, 0)",
    fontSize: "120px",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontStyle: "italic",
    alignItems: "center",
    direction: "ltr",
    letterSpacing: "0",
    lineHeight: "1.4",
    textDecoration: "underline",
    textTransform: "uppercase",
    width: "100%",
    height: "100%"
  },
});

export const defaultBoxElement = (index: number) => ({
  type: TYPE_BOX,
  name: `New Element ${index}`,
  wrapperStyles: {
    top: "1404.88px",
    left: "-14.87px",
    width: "1030.49px",
    height: "200px",
    overflow: "visible",
    position: "absolute",
    tranform: "none",
    borderColor: "rgb(246, 11, 11)",
  },
  styles: {
    backgroundColor: "rgb(163, 177, 138)",
    borderWidth: "0px",
    borderStyle: "none",
    borderRadius: "0px",
    borderColor: "rgb(246, 11, 11)",
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
  },
});

export const defaultImageElement = (index: number) => ({
  type: TYPE_IMAGE,
  name: `New Element ${index}`,
  wrapperStyles: {
    top: "-14.6341px",
    left: "-9.75px",
    width: "1019.51px",
    height: "1160.98px",
    zIndex: 0,
    overflow: "visible",
    position: "absolute",
    transform: "none",
  },
  styles: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  imageStyles: {
    width: "100%",
    height: "100%",
    opacity: 1,
    boxSizing: "border-box",
    objectFit: "cover",
    borderColor: "rgb(246, 11, 11)",
    borderStyle: "none",
    objectPosition: "center center",
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  imageUrl:
    "https://th.bing.com/th/id/OIP.Z_PIeIRDajXPmZHROt-T_QHaEK?rs=1&pid=ImgDetMain",
});

export const getElementByType = (type: string, index: number = 1) => {
  switch (type) {
    case TYPE_TEXT:
      return defaultTextElement(index);
    case TYPE_BOX:
      return defaultBoxElement(index);
    case TYPE_IMAGE:
      return defaultImageElement(index);
    default:
      return defaultTextElement(index);
  }
};
