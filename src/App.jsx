import { useEffect, useRef, useState } from "react";

export default function App() {
  const [showSketch, setShowSketch] = useState(false);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!showSketch) return;

    const img = imgRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    img.onload = () => {
      const maxWidth = 500; // limit size for mobile
      const scale = Math.min(maxWidth / img.width, 1);

      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Grayscale conversion
      for (let i = 0; i < data.length; i += 4) {
        const gray =
          0.299 * data[i] +
          0.587 * data[i + 1] +
          0.114 * data[i + 2];
        data[i] = data[i + 1] = data[i + 2] = gray;
      }

      ctx.putImageData(imageData, 0, 0);
    };
  }, [showSketch]);

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Georgia, serif;
          background: linear-gradient(180deg, #f7f7f7, #eaeaea);
        }

        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px 20px;
        }

        .letter {
          background: #ffffff;
          max-width: 760px;
          padding: 55px 50px;
          border-radius: 12px;
          box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.08),
            0 2px 6px rgba(0, 0, 0, 0.04);
          line-height: 1.9;
          color: #2f2f2f;
          position: relative;
        }

        .letter::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 6px;
          width: 100%;
          background: linear-gradient(90deg, #c9a227, #e6c85c);
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }

        h1 {
          text-align: center;
          font-weight: normal;
          letter-spacing: 1px;
          margin-bottom: 40px;
          color: #1f1f1f;
        }

        p {
          font-size: 17px;
          margin-bottom: 26px;
        }

        .signature {
          margin-top: 45px;
          text-align: right;
          font-style: italic;
          color: #555;
        }

        .reveal-btn {
          margin-top: 35px;
          padding: 10px 18px;
          border: 1px solid #999;
          background: transparent;
          cursor: pointer;
          font-family: inherit;
          font-size: 15px;
        }

        .reveal-btn:hover {
          background: #f5f5f5;
        }

        canvas {
          margin-top: 30px;
          max-width: 100%;
          border-radius: 8px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
        }

        @media (max-width: 600px) {
          .letter {
            padding: 40px 25px;
          }

          p {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="container">
        <div className="letter">
          <h1>I’m Truly Sorry</h1>

          <p>
            I’m sorry for hurting you. I take full responsibility for the pain
            my actions caused.
          </p>

          <p>
            You trusted me with your feelings, and I couldn’t give you the
            assurance you needed. I understand how deeply that hurt you.
          </p>

          <p>
            You did nothing wrong. The pain you felt was not because you
            weren’t enough.
          </p>

          <p>
            I’m sorry for the sadness and confusion this caused. I acknowledge
            the hurt without trying to justify it.
          </p>

          <p>
            I will always respect you and be grateful for the place you hold
            in my life.
          </p>

          <div className="signature">— I’m sorry</div>

          {!showSketch && (
            <button
              className="reveal-btn"
              onClick={() => setShowSketch(true)}
            >
              View sketch
            </button>
          )}

          {showSketch && (
            <>
              <img
                ref={imgRef}
                src="/vyshu.jpeg"
                alt=""
                style={{ display: "none" }}
              />
              <canvas ref={canvasRef}></canvas>
            </>
          )}
        </div>
      </div>
    </>
  );
}
