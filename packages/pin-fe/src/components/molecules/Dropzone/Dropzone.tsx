import React, { useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  height: "300px",
  maxHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  fontSize: "28px",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const getFileSrc = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      resolve(e.target.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};

function Dropzone() {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({ multiple: false });

  const [imageSrc, setImageSrc] = useState([]);

  useEffect(() => {
    const fetchFileSrcs = async () => {
      const srcs = await Promise.all(
        acceptedFiles.map(async (file) => {
          const src = await getFileSrc(file);
          return src;
        })
      );
      setImageSrc(srcs);
    };
    fetchFileSrcs();
  }, [acceptedFiles]);

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  //   const hasImage = imageSrc.length > 0;

  return (
    <div className="container">
      <div
        {...getRootProps({
          style: { ...style, display: imageSrc.length ? "none" : "flex" },
        })}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <img
          style={{ objectFit: "cover", width: "100%" }}
          src={imageSrc[0]}
          alt=""
        />
      </div>
    </div>
  );
}

export default Dropzone;
