import { NavBar } from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export const Formpage = () => {
  const navigate = useNavigate();
  const [num, setNum] = useState();
  const [imageFile, setImageFile] = useState();
  const [description, setDescription] = useState();
  const [outputImage, setOutputImage] = useState();
  const [outputDescription, setOutputDescription] = useState();

  function handleChange(e) {
    setImageFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleDownload = (e) => {
    if (outputImage != null) {
      const imageUrl = outputImage;
      fetch(imageUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "downloaded_image.jpg";
          document.body.appendChild(link);
          link.click();
          URL.revokeObjectURL(url);
          document.body.removeChild(link);
        });
    }
  };

  const handleSubmit = async (e) => {
    let data = new FormData();
    e.preventDefault();
    data.append("description", description);
    data.append("image", imageFile);
    axios
      .post("http://localhost:5000/api/acts/pst")
      .then(
        (response) => {
          console.log(response);
          setDescription("");
          setImageFile(null);
          setOutputDescription(response.description);
          setOutputImage(response.image);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
    <NavBar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="textFormControlInput1">Description</label>
                <input
                  type="text"
                  className="form-control"
                  value={num}
                  onChange={(e) => setDescription(e.target.value)}
                  id="textFormControlInput1"
                  placeholder="Enter Activity Number:"
                  required={true}
                />
              </div>
              <div className="form-group">
                <label htmlFor="imageFormControlInput1">Image</label>
                <input
                  type="file"
                  onChange={handleChange}
                  id="imageFormControlInput1"
                  required={true}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="outputDisplay">
              <div className="row">
                <div className="col">
                  <p>Output:</p>
                </div>
                <div className="col">
                  <img
                    src={outputImage}
                    className="rounded float-right"
                    alt="Output Image"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>Description:</p>
                </div>
                <div className="col">
                  <p>{outputDescription || "None"}</p>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleDownload}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formpage;
