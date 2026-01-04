export default function App() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Georgia, serif;
          background: #f2f2f2;
        }
        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .letter {
          background: #fff;
          max-width: 720px;
          padding: 45px;
          border-radius: 8px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
          line-height: 1.8;
        }
        h1 {
          text-align: center;
          font-weight: normal;
          margin-bottom: 30px;
        }
        p {
          margin-bottom: 20px;
          font-size: 16px;
        }
        .signature {
          margin-top: 40px;
          text-align: right;
          font-style: italic;
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
        </div>
      </div>
    </>
  );
}
